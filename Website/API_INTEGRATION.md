# Mango Ride API Integration Guide

## Database Setup with NEON

### 1. Create NEON Database

1. Go to [neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Note your connection string (looks like: `postgresql://user:password@host/database`)

### 2. Database Schema

```sql
-- Users table for registration
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster email lookups
CREATE INDEX idx_users_email ON users(email);

-- Optional: Bookings table (for future use)
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    pickup_location VARCHAR(500) NOT NULL,
    dropoff_location VARCHAR(500) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Backend API Setup

### Option 1: Node.js + Express

1. Create a new folder for your backend:
```bash
mkdir mango-ride-api
cd mango-ride-api
npm init -y
```

2. Install dependencies:
```bash
npm install express pg cors dotenv
```

3. Create `.env` file:
```env
DATABASE_URL=your_neon_connection_string
PORT=3001
```

4. Create `server.js`:
```javascript
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(cors());
app.use(express.json());

// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { fullName, email, phone, city } = req.body;

  try {
    // Check if user already exists
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Insert new user
    const result = await pool.query(
      'INSERT INTO users (full_name, email, phone, city) VALUES ($1, $2, $3, $4) RETURNING *',
      [fullName, email, phone, city]
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: result.rows[0]
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

5. Start the server:
```bash
node server.js
```

### Option 2: Serverless (Vercel/Netlify)

Create `api/register.js`:
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, city } = req.body;

  try {
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const result = await pool.query(
      'INSERT INTO users (full_name, email, phone, city) VALUES ($1, $2, $3, $4) RETURNING *',
      [fullName, email, phone, city]
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: result.rows[0]
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
```

## Frontend Integration

Update `src/components/Registration.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
      // Optional: Send welcome email, analytics event, etc.
    } else {
      alert(data.error || 'Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    alert('Failed to register. Please try again.');
  }
};
```

## Environment Variables

For production, update your frontend `.env`:

```env
VITE_API_URL=https://your-api-domain.com
```

And use it in your code:
```javascript
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
  // ...
});
```

## Security Best Practices

1. **Validate input** on both frontend and backend
2. **Use HTTPS** in production
3. **Add rate limiting** to prevent abuse
4. **Sanitize user input** to prevent SQL injection
5. **Use prepared statements** (already done with parameterized queries)
6. **Add CORS properly** for production domains
7. **Hash sensitive data** if storing passwords

## Testing the Integration

1. Start your backend server
2. Start your frontend development server
3. Fill out the registration form
4. Check your NEON database to verify the data was inserted

## Additional Features to Consider

- Email verification
- Google OAuth integration
- Password reset functionality
- User profile management
- Admin dashboard for viewing registrations

## Troubleshooting

**CORS Issues:**
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
```

**Database Connection Issues:**
- Verify your connection string
- Check if your IP is whitelisted in NEON
- Ensure SSL is configured correctly

**Port Conflicts:**
- Change the PORT in your .env file
- Update the API URL in your frontend

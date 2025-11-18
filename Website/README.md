# Mango Ride - Marketing Website

A modern, responsive single-page marketing website for Mango Ride, a ride-hailing mobile application. Built with React, Vite, and Tailwind CSS.

## 🎨 Features

- **Modern Design**: Clean, aesthetic, and visually appealing interface with smooth animations
- **Fully Responsive**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Single Page Application**: Smooth scrolling between sections
- **Registration Form**: User-friendly form ready for database integration
- **Component-Based**: Modular React components for easy maintenance
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 📋 Sections

1. **Hero Section**: Eye-catching landing with call-to-action buttons
2. **Features**: Showcase of key features with icons and descriptions
3. **How It Works**: Step-by-step guide to using the service
4. **Why Choose Us**: Benefits and user testimonials
5. **Download**: App store links and download information
6. **Registration**: Sign-up form for early access (DB-ready)
7. **Footer**: Contact information and links

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```powershell
cd "c:\Users\sufya\OneDrive\Desktop\Aam"
```

2. Install dependencies:
```powershell
npm install
```

3. Start the development server:
```powershell
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```powershell
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```powershell
npm run preview
```

## 🗄️ Database Integration

The registration form is ready for database integration with NEON DB. To connect:

### 1. Set up NEON DB

- Create a NEON PostgreSQL database
- Note your connection string

### 2. Create API Endpoint

Create a backend API endpoint (e.g., `/api/register`) that accepts POST requests with the following structure:

```javascript
{
  fullName: string,
  email: string,
  phone: string,
  city: string
}
```

### 3. Update Registration Component

In `src/components/Registration.jsx`, uncomment and update the API call in the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      setIsSubmitted(true);
    } else {
      // Handle error
      console.error('Registration failed:', data);
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
};
```

### 4. Database Schema Example

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50) NOT NULL,
  city VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📁 Project Structure

```
Aam/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Download.jsx
│   │   ├── Registration.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors

The primary brand colors are defined in `tailwind.config.js`:
- Orange: Used for primary actions and accents
- Yellow: Used for gradients and highlights

### Content

All content can be easily modified in the respective component files in `src/components/`.

### Images

To add custom images:
1. Place images in the `public` folder
2. Reference them in components using `/image-name.jpg`

## 🔧 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library (Feather Icons)
- **Framer Motion**: Animation library (ready to use)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for Mango Ride. All rights reserved.

## 👨‍💻 Development

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation links in `Navbar.jsx` if needed

### Modifying Styles

- Global styles: `src/index.css`
- Component styles: Use Tailwind classes directly in JSX
- Custom animations: Add to `tailwind.config.js`

## 🆘 Support

For questions or support:
- Email: support@mangoride.com
- Phone: +1 (234) 567-890

## 🎯 Next Steps

1. Set up NEON DB connection
2. Implement backend API for user registration
3. Add Google Authentication (optional)
4. Set up email notifications
5. Add analytics tracking
6. Deploy to production

---

Built with ❤️ for Mango Ride

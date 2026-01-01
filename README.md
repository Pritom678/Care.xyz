# Care.xyz - Trusted Caregiving Services

A modern Next.js application providing trusted caregiving services for children, elderly, and families. Features professional caregiver booking, authentication, and beautiful animations.

## Features

- **Professional Caregiver Booking** - Browse and book verified caregivers
- **User Authentication** - Secure login/registration with NextAuth.js
- **Smooth Animations** - Engaging UI animations with GSAP
- **Responsive Design** - Optimized for desktop and mobile with Tailwind CSS and DaisyUI
- **Email Notifications** - Booking confirmations via Nodemailer
- **Database Management** - MongoDB for storing user and booking data

## Getting Started

First, install dependencies and run the development server:

`bash
npm install
npm run dev
`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Technologies & Dependencies

### Core Framework
- **Next.js** (16.1.1) - React framework for production
- **React** (19.2.3) - UI library
- **React DOM** (19.2.3) - React rendering

### Styling & UI
- **Tailwind CSS** (4.1.18) - Utility-first CSS framework
- **DaisyUI** (5.5.14) - Tailwind component library
- **PostCSS** (4.1.18) - CSS processing

### Animations
- **GSAP** (3.14.2) - Professional animation library
- **@gsap/react** (2.1.2) - React hook for GSAP

### Authentication & Security
- **NextAuth.js** (4.24.13) - Authentication for Next.js
- **Bcrypt** (6.0.0) - Password hashing
- **bcryptjs** (3.0.3) - Alternative password hashing
- **Jose** - JWT token handling

### Database
- **MongoDB** (7.0.0) - NoSQL database
- **Mongoose** - MongoDB object modeling (via driver)

### Email & Notifications
- **Nodemailer** (7.0.12) - Email sending service
- **SweetAlert2** (11.26.17) - Beautiful alerts and confirmations

### UI Icons & Utilities
- **React Icons** (5.5.0) - Icon library
- **Next Image** - Optimized image handling

## Project Structure

`
care-service/
 src/
    app/              # Next.js app directory
    components/       # Reusable React components
    actions/          # Server actions
    lib/             # Utility functions and configurations
    provider/        # Context providers
 public/              # Static assets
 package.json         # Dependencies and scripts
 README.md           # This file
`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Animation Features

The application includes smooth GSAP animations for:
- **Banner Carousel** - Auto-sliding banner with fade and slide transitions
- **Logo Animation** - Fade-in effect on page load
- **Navigation Menu** - Staggered animation for nav items
- **Responsive interactions** - Smooth transitions throughout the UI

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [GSAP Animation Library](https://gsap.com)
- [NextAuth.js](https://next-auth.js.org)
- [MongoDB Documentation](https://docs.mongodb.com)

## Deployment

This application can be deployed on [Vercel](https://vercel.com) or any Node.js hosting platform.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

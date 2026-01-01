# Care.xyz - Trusted Caregiving Services

A modern Next.js application providing trusted caregiving services for children, elderly, and families. Features professional caregiver booking, secure authentication, and smooth GSAP animations for an engaging user experience.

## Project Overview

Care.xyz is a full-stack web application that connects families with verified professional caregivers. The platform offers intuitive booking, user authentication, email notifications, and a beautiful responsive UI with smooth animations.

## What I've Done

### 1. **Setup & Architecture**
   - Initialized a Next.js 16.1.1 project with modern React 19.2.3
   - Configured Tailwind CSS 4.1.18 for utility-first styling
   - Set up DaisyUI component library for enhanced UI components
   - Implemented NextAuth.js for secure authentication system
   - Configured MongoDB for data persistence

### 2. **Animation Implementation**
   - Integrated GSAP (3.14.2) and @gsap/react (2.1.2) for professional animations
   - **Banner Component**: Created auto-sliding carousel with smooth fade and slide transitions
     - 5-second auto-rotation between 3 slides
     - Smooth text animations for titles and descriptions
     - Manual navigation with indicator dots
   - **Logo Component**: Added fade-in animation on page load
   - **Navigation Bar**: Implemented staggered animation for nav items with smooth entry

### 3. **Authentication System**
   - Implemented secure user registration and login
   - Password hashing with Bcrypt and bcryptjs
   - Session management with NextAuth.js and JWT tokens
   - Protected routes for authenticated users only
   - "My Bookings" feature only visible to logged-in users

### 4. **Booking System**
   - Service browsing and selection
   - Dynamic booking form with service-specific information
   - Booking confirmation and tracking
   - My Bookings page for user's booking history

### 5. **Email Notifications**
   - Integrated Nodemailer for sending emails
   - Booking confirmation emails
   - Professional email templates
   - Email verification system

### 6. **UI/UX Components**
   - Responsive navbar with mobile menu
   - Professional footer
   - Service cards with detailed information
   - About, Contact, and Services pages
   - User registration and login forms
   - Beautiful alerts with SweetAlert2

## Tech Stack & Dependencies

### Core Framework & Runtime
```json
{
  "next": "16.1.1",
  "react": "19.2.3",
  "react-dom": "19.2.3"
}
```
- **Next.js**: React framework with built-in optimization and server-side rendering
- **React**: UI library for building interactive components
- **React DOM**: React rendering for web browsers

### Styling & UI Framework
```json
{
  "@tailwindcss/postcss": "4.1.18",
  "tailwindcss": "4.1.18",
  "daisyui": "5.5.14",
  "postcss": "4.1.18"
}
```
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **DaisyUI**: Pre-built Tailwind components for faster development
- **PostCSS**: CSS transformation tool for processing stylesheets

### Animations & Interactions
```json
{
  "gsap": "3.14.2",
  "@gsap/react": "2.1.2"
}
```
- **GSAP**: Industry-standard JavaScript animation library for smooth, high-performance animations
- **@gsap/react**: React hook integration for GSAP for optimal performance

### Authentication & Security
```json
{
  "next-auth": "4.24.13",
  "bcrypt": "6.0.0",
  "bcryptjs": "3.0.3",
  "jose": "^5.0.0"
}
```
- **NextAuth.js**: Complete authentication solution for Next.js
- **Bcrypt**: Industry-standard password hashing library
- **bcryptjs**: JavaScript implementation of bcrypt for password security
- **Jose**: JWT (JSON Web Tokens) handling for secure token management

### Database
```json
{
  "mongodb": "7.0.0"
}
```
- **MongoDB**: NoSQL database for flexible data storage and retrieval
- Includes Mongoose driver for object modeling and schema validation

### Email Service
```json
{
  "nodemailer": "7.0.12"
}
```
- **Nodemailer**: Popular Node.js email sending library for SMTP-based emails

### User Experience
```json
{
  "react-icons": "5.5.0",
  "sweetalert2": "11.26.17"
}
```
- **React Icons**: Comprehensive icon library with React components
- **SweetAlert2**: Beautiful, responsive, and customizable alerts/modals

### Development Tools
```json
{
  "eslint": "^9",
  "eslint-config-next": "16.1.1"
}
```
- **ESLint**: Code quality and style linting
- **ESLint Next.js Config**: Next.js specific linting rules

## Project Structure

```
care-service/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.jsx                  # Home page
│   │   ├── layout.jsx                # Root layout with Navbar & Footer
│   │   ├── globals.css               # Global styles
│   │   ├── loading.jsx               # Loading state component
│   │   ├── error.jsx                 # Error boundary component
│   │   ├── not-found.jsx             # 404 page
│   │   ├── about-us/
│   │   │   └── page.jsx              # About Us page
│   │   ├── services/
│   │   │   ├── page.jsx              # Services listing
│   │   │   └── [id]/
│   │   │       └── page.jsx          # Service detail page
│   │   ├── booking/
│   │   │   └── [serviceId]/
│   │   │       └── page.jsx          # Booking form page
│   │   ├── my-bookings/
│   │   │   └── page.jsx              # User's bookings history
│   │   ├── login/
│   │   │   └── page.jsx              # Login page
│   │   ├── register/
│   │   │   └── page.jsx              # Registration page
│   │   ├── contact/
│   │   │   └── page.jsx              # Contact page
│   │   └── api/
│   │       └── auth/
│   │           └── [...nextauth]/
│   │               └── route.js      # NextAuth API routes
│   ├── components/
│   │   ├── home/
│   │   │   ├── Banner.jsx            # Animated banner carousel
│   │   │   ├── AboutMission.jsx      # Mission section
│   │   │   └── Testimonials.jsx      # Testimonials section
│   │   ├── about/
│   │   │   ├── AboutIntro.jsx        # About introduction
│   │   │   └── FounderStory.jsx      # Founder story
│   │   ├── services/
│   │   │   ├── Services.jsx          # Services overview
│   │   │   └── ServiceCard.jsx       # Individual service card
│   │   ├── booking/
│   │   │   ├── BookingForm.jsx       # Booking form component
│   │   │   └── MyBookings.jsx        # Bookings list component
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx         # Login form
│   │   │   ├── RegisterForm.jsx      # Registration form
│   │   │   └── SocialButton.jsx      # Social login button
│   │   └── shared/
│   │       ├── Navbar.jsx            # Navigation bar with animations
│   │       ├── Logo.jsx              # Logo with fade-in animation
│   │       └── Footer.jsx            # Footer component
│   ├── actions/
│   │   └── server/
│   │       ├── auth.js               # Authentication server actions
│   │       ├── booking.js            # Booking server actions
│   │       ├── location.js           # Location server actions
│   │       └── services.js           # Services server actions
│   ├── lib/
│   │   ├── authOption.js             # NextAuth configuration
│   │   ├── dbConnect.js              # MongoDB connection
│   │   ├── sendEmail.js              # Nodemailer email sender
│   │   └── invoiceTemplate.js        # Email template for invoices
│   ├── provider/
│   │   └── NextAuthProvider.jsx      # NextAuth session provider
│   └── proxy.js                      # Proxy configuration
├── public/
│   ├── banner/                       # Banner images
│   ├── about/                        # About page images
│   ├── testimonials/                 # Testimonial images
│   └── care.png                      # Logo
├── package.json                      # Dependencies and scripts
├── package-lock.json                 # Locked dependency versions
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── jsconfig.json                     # JavaScript configuration
├── eslint.config.mjs                 # ESLint configuration
└── README.md                         # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB instance (local or cloud)
- Email service credentials (for Nodemailer)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd care-service
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email
   EMAIL_PASSWORD=your_email_password
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint for code quality

## Key Features Implemented

### 🎨 Animations
- Smooth GSAP-powered banner carousel with auto-rotation
- Fade-in animations on logo and navigation items
- Responsive animations that work on all devices
- Optimized animation performance using @gsap/react hooks

### 🔐 Authentication
- Secure user registration and login
- Password hashing with industry-standard Bcrypt
- Session management with NextAuth.js
- Protected routes and conditional rendering based on auth status

### 📅 Booking System
- Browse available services
- Dynamic booking form
- Booking confirmation and history
- Email notifications on booking

### 📧 Email Notifications
- Booking confirmation emails
- Professional email templates
- HTML-based email design

### 🎯 User Experience
- Responsive design for desktop and mobile
- Smooth transitions and interactions
- Professional UI with DaisyUI components
- Beautiful alerts with SweetAlert2

## Dependencies Overview

| Category | Purpose | Key Packages |
|----------|---------|--------------|
| **Framework** | React app with Next.js | next, react, react-dom |
| **Styling** | CSS and component library | tailwindcss, daisyui, postcss |
| **Animations** | Smooth, high-performance animations | gsap, @gsap/react |
| **Authentication** | Secure user auth and sessions | next-auth, bcrypt, bcryptjs, jose |
| **Database** | Data persistence | mongodb |
| **Email** | Email sending service | nodemailer |
| **UI Enhancements** | Icons and alerts | react-icons, sweetalert2 |
| **Development** | Code quality tools | eslint |

## Performance Optimizations

- Next.js Image optimization for responsive images
- Code splitting and lazy loading with Next.js
- GSAP animations optimized with React hooks
- MongoDB query optimization with proper indexing
- CSS minification with Tailwind CSS

## Security Features

- Password hashing with Bcrypt
- Secure session management with NextAuth.js
- JWT token handling with Jose
- Protected API routes
- Environment variables for sensitive data

## Future Enhancements

- Payment integration for booking
- Caregiver profile and ratings system
- Advanced search and filtering
- Calendar integration for booking
- Push notifications
- Mobile app development

## Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [GSAP Documentation](https://gsap.com)
- [NextAuth.js](https://next-auth.js.org)
- [MongoDB](https://docs.mongodb.com)
- [Nodemailer](https://nodemailer.com)

## License

This project is open source and available under the MIT License.

## Author

Care.xyz Development Team

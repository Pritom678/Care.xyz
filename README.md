# 🏥 Care.xyz — Trusted Caregiving Services Platform

**Care.xyz** is a full-stack web platform that connects users with professional caregiving services for **children, elderly people, and home care needs**.  
The platform focuses on **trust, safety, convenience, and transparency**, allowing users to browse services, book care, and manage their bookings securely.

🌐 **Live Website:**  
👉 https://carexyz-ten.vercel.app/

---

## ✨ Key Features

### 👥 User Authentication
- Secure login & registration using **NextAuth**
- Session-based authentication
- Protected private routes (booking, dashboard, my bookings)
- Logged-in users can:
  - Book services
  - View their bookings
  - Delete their bookings

---

### 🧑‍⚕️ Services System
- Dynamic service listing from MongoDB
- Each service includes:
  - Name
  - Category
  - Description
  - Features
  - Price
  - Image
- Individual **Service Details Page**
- “Book Now” button redirects to booking page with **preselected service**

---

### 📅 Booking System
- Booking form dynamically pre-fills:
  - Selected service
  - Price per day
- User selects:
  - Duration (days)
  - Location (Division → District → City → Area)
- Automatic total cost calculation
- Booking saved securely in MongoDB
- Each booking contains:
  - Service info
  - Duration
  - Price per day
  - Total cost
  - Location
  - User email
  - Status (Pending / Approved)
  - Created date

---

### 📍 Location Selection
- Hierarchical location system:
  - Division
  - District
  - City
  - Area
- Data fetched dynamically from MongoDB
- Dropdowns update automatically based on selection

---

### 📦 My Bookings Page
- Shows **only the logged-in user’s bookings**
- Each booking card displays:
  - Service image
  - Service name
  - Duration
  - Total cost
  - Status badge
  - Full location
  - Booking date
- Actions:
  - 🗑️ Delete booking
  - 👁️ View booking details

---

### 🔐 Security
- Server-side authentication using `getServerSession`
- Users can **only view & delete their own bookings**
- MongoDB queries secured by user email
- Private route protection via Next.js Middleware

---

### 🧾 Invoice & Email System
- Custom HTML invoice template
- Invoice includes:
  - Order/Booking ID
  - Service list
  - Total price
  - Branding for Care.xyz
- Ready for email delivery integration

---

### ⚠️ Error Handling & UX
- Custom pages:
  - `not-found.js` (404)
  - `error.js` (runtime errors)
  - `loading.js` (animated loading screen)
- SweetAlert2 (`Swal.fire`) for:
  - Success messages
  - Error messages
  - Confirmations
- Smooth user experience with animations

---

## 🧠 SEO & Performance
- Dynamic metadata using Next.js App Router
- SEO-friendly titles & descriptions
- Optimized images using `next/image`
- Fast page loads with Server Components

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14 (App Router)**
- React
- Tailwind CSS
- DaisyUI
- SweetAlert2
- Next/Image

### Backend
- Next.js Server Actions
- MongoDB
- NextAuth
- Middleware for route protection

### Authentication
- NextAuth
- JWT sessions
- Secure cookies

### Deployment
- **Vercel**

---

## 📁 Project Structure (Simplified)



# 🌿 Plant Care Tracker - Category: Mango

**Live URL**: [Live Link](https://sprightly-valkyrie-f311ec.netlify.app/)

Plant Care Tracker is a full-stack, mobile-responsive web application built to help users manage and monitor the care of their indoor and outdoor plants. Designed with a creative "Mango Plant" theme, it functions as a digital gardening assistant where users can add, track, and update care details for their beloved plants.

---

## 🚀 Features

- 🔒 **User Authentication**: Register/login with Email/Password and Google. Secure user sessions with private routes.
- 🌱 **Add & Manage Plants**: Authenticated users can add, update, and delete their plant entries with full care details.
- 🧠 **Smart Tracking**: Log and sort by watering frequency, care level, and dates with meaningful system feedback.
- 📱 **Fully Responsive UI**: Works seamlessly across mobile, tablet, and desktop devices with a mango-themed aesthetic.
- 🌙 **Dark/Light Mode**: Toggle between light and dark themes for a personalized experience.
- 📆 **Date Sorting & Extras**: Sort plants by next watering date or care level. Uses `date-fns` for date management and `react-tooltip` for helpful UI prompts.

---

## 📸 Screenshots

> _Add screenshots of your homepage, dashboard, and a few features here when submitting._

---

## 📂 Pages Overview

### 🔐 Authentication

- **Register**: Name, Email, PhotoURL, Password (with strong validation).
- **Login**: Email/Password & Google Sign-In.
- ✅ Success and error messages shown using toast/SweetAlert.

### 🏡 Home Page

- Navbar, Hero Slider (3 slides with plant care tips), New Plants section (6+ cards).
- Additional sections: “Top Plant Care Mistakes” and “Beginner-Friendly Plants”.

### ➕ Add Plant (Private Route)

- Dropdowns for Category & Care Level.
- Inputs for name, image, description, watering frequency, dates, health status, and user info.
- Success feedback shown via custom notifications.

### 📋 All Plants

- Table layout showing plant info with View Details.
- Sort by Next Watering Date or Care Level.

### 🔍 Plant Details (Private Route)

- Full plant profile view with creative design and user-added info.

### 🌾 My Plants (Private Route)

- Show only user-added plants.
- Update and Delete functionalities with confirmation modal.

### 🛠 Update Page

- Pre-filled form with editable fields.
- Toast success notification after update.

### 🚫 404 Page

- Custom, visually creative error page for non-existent routes.

### ⏳ Loading Spinner

- Shown during data fetching and major actions.

### 🔽 Footer

- Includes website branding, contact info, and social links.

---

## 🛠 Technologies Used

### Frontend:

- React.js, React Router
- Tailwind CSS & DaisyUI
- Axios
- SweetAlert2, React Toastify
- React Tooltip
- Lottie React
- Date-fns

### Backend:

- Node.js, Express.js
- MongoDB Atlas
- Firebase Authentication
- CORS, dotenv, JSON Web Tokens (JWT)

---

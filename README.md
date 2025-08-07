
# 1SHOTE - Streetwear E-Commerce Website

1SHOTE is a modern, minimalistic e-commerce platform for streetwear clothing, designed for teenagers and young adults. This project includes both frontend (React + Vite) and backend (Express + MongoDB) components.

---

## 🌐 Live Links

- **Frontend:** [https://1-shote-frontend.vercel.app](https://1-shote-frontend.vercel.app)
- **Backend API:** [https://oneshote-backend.onrender.com](https://oneshote-backend.onrender.com)

---

## 📦 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js & Express
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcrypt for password hashing

---

## ⚙️ Environment Variables Setup

### 🔐 Backend `.env` example:
```
PORT=3000
MONGO_URI=your_mongo_connection_string_here
FRONT_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret_here
NODE_ENV=production
```

### 🌍 Frontend `.env` example (Vite):
```
VITE_API_BASE_URL=https://oneshote-backend.onrender.com
```

> ⚠️ **Never expose real credentials or secrets in public repositories.**

---

## 🚀 Getting Started (Locally)

### Backend
```bash
cd backend
npm install
npm run mon
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🧠 Features

- User Signup/Login with JWT auth and HTTPOnly cookies
- Secure password hashing (bcrypt)
- Add to Cart, Wishlist functionality
- Responsive UI with card-based product listing
- Login form with validation and error handling

---

## 🛠 Deployment

- **Frontend:** Vercel (https://vercel.com/)
- **Backend:** Render (https://render.com/)

---

## 📌 TODO / Future Enhancements

- Admin panel for product management
- Payment gateway integration (Razorpay, Stripe)
- Order tracking system
- Product filtering and sorting
- Add loading skeletons and improve UX

---

## 🙋‍♂️ Author

**Suraj Yadav**  
Student & Developer | Building 1SHOTE

---

## 📄 License

This project is open-source and free to use for learning purposes.

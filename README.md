skill-platform/
│
├── client/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── pages/ # Login, Register, Dashboard
│ │ ├── components/ # Reusable UI (future)
│ │ ├── services/ # API calls (axios)
│ │ ├── context/ # Auth state (future)
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ └── package.json
│
├── server/ # Backend (Node + Express)
│ ├── controllers/ # Business logic (authController.js)
│ ├── models/ # MongoDB schemas (User.js)
│ ├── routes/ # API routes (authRoutes.js)
│ ├── middleware/ # Auth middleware (future)
│ ├── config/ # DB connection
│ ├── server.js # Entry point
│ ├── .env # Environment variables
│ └── package.json
│
└── README.md

Frontend
React (Vite)
Tailwind CSS
Axios
React Router

Backend
Node.js
Express.js
MongoDB (Atlas)
Mongoose
JWT Authentication
bcryptjs

Phase 1
User Registration
User Login (JWT Authentication)
MongoDB Integration
Basic UI with Routing
Frontend Backend API connection

Authentication Flow

1. User registers
2. Password is hashed using bcrypt
3. User logs in
4. Backend returns JWT token
5. Token stored in localStorage
6. Token used for protected routes (next phase)

Ports
Frontend → http://localhost:5173
Backend → http://localhost:8000

API Endpoints

Auth
POST /api/auth/register
POST /api/auth/login

Backend setup
cd server
npm install

    MONGO_URI=mongodb+srv://nikhilwalia888_db_user:jBDuFBZPWCCXJtyW@cluster0.ajroraq.mongodb.net/
    JWT_SECRET=supersecretkey123

    npm run dev

Frontend setup

    cd client
    npm install
    npm run dev

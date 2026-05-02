# 🗂️ Team Task Manager (Full Stack)

A simple full-stack web application to manage projects and tasks with role-based access control.

---

## 🚀 Features

* User Authentication (Signup / Login)
* Role-based access (Admin / User)
* Project creation and team management
* Task assignment and status tracking
* Dashboard to view tasks
* Overdue task highlighting

---

## 🧰 Tech Stack

**Frontend:**

* HTML
* CSS
* JavaScript (Fetch API)

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (MongoDB Atlas)

**Other:**

* JWT Authentication
* Bcrypt for password hashing

---

## 📁 Folder Structure

```
project-root/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd <repo-name>
```

---

### 2. Install dependencies

```
cd backend
npm install
```

---

### 3. Create `.env` file in backend

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run the server

```
npm start
```

---

### 5. Open the app

```
http://localhost:8000/login.html
```

---

## 🔐 Role-Based Access

* **Admin**

  * Create projects
  * Assign tasks
  * View all tasks

* **User**

  * View assigned tasks
  * Update task status

---

## 🔌 API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Projects

* `POST /api/projects` (Admin only)
* `GET /api/projects`

### Tasks

* `POST /api/tasks` (Admin only)
* `GET /api/tasks`
* `PUT /api/tasks/:id`

---

## 🌍 Deployment

The application is deployed using **Railway**.

Live URL:
https://railway.com/project/27fbbf99-883e-4dd7-8ef9-01fd344f958e?environmentId=e690be95-fbd4-4f8d-aca8-336d0b7a7a55

---

## 🧠 Notes

* Simple UI focused on functionality
* JWT used for authentication and protected routes
* Overdue tasks are calculated based on deadline

---

## 👨‍💻 Author

Kushagra Bisht

---

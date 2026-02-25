Task Manager Application
A full-stack task management application built with the MERN stack (MongoDB, Express, React, Node.js).

📁 Project Structure
text
root/
├── backend/           # Backend server (Express + MongoDB)
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── controllers/   # Route controllers
│   ├── services/      # Business logic
│   └── server.js      # Entry point
│
└── React-App/         # Frontend React application
    ├── src/
    │   ├── components/
    │   │   ├── getAllTasks.js    # Display all tasks
    │   │   ├── createTasks.js    # Create new task
    │   │   └── updateTask.js     # Update existing task
    │   ├── App.js
    │   └── main.jsx
    └── package.json
🚀 Features
✅ View all tasks in a table format

✅ Create new tasks with title, description, priority, and completion status

✅ Update existing tasks

✅ Delete tasks with confirmation

✅ Priority levels (Low, Medium, High)

✅ Responsive design

🛠️ Tech Stack
Backend
Node.js

Express.js

MongoDB with Mongoose

RESTful API

Frontend
React.js

React Router DOM for navigation

Fetch API for HTTP requests

⚙️ Installation & Setup
Prerequisites
Node.js (v14 or higher)

MongoDB (local or Atlas)

npm or yarn

Backend Setup
Navigate to backend directory:

bash
cd backend
Install dependencies:

bash
npm install
Create a .env file in the backend directory:

env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskmanager
Start the backend server:

bash
npm start
Server will run on http://localhost:3000

Frontend Setup
Navigate to React-App directory:

bash
cd React-App
Install dependencies:

bash
npm install
Start the React development server:

bash
npm run dev
Frontend will run on http://localhost:5173

📡 API Endpoints
Method	Endpoint	Description
GET	/getAllTasks	Get all tasks
POST	/createTask	Create a new task
PUT	/updateTask/:id	Update a task
DELETE	/deleteTask/:id	Delete a task
🗄️ Database Schema
javascript
{
  title: String (required),
  description: String,
  priority: String (enum: ['Low', 'Medium', 'High']),
  completed: Boolean,
  createdAt: Date (default: Date.now)
}
🎯 Usage
View Tasks: Homepage displays all tasks in a table

Create Task: Click "Create Task" and fill the form

Update Task: Click "Update" button on any task row

Delete Task: Click "Delete" button and confirm

🔧 Available Scripts
Backend
npm start - Start production server

npm run dev - Start development server with nodemon

Frontend
npm run dev - Start development server

npm run build - Build for production

# AI & Robotics Summer Workshop

A responsive full-stack workshop landing page built using React.js, Express.js, and MongoDB for the Kidrove AI & Robotics Summer Workshop assignment.

## Live Demo

Frontend: https://your-frontend-url.vercel.app

Backend: https://your-backend-url.onrender.com

## Features

### Frontend

* Responsive design for mobile, tablet, and desktop
* Modern hero section
* Workshop details section
* Learning outcomes section
* Interactive FAQ accordion
* Registration form
* Form validation
* Loading states
* Toast notifications

### Backend

* REST API using Express.js
* Registration endpoint (`POST /api/enquiry`)
* Server-side validation
* MongoDB integration using Mongoose
* Error handling

## Workshop Information

* Workshop: AI & Robotics Summer Workshop
* Age Group: 8–14 Years
* Duration: 4 Weeks
* Mode: Online
* Fee: ₹2,999
* Start Date: 15 July 2026

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Icons
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Express Validator
* CORS
* Dotenv

## Project Structure

```text
kidrove-workshop/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/kidrove-workshop.git
cd kidrove-workshop
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## API Endpoint

### Submit Registration

```http
POST /api/enquiry
```

Request Body:

```json
{
  "name": "Harsh Pandey",
  "email": "harsh@gmail.com",
  "phone": "9876543210"
}
```

Success Response:

```json
{
  "success": true,
  "message": "Registration submitted successfully"
}
```

## Future Improvements

* Email confirmation after registration
* Admin dashboard for enquiries
* Workshop seat availability tracking
* Authentication and authorization
* Automated testing
* Animations and enhanced UI interactions

## Approach

The project was developed using a component-based architecture in React to ensure reusability and maintainability. The frontend focuses on providing a clean and responsive user experience, while the backend handles form submissions, validation, and MongoDB data persistence. Separate folders were used for controllers, routes, models, and configuration to maintain a scalable code structure.

## Author

Harsh Pandey

GitHub: https://github.com/yourusername

# Blog Application

A full-stack blog application built with Node.js, Express, SQLite, and React. This application allows users to create, read, update, and delete blog posts.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Optional Features](#optional-features)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a simple blog platform where users can create posts, view a list of all posts, read individual posts, edit existing posts, and delete posts. The backend is powered by Node.js and Express, with data stored in an SQLite database. The frontend is built using React.

## Technologies Used

- **Backend**: Node.js, Express, SQLite, Cors, Body-parser
- **Frontend**: React, CSS
- **Deployment**: Heroku (for Backend), Netlify/Vercel (for Frontend)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm (v6+ recommended)
- Git

### Clone the Repository

```bash
git clone https://github.com/avinash-18-art/Blog-Application-ZuAI.git
cd blog-application
Backend Setup
1. Install Dependencies
Navigate to the backend directory and install the required dependenciesn    

cd backend
npm install
2. Run the Server
Start the Express server:


node server.js
The backend server should now be running on http://localhost:3001.

Frontend Setup
1. Install Dependencies
Navigate to the frontend directory and install the required dependencies:


cd frontend
npm install
2. Run the React Application
Start the React development server:


npm start
The frontend should now be running on http://localhost:3000.

Running the Application
Backend: Runs on http://localhost:3001
Frontend: Runs on http://localhost:3000

API Endpoints
GET /posts: Fetch all posts
GET /posts/:id: Fetch a specific post by ID
POST /posts: Create a new post
PUT /posts/:id: Update a post by ID
DELETE /posts/:id: Delete a post by ID
Connecting Frontend to Backend
The React frontend makes HTTP requests to the Express backend using fetch or axios. Make sure both servers are running and the frontend is configured to point to the correct backend API URL.


### **Instructions:**

1. Replace `"your-username"` with your GitHub username in the clone command.
2. If you implement any of the optional features or use different technologies, update the relevant sections.
3. If you plan to persist the SQLite database or use a different database, modify the database setup instructions accordingly.






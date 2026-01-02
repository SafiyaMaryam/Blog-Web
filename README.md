# 📝 Blog Web Application

A full-stack blog web application built with **Node.js**, **Express.js**, and **EJS** templating engine.
This project demonstrates CRUD operations (Create, Read, Update, Delete) without using a database—posts are stored in server memory during the session


## ✨ Features

- 📝 **Create Posts** - Add new blog posts with title, author, and content [conversation_history:1]
- 👁️ **View Posts** - Browse all posts on the home page showing titles and authors [conversation_history:1]
- 📖 **Read Full Post** - Click on any post title to view complete content [conversation_history:1]
- ✏️ **Edit Posts** - Update existing posts with pre-filled forms [conversation_history:1]
- 🗑️ **Delete Posts** - Remove posts with a single click [conversation_history:1]
- 🎨 **Responsive Design** - Beautiful gradient UI that works on all devices [conversation_history:1]
- 🚀 **Fast & Lightweight** - No database overhead, pure server-side rendering

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js [conversation_history:1]
- **View Engine:** EJS (Embedded JavaScript) [conversation_history:1]
- **Styling:** Custom CSS with gradients and animations [conversation_history:1]
- **Middleware:** body-parser for form data handling [conversation_history:1]
- **Data Storage:** In-memory JavaScript array [conversation_history:1]

**PROJECT STRUCTURE**:
blog-app/
├── public/
│ └── styles.css # Global styling and responsive design
├── views/
│ ├── index.ejs # Home page (all posts)
│ ├── new.ejs # Create post form
│ ├── edit.ejs # Edit post form
│ └── post.ejs # Single post view
├── server.js # Express server and routes
├── package.json # Dependencies

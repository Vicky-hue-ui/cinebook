# 🎬 CineBook Genre API

A modern, light-weight, and robust **Node.js & Express.js RESTful API** built following the strict **Model-View-Controller (MVC)** architectural design pattern.

---

## 📌 Features

- **MVC Architecture**: Decoupled routes, controllers, and data layer for maximum scalability.
- **RESTful Endpoints**: Perform full CRUD operations for movie genres.
- **In-Memory Data Store**: Pre-populated with classic movie titles across Action, Comedy, Horror, Romantic, and Drama genres.
- **Input Validation**: Robust request validation to ensure data integrity.
- **Environment Configuration**: Safe environment variable management using `dotenv`.
- **Git Security**: Comprehensive `.gitignore` to prevent sensitive data (`.env`) and heavy dependencies (`node_modules/`) from leaking.

---

## 📁 Project Architecture & Folder Structure

```text
cinebook-genre-api/
├── controllers/
│   └── genreController.js   # Request handlers & business logic
├── data/
│   └── store.js             # In-memory data store holding genres
├── routes/
│   └── genreRoutes.js        # API Endpoint definitions
├── .env                     # Local environment variables (git-ignored)
├── .env.example             # Template for environment variables
├── .gitignore               # Ignored files list
├── package.json             # Project metadata & dependencies
└── server.js                # Express app initialization & server entry point
```

---

## 🛠️ Tech Stack

- **Runtime Environment**: [Node.js](https://nodejs.org/) (v18+)
- **Web Framework**: [Express.js](https://expressjs.com/) (v4.x)
- **Environment Management**: [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

3. **Run the server**:
   - **Production mode**:
     ```bash
     npm start
     ```
   - **Development mode (auto-reload)**:
     ```bash
     npm run dev
     ```

The server will start listening at `http://localhost:3000`.

---

## 📡 API Reference

### Base URL
`http://localhost:3000/api/genres`

### Endpoints Overview

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/genres` | Retrieve all movie genres | `200 OK` |
| `GET` | `/api/genres/:id` | Retrieve a single genre by its ID | `200 OK` / `404 Not Found` |
| `POST` | `/api/genres` | Create a new movie genre | `201 Created` / `400 Bad Request` |

---

## 📄 License

This project is licensed under the **ISC License**.

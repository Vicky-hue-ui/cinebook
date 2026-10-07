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
cinebook/
├── README.md
├── .gitignore
└── cinebook-genre-api/
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

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vicky-hue-ui/cinebook.git
   cd cinebook/cinebook-genre-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   *(By default, the API runs on `PORT=3000`)*

4. **Run the server**:
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

### 🔍 Endpoint Details & Sample Payloads

#### 1. Get All Genres
- **HTTP Method**: `GET`
- **URL**: `http://localhost:3000/api/genres`
- **Response (`200 OK`)**:
  ```json
  [
    {
      "id": 1,
      "name": "Action",
      "classics": ["Die Hard", "Mad Max: Fury Road", "John Wick"]
    },
    {
      "id": 2,
      "name": "Comedy",
      "classics": ["The Hangover", "Superbad", "Step Brothers"]
    },
    {
      "id": 3,
      "name": "Horror",
      "classics": ["The Conjuring", "The Exorcist", "The Shining"]
    }
  ]
  ```

#### 2. Get Genre by ID
- **HTTP Method**: `GET`
- **URL**: `http://localhost:3000/api/genres/1`
- **Response (`200 OK`)**:
  ```json
  {
    "id": 1,
    "name": "Action",
    "classics": ["Die Hard", "Mad Max: Fury Road", "John Wick"]
  }
  ```
- **Error Response (`404 Not Found`)**:
  ```json
  {
    "message": "Genre not found"
  }
  ```

#### 3. Create a New Genre
- **HTTP Method**: `POST`
- **URL**: `http://localhost:3000/api/genres`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Sci-Fi",
    "classics": ["Interstellar", "Blade Runner 2049", "The Matrix"]
  }
  ```
- **Response (`201 Created`)**:
  ```json
  {
    "id": 6,
    "name": "Sci-Fi",
    "classics": ["Interstellar", "Blade Runner 2049", "The Matrix"]
  }
  ```

---

## 🧪 Postman & cURL Testing

### Quick cURL Commands

- **Fetch all genres**:
  ```bash
  curl http://localhost:3000/api/genres
  ```

- **Fetch genre #3 (Horror)**:
  ```bash
  curl http://localhost:3000/api/genres/3
  ```

- **Add a new genre**:
  ```bash
  curl -X POST http://localhost:3000/api/genres \
    -H "Content-Type: application/json" \
    -d '{"name": "Sci-Fi", "classics": ["Interstellar", "The Matrix"]}'
  ```

---

## 📄 License

This project is licensed under the **ISC License**.
<div align="center">

# 🤖 AskAI · Full-Stack Conversational Intelligence
### *Enterprise-Grade AI Assistant Powered by React, Node.js, Express, MongoDB Atlas & Google Gemini API*

[![Live Demo](https://img.shields.io/badge/Live_Demo-ask--ai--two--beta.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://ask-ai-two-beta.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas%20%2F%20Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Google Gemini API](https://img.shields.io/badge/Gemini_API-2.10-8E75C2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Overview
**AskAI** is a modern, responsive full-stack conversational AI web platform engineered with the MERN stack and powered by the **Google Gemini API (@google/genai)**. Designed to replicate modern AI chat interfaces like ChatGPT and Claude, AskAI delivers low-latency generative responses, conversation thread persistence in MongoDB Atlas, global state synchronization via React Context API, and a clean, responsive UI across all device breakpoints.

---

## ✨ Key Architectural Features

- **Generative AI Integration:** Powered by Google's Gemini LLM API via `@google/genai` SDK, offering dynamic, context-aware conversational responses.
- **Persistent Conversation Threads:** Chat history, user prompts, and assistant replies are automatically structured into thread documents in **MongoDB Atlas** and sorted by `updatedAt` timestamps.
- **Global State Management:** Implements React's Context API (`MyContext.jsx`) for seamless multi-thread state sharing between the Sidebar, Chat Window, and Input Controller without prop drilling.
- **Thread Management:** Instant creation of new chat sessions, sidebar history listing, thread selection, and single-click thread deletion with automatic state recalculation.
- **Decoupled Architecture:** Client-side React application deployed on Vercel communicating with an Express 5 RESTful API backend handling CORS, route security, and schema validation.
- **Mobile-Responsive UI:** Modular CSS layouts engineered to automatically adjust across desktop viewports, tablets, and mobile screens.

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────┐
│                   CLIENT (REACT + VITE)               │
│  Sidebar (Threads) ─── Context API ─── ChatWindow (UI) │
│                           │                            │
│                           ▼ (HTTP REST / JSON)         │
├────────────────────────────────────────────────────────┤
│                 NODE.JS / EXPRESS 5 API                │
│   ├── CORS Middleware                                  │
│   ├── Route Dispatcher (/routes/chat.js)               │
│   ├── Gemini Service Gateway (/utils/gemini.js)        │
│   └── Mongoose ORM Layer (/models/Thread.js)           │
│              │                           │             │
│              ▼                           ▼             │
│       MONGODB ATLAS              GOOGLE GEMINI API     │
│    (Threads, Messages,          (LLM Generative Engine)│
│     Timestamps)                                        │
└────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```
AskAI/
├── BACKEND/
│   ├── models/
│   │   └── Thread.js            # Mongoose schema for threads & nested message array
│   ├── routes/
│   │   └── chat.js              # REST endpoints (chat generation, thread CRUD)
│   ├── utils/
│   │   └── gemini.js            # Gemini API client initialization & prompt executor
│   ├── server.js                # Express app initialization, middleware, DB connection
│   └── package.json             # Backend dependencies (Express 5, Mongoose, @google/genai)
└── Frontend/
    ├── src/
    │   ├── Chat.jsx             # Main chat layout container
    │   ├── ChatWindow.jsx       # Active conversation transcript & input composer
    │   ├── Sidebar.jsx          # Historical conversation threads navigation & deletion
    │   ├── MyContext.jsx        # React Context provider for global chat state
    │   ├── App.jsx              # Application root
    │   └── main.jsx             # React DOM entry point
    ├── vite.config.js           # Vite development & build configuration
    └── package.json             # Frontend dependencies (React 18, Lucide, Axios)
```

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description | Payload / Params |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/chat` | Generate assistant response via Gemini and append to thread | `{ "threadId": "...", "message": "..." }` |
| `GET` | `/api/thread` | Retrieve all conversation threads ordered by recent activity | *None* |
| `GET` | `/api/thread/:threadId` | Fetch complete message history for a specific thread | `threadId` (URL Param) |
| `DELETE`| `/api/thread/:threadId` | Permanently delete a conversation thread and its history | `threadId` (URL Param) |
| `POST` | `/api/test` | Diagnostics and connection health testing | `{ "threadId": "...", "title": "..." }` |

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **MongoDB Atlas** account or local MongoDB daemon
- **Google Gemini API Key** (from [Google AI Studio](https://aistudio.google.com/))

---

### 1. Backend Configuration

```bash
cd BACKEND
npm install
```

Create a `.env` file in the `BACKEND` directory:
```env
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/askai?retryWrites=true&w=majority
GEMINI_API_KEY=your_google_gemini_api_key_here
```

Start the backend service:
```bash
# Using nodemon for hot-reloading
npm run dev

# Or standard Node execution
npm start
```
*Backend will listen on `http://localhost:8080`.*

---

### 2. Frontend Configuration

In a separate terminal window:
```bash
cd Frontend
npm install
npm run dev
```
Open **`http://localhost:5173`** in your browser.

---

## 🌐 Live Deployment
The client application is deployed on **Vercel**:  
👉 **[https://ask-ai-two-beta.vercel.app](https://ask-ai-two-beta.vercel.app)**

---

## 👨‍💻 Author
**Vinayak More**  
Software Engineer & Full-Stack Developer  
- **GitHub:** [@Vinayak7986](https://github.com/Vinayak7986)  
- **LinkedIn:** [vinayak-more-b37309264](https://www.linkedin.com/in/vinayak-more-b37309264/)  
- **Portfolio:** [vinayakmore.netlify.app](https://vinayakmore.netlify.app/)  

---

## 🛡️ License
This project is licensed under the ISC License.
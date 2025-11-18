# Yao Tiem Lee — Portfolio

Full‑stack portfolio with:
- Backend: Express, MongoDB/Mongoose
- Frontend: React (Vite), Bootstrap, Bootstrap Icons
- REST API consumed by the React app

## Features

- Public API for Projects/Skills consumed by the React frontend
- Modern UI with Bootstrap:
  - Sticky navbar, hero section, responsive cards grid
  - Skeleton loading states, spinners, badges
- Deployed-friendly CORS and environment-based API URL

## Getting started

### Prerequisites
- Node.js 
- MongoDB connection string

### 1) Backend setup

Create a root .env:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=3000
```

Install and run:
```sh
npm install
npm run dev
```

Server runs at http://localhost:3000

Key backend files:
- Server entry: [index.js](index.js)
- API routes: [routes/api.js](routes/api.js)
- Models: [models/project.js](models/project.js), [models/skill.js](models/skill.js)

### 2) Frontend setup

Create portfolio-frontend/.env:
```env
VITE_API_URL=http://localhost:3000
```

Install and run:
```sh
cd portfolio-frontend
npm install
npm run dev
```

Frontend runs at http://localhost:5173

Bootstrap and Icons are imported in [portfolio-frontend/src/main.jsx](portfolio-frontend/src/main.jsx).

## API reference

Base URL: `${VITE_API_URL}/api` (configured in [portfolio-frontend/src/services/api.js](portfolio-frontend/src/services/api.js))

- GET /projects → Array<Project>
- GET /skills → Array<Skill>

Implemented in [routes/api.js](routes/api.js).

Project model ([models/project.js](models/project.js)):
```js
{
  title: String,
  description: String,
  url: String,
  screenshot: String,
  tech: [String]
}
```

Skill model ([models/skill.js](models/skill.js)):
```js
{
  name: String,
  level: String
}
```





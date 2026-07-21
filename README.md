# Photography Courses – Client

A single-page **React** application (SPA) for a digital photography courses sales website. Users can browse categories and courses, register and log in, add courses to a shopping cart, complete orders and payments, and view their purchased courses. An admin area is also available for content management.

## Backend Connection

This project is client-side only and interacts with a separate **Node.js / Express** server via a REST API (the server address is defined in the `VITE_API_URL` environment variable).

- Link to the Backend Repository: `<add link here>`

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| React | 19.x | UI Library |
| Vite | 8.x | Build Tool and Development Environment |
| Redux Toolkit | 2.x | Global State Management |
| React Redux | 9.x | React Bindings for Redux |
| React Router DOM | 7.x | Routing |
| Axios | 1.x | HTTP Requests |
| Swiper | 14.x | Carousels / Sliders |
| CSS Modules | – | Component-scoped Styling |
| ESLint | 10.x | Code Quality and Linting |

## Environment Variables

Create a `.env` file in the `client/` directory with the following variable:

```
VITE_API_URL=<server base URL, e.g. http://localhost:1234>
```

This variable is consumed in [src/API/axiosConfig.js](src/API/axiosConfig.js) as the `baseURL` for all API calls.

## Installation and Local Setup

```bash
git clone <repository-url>
cd client
npm install
npm run dev
```

The application will run at the address displayed by Vite in the terminal (usually `http://localhost:5173`).

## Building for Production

```bash
npm run build
```

This command generates an optimized, minified production build in the `dist/` directory, ready for deployment on a static server.

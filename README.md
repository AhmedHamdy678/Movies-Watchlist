<div align="center">

# 🎬 Movies Watchlist

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, feature-rich movie watchlist application built with React. Search for movies, add them to your watchlist, and track what you've watched.

[Live Demo](#-live-demo) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

![Movies Watchlist Preview](https://via.placeholder.com/800x400?text=Movies+Watchlist+Preview)

</div>

---

## 🌐 Live Demo

> 🔗 **[View Live Demo](https://your-demo-link.vercel.app)**

---

## 📖 Overview

**Movies Watchlist** is a sleek and intuitive web application that allows users to search for movies using the OMDB API, manage their personal watchlist, and keep track of movies they've already watched. The app features persistent data storage using localStorage, ensuring your movie lists are saved across browser sessions.

---

## ✨ Features

| Feature                     | Description                                                 |
| --------------------------- | ----------------------------------------------------------- |
| 🔍 **Movie Search**         | Real-time search with debounced API calls to OMDB database  |
| 📋 **Watchlist Management** | Add movies to your personal watchlist for later viewing     |
| ✅ **Watched Tracker**      | Mark movies as watched and maintain a separate watched list |
| 🔄 **Move Between Lists**   | Easily move movies between watchlist and watched lists      |
| 💾 **Persistent Storage**   | Data saved to localStorage - survives browser refresh       |
| 📱 **Responsive Design**    | Fully responsive layout works on all device sizes           |
| ⚡ **Fast & Modern**        | Built with Vite for lightning-fast development and builds   |

---

## 🛠 Tech Stack

### Frontend

- **React 19** - UI Library with Hooks
- **React Router DOM 7** - Client-side routing
- **React Bootstrap** - UI Components
- **Bootstrap 5** - CSS Framework

### Build Tools & Development

- **Vite 7** - Next-generation frontend tooling
- **ESLint** - Code linting and formatting

### API & Data

- **Axios** - HTTP client for API requests
- **OMDB API** - Movie database API
- **localStorage** - Client-side data persistence

### State Management

- **useReducer** - React's built-in state management
- **Context API** - Global state distribution

---

## 📁 Project Structure

```
moves-website/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images and media files
│   ├── components/
│   │   ├── Reducer/
│   │   │   ├── ActionsType.jsx    # Action type constants
│   │   │   └── Reducer.jsx        # State reducer logic
│   │   ├── AddComponent.jsx       # Movie search component
│   │   ├── MovieCard.jsx          # Movie card display
│   │   ├── MovieCardWatchList.jsx # Watchlist movie card
│   │   ├── MovieControlls.jsx     # Card control buttons
│   │   ├── MoviesContext.jsx      # Global context provider
│   │   ├── NavBar.jsx             # Navigation component
│   │   ├── Watched.jsx            # Watched movies page
│   │   ├── WatchList.jsx          # Watchlist page
│   │   └── WatchList.css          # Watchlist styles
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Global styles
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Base styles
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
└── README.md                      # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/movies-watchlist.git
   cd movies-watchlist
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code quality              |

---

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/movies-watchlist)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder is ready to be deployed
```

---

## 🔑 API Configuration

This project uses the [OMDB API](http://www.omdbapi.com/) for fetching movie data.

To use your own API key:

1. Get a free API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Replace the API key in `src/components/AddComponent.jsx`

```javascript
axios.get(`https://www.omdbapi.com/?s=${nameOfFilm}&apikey=YOUR_API_KEY`);
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Your Name** - [@your_twitter](https://twitter.com/your_twitter)

Project Link: [https://github.com/your-username/movies-watchlist](https://github.com/your-username/movies-watchlist)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ and React

</div>

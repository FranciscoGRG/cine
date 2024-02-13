import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieGrid from './components/MovieGrid.jsx'
import MovieDetails from "./pages/MovieDetails.jsx"
import Navbar from './components/Navbar.jsx'
import MovieSearch from './pages/MovieSearch.jsx'
import Buy from './pages/Buy.jsx'
import Films from './pages/Films.jsx'
import Footer from './components/Footer.jsx'
import { Provider } from 'react-redux'
import store from './store.js';
import Favorites from './pages/Favorites.jsx'
import Tickets from './pages/Tickets.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MovieGrid />} />
          <Route path="/movieDetail/:id" element={<MovieDetails />} />
          <Route path="/movieSearch/:searchQuery" element={<MovieSearch />} />
          <Route path="/buyTicket/:title" element={<Buy />} />
          <Route path="/films" element={<Films />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)


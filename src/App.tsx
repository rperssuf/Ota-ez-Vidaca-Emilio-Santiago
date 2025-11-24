import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Historia from "./pages/Historia";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

export default function App(): JSX.Element {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px', background: '#333', padding: '10px' }}>
        <Link to="/" style={{ color: 'white' }}>Inicio</Link>
        <Link to="/historia" style={{ color: 'white' }}>Historia</Link>
        <Link to="/galeria" style={{ color: 'white' }}>Galería</Link>
        <Link to="/contacto" style={{ color: 'white' }}>Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

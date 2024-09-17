import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ImageViewer from './Componenetes/ImageViewer';
import Detalle from './Componenetes/Detalle';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ImageViewer />} />
        <Route path="/about" element={<Detalle />} />
      </Routes>
    </Router>
  );
}

export default App;

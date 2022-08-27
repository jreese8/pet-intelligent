import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Navigation from '../src/components/Nav/Navigation';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <main className="main">
          <Navigation />
            <Routes>
              <Route exact path="/" element={<Home/>} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;

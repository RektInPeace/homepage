import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <div>
          <Routes>
            <Route path="/" element={
              <Home></Home>
            } />
            <Route path="/test" element={
              <h1>Hello World!</h1>
            } />
          </Routes>
      </div>
    </div>
  </HashRouter>
  )
}

export default App;


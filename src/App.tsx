import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { Landing } from './Landing';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <Landing/>
        } />
        <Route path="/leaderboard" element={
          <h1>LeaderBoard</h1>
        } />
      </Routes>
  </HashRouter>
  )
}

export default App;


import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { Landing } from './Landing';
import Home from './pages/Home'

function App() {
  return (
    <Landing/>
  //   <HashRouter>
  //     <Routes>
  //       <Route path="/" element={
  //         <Home></Home>
  //       } />
  //       <Route path="/leaderboard" element={
  //         <h1>LeaderBoard</h1>
  //       } />
  //     </Routes>
  // </HashRouter>
  )
}

export default App;


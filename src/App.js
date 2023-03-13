import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home.js'
import Start from './page/Start.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Start />
        <Routes>
            <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home.js';
import Start from './page/Start.js';

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/Home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

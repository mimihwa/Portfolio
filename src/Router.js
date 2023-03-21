import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './page/About.js';
import Project from './page/Project.js';
import Start from './page/Start.js';
import Comment from './page/Comment.js';

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/About" element={<About />}/>
            <Route path="/Project" element={<Project />}/>
            <Route path="/Comment" element={<Comment />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

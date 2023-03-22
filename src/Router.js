import React from "react";
import { HashRouter, Routes, Route} from 'react-router-dom';
import About from './page/About.js';
import Project from './page/Project.js';
import Start from './page/Start.js';
import Comment from './page/Comment.js';

function Router() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/About" element={<About />}/>
            <Route path="/Project" element={<Project />}/>
            <Route path="/Comment" element={<Comment />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Router;

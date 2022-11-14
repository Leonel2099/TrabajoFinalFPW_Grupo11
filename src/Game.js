import React from "react";
import Home from "./pages/Home";
import Ahorcadito from "./components/componentsAhorcadito/Ahorcadito";
import AboutPages from "./pages/AboutPages";
import Games from "./pages/Games";
import Arkanoid from './components/componentsArkanoid/Arkanoid'
import ErrorPages from "./pages/ErrorPages";
import './components/Styles/Game.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Ppt from "./components/componentsPPT/Ppt";
import Frogger from "./components/componentsPhaser/Frogger.js";
import Memo from "./components/componentMemo/Memo";
export default function Game() {
    return(
        <div className='background'>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/Games' element={<Games />} />
            <Route path='/AboutPage' element={<AboutPages />} />
            <Route path='/Ppt' element={<Ppt />} />
            <Route path='/Ahorcadito' element={<Ahorcadito />} />
            <Route path='/Arkanoid' element={<Arkanoid />} />
            <Route path='/Frogger' element={<Frogger />} />
            <Route path='/Memo' element={<Memo />} />
            <Route path='*' element={<ErrorPages/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
};



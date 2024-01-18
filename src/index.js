import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GalaxyStatsPage from './routes/GalaxyStatsPage';
import GalaxyMapPage from './routes/GalaxyMapPage';
import EarthlikePage from './routes/EarthlikePage';
import StarSystemsPage from './routes/StarSystemsPage';
import ObjectsPage from './routes/ObjectsPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/galaxystats' element={<GalaxyStatsPage />} />
      <Route path='/galaxymap' element={<GalaxyMapPage />} />
      <Route path='/earthlike' element={<EarthlikePage />} />
      <Route path='/starsystems' element={<StarSystemsPage />} />
      <Route path='/objects' element={<ObjectsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);




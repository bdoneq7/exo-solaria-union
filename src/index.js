import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AreAliensRealPage from './routes/AreAliensRealPage';
import GalaxyStatsPage from './routes/GalaxyStatsPage';
import GalaxyMapPage from './routes/GalaxyMapPage';
import EarthlikePage from './routes/EarthlikePage';
import StarSystemsPage from './routes/StarSystemsPage';
import StarSystems51to200Page from './routes/StarSystems51to200Page';
import StarSystems201to400Page from './routes/StarSystems201to400Page';
import StarSystems401to600Page from './routes/StarSystems401to600Page';
import StarSystems601to800Page from './routes/StarSystems601to800Page';
import StarSystems801to1000Page from './routes/StarSystems801to1000Page';
import PlanetEarthViewPage from './routes/PlanetEarthViewPage';
import ObjectsPage from './routes/ObjectsPage';
import StarsPage from './routes/StarsPage';
import PlanetsPage from './routes/PlanetsPage';
import AliensPage from './routes/AliensPage';
import SpaceTechPage from './routes/SpaceTechPage';
import TermsPage from './routes/TermsPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/arealiensreal' element={<AreAliensRealPage />} />
      <Route path='/galaxystats' element={<GalaxyStatsPage />} />
      <Route path='/galaxymap' element={<GalaxyMapPage />} />
      <Route path='/earthlike' element={<EarthlikePage />} />
      <Route path='/starsystems' element={<StarSystemsPage />} />
      <Route path='/starsystems51to200' element={<StarSystems51to200Page />} />
      <Route path='/starsystems201to400' element={<StarSystems201to400Page />} />
      <Route path='/starsystems401to600' element={<StarSystems401to600Page />} />
      <Route path='/starsystems601to800' element={<StarSystems601to800Page />} />
      <Route path='/starsystems801to1000' element={<StarSystems801to1000Page />} />
      <Route path='/planetearthview' element={<PlanetEarthViewPage />} />
      <Route path='/objects' element={<ObjectsPage />} />
      <Route path='/stars' element={<StarsPage />} />
      <Route path='/planets' element={<PlanetsPage />} />
      <Route path='/aliens' element={<AliensPage />} />
      <Route path='/spacetech' element={<SpaceTechPage />} />
      <Route path='/terms' element={<TermsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);




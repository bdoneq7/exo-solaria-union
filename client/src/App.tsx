import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import OurPurpose from './pages/OurPurpose';
import OurVision from './pages/OurVision';
import OurMission from './pages/OurMission';
import FreePreview from './pages/FreePreview';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { ProtectedRoute } from "./routes/ProtectedRoute";
import MembershipPlan from "./pages/MembershipPlan";
import BrowseStarSystems from "./pages/BrowseStarSystems0to10";
import AlienSpecies from "./pages/AlienSpecies";
import EarthlikePlanets from "./pages/EarthlikePlanets";
import SpaceMissions from "./pages/SpaceMissions";
import UfoEncounters from "./pages/UfoEncounters";
import StarPlanetClassify from "./pages/StarPlanetClassify";
import SearchStarSystem from "./pages/SearchStarSystem";
import Community from "./pages/Community";
import DataSources from "./pages/DataSources";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>

        <Route path="/ourpurpose" element={<OurPurpose />}/>
        <Route path="/ourvision" element={<OurVision />}/>
        <Route path="/ourmission" element={<OurMission />}/>
        <Route path="/freepreview" element={<FreePreview />}/>
        <Route path="/termsofuse" element={<TermsOfUse />}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}/>

        <Route path="/membership-plan" element={<ProtectedRoute />}>
        <Route path="/membership-plan" element={<MembershipPlan />}/>
        </Route>

        <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        </Route>

        <Route path="/browsestarsystems0to10" element={<ProtectedRoute />}>
        <Route path="/browsestarsystems0to10" element={<BrowseStarSystems />}/>
        </Route>

        <Route path="/alienspecies" element={<ProtectedRoute />}>
        <Route path="/alienspecies" element={<AlienSpecies />}/>
        </Route>

        <Route path="/earthlikeplanets" element={<ProtectedRoute />}>
        <Route path="/earthlikeplanets" element={<EarthlikePlanets />}/>
        </Route>

        <Route path="/spacemissions" element={<ProtectedRoute />}>
        <Route path="/spacemissions" element={<SpaceMissions />}/>
        </Route>

        <Route path="/ufoencounters" element={<ProtectedRoute />}>
        <Route path="/ufoencounters" element={<UfoEncounters />}/>
        </Route>

        <Route path="/starplanetclassify" element={<ProtectedRoute />}>
        <Route path="/starplanetclassify" element={<StarPlanetClassify />}/>
        </Route>

        <Route path="/searchstarsystem" element={<ProtectedRoute />}>
        <Route path="/searchstarsystem" element={<SearchStarSystem />}/>
        </Route>

        <Route path="/community" element={<ProtectedRoute />}>
        <Route path="/community" element={<Community />}/>
        </Route>

        <Route path="/datasources" element={<ProtectedRoute />}>
        <Route path="/datasources" element={<DataSources />}/>
        </Route>

        

      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;

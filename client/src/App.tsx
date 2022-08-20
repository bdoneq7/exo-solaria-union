import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/Loading/Loading';
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
import BrowseStarSystemsTwo from "./pages/BrowseStarSystems11to20";
import AlienSpecies from "./pages/AlienSpecies";
import EarthlikePlanets from "./pages/EarthlikePlanets";
import SpaceMissions from "./pages/SpaceMissions";
import UfoEncounters from "./pages/UfoEncounters";
import StarPlanetClassify from "./pages/StarPlanetClassify";
import SearchStarSystem from "./pages/SearchStarSystem";
import Community from "./pages/Community";
import DataSources from "./pages/DataSources";
import Careers from "./pages/Careers";
import Companies from "./pages/Companies";
import GalaxyMap from "./pages/GalaxyMap";
import Technology from "./pages/Technology";
import Account from "./pages/Account";
import Billing from "./pages/Billing";
import Notifications from "./pages/Notifications";
import Password from "./pages/Password";
import Support from "./pages/Support";
import RoswellNewMexico from "./pages/RoswellNewMexico";


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (

    <>
    {loading === false ? (
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

        <Route path="/browsestarsystems11to20" element={<ProtectedRoute />}>
        <Route path="/browsestarsystems11to20" element={<BrowseStarSystemsTwo />}/>
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

        <Route path="/careers" element={<ProtectedRoute />}>
        <Route path="/careers" element={<Careers />}/>
        </Route>

        <Route path="/companies" element={<ProtectedRoute />}>
        <Route path="/companies" element={<Companies />}/>
        </Route>

        <Route path="/galaxymap" element={<ProtectedRoute />}>
        <Route path="/galaxymap" element={<GalaxyMap />}/>
        </Route>

        <Route path="/technology" element={<ProtectedRoute />}>
        <Route path="/technology" element={<Technology />}/>
        </Route>

        <Route path="/account" element={<ProtectedRoute />}>
        <Route path="/account" element={<Account />}/>
        </Route>

        <Route path="/billing" element={<ProtectedRoute />}>
        <Route path="/billing" element={<Billing />}/>
        </Route>

        <Route path="/notifications" element={<ProtectedRoute />}>
        <Route path="/notifications" element={<Notifications />}/>
        </Route>

        <Route path="/password" element={<ProtectedRoute />}>
        <Route path="/password" element={<Password />}/>
        </Route>

        <Route path="/support" element={<ProtectedRoute />}>
        <Route path="/support" element={<Support />}/>
        </Route>

        <Route path="/roswellnewmexico" element={<ProtectedRoute />}>
        <Route path="/roswellnewmexico" element={<RoswellNewMexico />}/>
        </Route>

        

      </Routes>
      <Footer />
    </BrowserRouter>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App;

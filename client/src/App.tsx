import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Nav/Nav';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import OurPurpose from './pages/OurPurpose';
import OurVision from './pages/OurVision';
import OurMission from './pages/OurMission';
import FreePreview from './pages/FreePreview';
import { ProtectedRoute } from "./routes/ProtectedRoute";
import MembershipPlan from "./pages/MembershipPlan";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
        <Route path="/ourpurpose" element={<OurPurpose />}/>
        <Route path="/ourvision" element={<OurVision />}/>
        <Route path="/ourmission" element={<OurMission />}/>
        <Route path="/freepreview" element={<FreePreview />}/>
        <Route path="/membership-plan" element={<ProtectedRoute />}>
        <Route path="/membership-plan" element={<MembershipPlan />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

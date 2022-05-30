import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Nav/Nav';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

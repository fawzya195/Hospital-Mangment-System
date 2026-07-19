import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<div>Doctors Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/appointments" element={<div>Appointments Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/doctor-admin" element={<div>Doctor Admin Page</div>} />
      </Routes>
    </div>
  );
}

export default App;

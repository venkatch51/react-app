// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Employees from "./components/Employees";
import Navbar from "./components/Navbar";
import Employees from "./components/Employees";
import ContactUs from "./components/Contactus";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="contactus" element={<ContactUs />} />
        </Routes>
    </div>
  );
}

export default App;

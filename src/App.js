import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

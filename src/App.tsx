import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ResumePage from "./pages/ResumePage";

function App() {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <ResumePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

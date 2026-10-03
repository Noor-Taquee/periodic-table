import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div id="app">
      <div className="panel-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </div>
  );
}

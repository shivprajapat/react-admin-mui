import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Sidebar, Topbar } from "./scenes";
const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
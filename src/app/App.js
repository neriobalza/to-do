import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../routes/Home";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

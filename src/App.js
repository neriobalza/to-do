import React from "react";
import "./styles/index.scss";

import Layout from "./components/layout/Layout";
import ToDo from "./page/ToDo";

function App() {
  return (
    <Layout>
      <ToDo />
    </Layout>
  );
}

export default App;

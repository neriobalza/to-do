import React from "react";
import "./styles/index.scss";
import Layout from "./components/layout/Layout";
import TodoApp from "./page/TodoApp";

const App = () => {
  return (
    <Layout>
      <TodoApp />
    </Layout>
  );
};

export default App;

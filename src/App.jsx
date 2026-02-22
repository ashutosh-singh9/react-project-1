import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div>
        <h1>Cards collection</h1>
      </div>
      <div className="parent">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default App;

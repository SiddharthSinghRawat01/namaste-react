import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
  <h1 id="heading" className="head">
    Namste React using JSX
  </h1>
);

// React Component

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()} //* its a js function so we can callit like ths too /*
    <h1 className="heading"> Namste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

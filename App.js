import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", { id: "heading" }, "Namste React!");

// JSX - it is a HTML-like or XML-like syntax
// JSX (transpiled before it reaches to JS engine) - PARCEL - BABLE( balbles job is to trnsple the code)

const jxsHeading = <h1 id="heading" className="head">Namste React using JSX</h1>;

console.log({ heading, jxsHeading });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jxsHeading);

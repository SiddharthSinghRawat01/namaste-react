/*

<div id = "parent">
    <div id = "child">
        <h1>I'm  h1 tag.</h1>
        <h2>I'm  h2 tag.</h2>
    </div>  
    <div id = "child">
        <h1>I'm  h1 tag.</h1>
        <h2>I'm  h2 tag.</h2>
    </div> 
</div>

*/

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent", key: 'parent' }, [
  React.createElement("div", { id: "child", key: 'child' }, [
    React.createElement("h1", {key: 'h1'}, "I'm h1 tag."),
    React.createElement("h2", {key: 'h2'}, "I'm h2 tag."),
  ]),
  React.createElement("div", { id: "child2", key: 'child2' }, [
    React.createElement("h1", {key: 'h1'}, "I'm h1 tag."),
    React.createElement("h2", {key: 'h2'}, "I'm h2 tag."),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World form React!"
);
console.log({ parent }); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

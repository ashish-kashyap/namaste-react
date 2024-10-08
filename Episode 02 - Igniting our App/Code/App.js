import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement( "div", { id: "child" }, [
        React.createElement("h1", {}, "This is Namaste Ract🚀"), 
        React.createElement("h2", {}, "by Akshay Saini")
    ]),
    React.createElement("div", { id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
]);




/*const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc"},
    "Hello World from React!"
);  */

console.log(parent);   // this will return an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);   // this render method is responsible for put that object and convert that into heading tag & put that into DOM
import React from "react";
import { NavLink } from "react-router-dom";

export default function PokemonBlock({ name }) {
  //using props, destructuring props.name from props
  //Props are an ordinary object of React that follow the immutable properties. This simply means that you cannot change their value throughout the component. Props and states are in the form of an object, which contains the number of key-value pairs that could be used to render the value of the objects.
  return (
    <div
      style={{
        width: "4rem",
        height: "1rem",
        margin: "0.1rem",
        padding: "1rem",
        border: "2px solid black",
      }}
    >
      <NavLink style={{ textDecoration: "none" }} to={`/details/${name}`}>
        {name}
      </NavLink>
    </div>
  );
}

import React from "react";
import SingleColor from "../SingleColor/SingleColor";
import { nanoid } from "nanoid";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  return (
    <section className="colorList-section">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;

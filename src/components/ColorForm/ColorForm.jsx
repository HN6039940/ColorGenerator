import React from "react";
import { useState } from "react";
import "./ColorForm.css";
const ColorForm = ({ addColor }) => {
  const [color, setColor] = useState("#333333");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="color-form-section">
      <h3 className="color-form-heading">Color Generator</h3>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          className="color-pick"
        />
        <div className="color-input-wrap">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#fff43f"
            pattern="^[#0-9A-Za-z]+$"
            className="color-input"
            name="color-input"
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: color }}
          className="color-submit-btn"
        >
          <span
            className="color-submit-btn-text"
            style={{
              color: color,
            }}
          >
            Submit
          </span>
        </button>
      </form>
    </section>
  );
};

export default ColorForm;

import React from "react";
import { toast } from "react-toastify";
import "./SingleColor.css";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const copyToClipboard = async () => {
    if (navigator.clipboard)
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.info("Color Copied To Clipboard!");
      } catch (error) {
        toast.warning("Color can't be copied to clipboard!");
      }
    else {
      toast.error("Your Browser Doesn't Support Clipboard!");
    }
  };

  return (
    <article
      className="colorList-article"
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className={`color-weight ${index > 10 ? "tint" : ""}`}>{weight}%</p>
      <p className={`color-code-hex ${index > 10 ? "tint" : ""}`}>#{hex}</p>
    </article>
  );
};

export default SingleColor;

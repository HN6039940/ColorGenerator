import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";
import ColorForm from "./components/ColorForm/ColorForm";
import ColorList from "./components/ColorList/ColorList";

const App = () => {
  const InitializeColor = new Values("#333333").all(10);
  const [singleColor, setSingleColor] = useState("#333333");
  const [colors, setColors] = useState(InitializeColor);

  const addColor = (color) => {
    try {
      const isSameHex = colors.find(
        (currentColor) => `#${currentColor.hex}` === color
      );
      if (`#${isSameHex?.hex}` === singleColor) {
        toast.error("Color Already Exist");
        return colors;
      }
      setColors(new Values(color).all(10));
      toast.success("Color Change Successfully");
      setSingleColor(color);
    } catch (error) {
      toast.error(error.message);
      return colors;
    }
  };

  return (
    <main className="color-generator">
      <ToastContainer />
      <ColorForm addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;

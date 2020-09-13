import React from "react";
// import "./style.less";
import "./style.css";
import img from "./img.png";

interface Props {}

const App = (props: Props) => {
  return (
    <div className="red">
      this is app
      <img src={img} alt="img" style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default App;

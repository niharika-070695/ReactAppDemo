import "./ImageComp.css";
import { useState } from "react";

function ImageComp() {
  let [title, setTitle] = useState("React");
  let [url, setUrl] = useState(
    "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
  );
  const changeToAngular = () => {
    setTitle("Angular");
    setUrl(
      "https://tse1.mm.bing.net/th?id=OIP.cGDDA2mfYkjiIhGaN8gDoAHaEK&pid=Api&P=0&h=180"
    );
  };
  const changeToReact = () => {
    setTitle("React");
    setUrl(
      "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    );
  };
  return (
    <div id="ImageComp">
      <h1 style={{ color: "red" }}>{title}</h1>
      <img src={url} width="500" height="300" />
      <br />
      <button onClick={changeToReact}>React</button>
      <button onClick={changeToAngular}>Angular</button>
    </div>
  );
}

export default ImageComp;

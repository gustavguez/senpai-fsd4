import { useState } from "react";
import "./Tarea.css";

const Tarea = ({ titulo }) => {
  const [descripcion, setDesciption] = useState("");

  const cliclHandler = () => {
    setDesciption("Mi texto");
  };

  return (
    <div className="tarea">
      <h1>{titulo}</h1>
      <p className="tareaDescripcion">{descripcion}</p>
      <button onClick={cliclHandler}>CLICK</button>
    </div>
  );
};
export default Tarea;

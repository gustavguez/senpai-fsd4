import { useState, useEffect } from "react";
import Tarea from "./components/Tarea";
import TareasContainer from "./components/TareasContainer";

const App = () => {
  const [tareas, setTareas] = useState([]);

  //Voy a buscar las tareas
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((tareas) => setTareas(tareas));
  }, []);

  return (
    <>
      <p>Mi otro título</p>
      <TareasContainer tareas={tareas}></TareasContainer>
    </>
  );
};
export default App;

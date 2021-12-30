import { useState } from "react";
import Tarea from "./Tarea";

const TareasContainer = ({ tareas }) => {
  return (
    <>
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} titulo={tarea.title} />
      ))}
    </>
  );
};
export default TareasContainer;

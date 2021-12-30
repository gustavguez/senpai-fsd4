import Tarea from "./Tarea";

function Tareas({ tareas }) {
  return (
    <div className="container container-tasks">
      <h2 className="subtitle">Listado de tareas</h2>
      {tareas.length === 0 ? (
        <p>No hay tareas para mostrar</p>
      ) : (
        <ul className="task-list">
          {tareas.map((tarea) => {
            return <Tarea key={tarea.id} description={tarea.title} />;
          })}
        </ul>
      )}
    </div>
  );
}
export default Tareas;

function Tarea({ description }) {
  return (
    <li className="task">
      <span>{description}</span>
      <a className="delete-task">
        <span className="icon"></span>
      </a>
    </li>
  );
}
export default Tarea;

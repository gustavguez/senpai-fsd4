const MainForm = () => {
  return (
    <div className="container">
      <h1 className="title">¿Qué tarea deseas recordar?</h1>
      <form className="main-form">
        <input
          type="text"
          required="required"
          placeholder="Escribe lo que quieras"
        />
        <button>Agregar</button>
      </form>
    </div>
  );
};
export default MainForm;

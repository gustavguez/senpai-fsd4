import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import MainForm from "./components/MainForm";
import Tareas from "./components/Tareas";
import tareasServicio from "./api/tareas.servicio";

const App = () => {
  const [tareas, setTareas] = useState([]);

  //Fetch useEffect
  useEffect(async () => {
    try {
      //Fetch
      const tareasFromApi = await tareasServicio.fetchTareas();

      //Cambiamos el estado con las tareas del servidor
      setTareas(tareasFromApi);
    } catch (error) {}
  }, []);

  return (
    <Layout>
      <MainForm />
      <Tareas tareas={tareas} />
    </Layout>
  );
};
export default App;

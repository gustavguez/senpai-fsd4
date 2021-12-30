import API_CONFIG from "../configs/api";

async function fetchTareas() {
  //Creamos las tareas iniciales desde un fetch
  const tareas = await fetch(`${API_CONFIG.apiUrl}/users/1/todos`);
  const tareasJSON = await tareas.json();
  return tareasJSON;
}
export default {
  fetchTareas,
};

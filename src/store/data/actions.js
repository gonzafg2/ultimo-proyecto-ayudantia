import axios from "axios";

export async function getColores({ commit }) {
  const url = "https://reqres.in/api/colors";

  try {
    const dataColores = await axios.get(url);
    const data = dataColores.data.data; // Arreglo de objetos
    // name, color

    // Acondicionando datos
    // Extrayendo los datos de la api que me interesan.
    data.forEach(el => {
      // "el" es el objeto dentro del arreglo.
      let Color = {
        nombre: el.name,
        color: el.color
      };
      commit("setColores", Color)
      // Le pasamos a la mutación "setColores" el objeto del color
    });

  } catch (error) {
    console.log("Error en Axios:", error);
  }
}

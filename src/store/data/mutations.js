// La mutación modifica el estado (state)
export function setColores(state, payload) {
  // payload es el objetoooooooooo de cada color!!!!!!!!!!!!!!!
  // Quiero meter ese objeto dentro del arreglo "data" del state.
  state.data.push(payload)
}

import { SET_POKEMONS } from "../actions/type";

export const logger = (store) => (next) => (action) => {
  console.log(action);
  // console.log(action.action.payload)
  next(action)
}

export const featuring = (store) => (next) => (action) => {
  if(action.type === SET_POKEMONS){
    const featured = [{ name: 'fab' }, ...action.payload]
    const updatedActionInfo = { ...action, payload: featured}
    next(updatedActionInfo)
  }
}

export const capitalize = (store) => (next) => (action) => {
  if(action.type === SET_POKEMONS){
    const prefixed = action.payload.map(pokemon => ({
      ...pokemon,
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    }))
    const updateAction = {...action, payload: prefixed}
    next(updateAction)
  }else {
    next(action)
  }
}

// export const featuring = (store) => (next) => (actionInfo) => {
//   const featured = [{ name: 'fab' }, ...actionInfo.action.payload]
//   const updatedActionInfo = { ...actionInfo, action: {...actionInfo.action, payload: featured }}
//   next(updatedActionInfo)
// }

// export const prefix = (store) => (next) => (actionInfo) => {
//   const prefixed = actionInfo.action.payload.map(pokemon => ({
//     ...pokemon,
//     name: 'Poke ' + pokemon.name
//   }))
//   const updateAction = {...actionInfo, action: {...actionInfo.action, payload: prefixed }}
//   next(updateAction)
// }
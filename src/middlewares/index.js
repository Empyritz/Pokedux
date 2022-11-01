export const logger = (store) => (next) => (action) => {
  console.log(action);
  // console.log(action.action.payload)
  next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'fab' }, ...actionInfo.action.payload]
  const updatedActionInfo = { ...actionInfo, action: {...actionInfo.action, payload: featured }}
  next(updatedActionInfo)
}

export const prefix = (store) => (next) => (actionInfo) => {
  const prefixed = actionInfo.action.payload.map(pokemon => ({
    ...pokemon,
    name: 'Poke ' + pokemon.name
  }))
  const updateAction = {...actionInfo, action: {...actionInfo.action, payload: prefixed }}
  next(updateAction)
}
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  updates: []
}

const storeReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.SAVE:
      return {
        ...currentState,
        updates: currentState.updates.concat({id: new Date(), value: action.updates})
      }
    case actionTypes.REMOVE:
      const updatedArray = currentState.updates.filter(update => update.id !== action.updateID )
      return {
        ...currentState,
        updates: updatedArray
      }
    default:
      return currentState
  }

}

export default storeReducer
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  counter: 0,
}

const devTestReducer = (currentState = initialState, action) => {

  switch(action.type){
    case actionTypes.INCREMENT:
      return {
        ...currentState,
        counter: currentState.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...currentState,
        counter: currentState.counter - 1
      }
    case actionTypes.ADD:
      return {
          ...currentState,
          counter: currentState.counter + action.value
        }
    case actionTypes.SUBTRACT:
      return {
          ...currentState,
          counter: currentState.counter - action.value
        }
    case actionTypes.RESET:
      return {
        ...currentState,
        counter: 0
      }
    default:
      return currentState
  }

}

export default devTestReducer
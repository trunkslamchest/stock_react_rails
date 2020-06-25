import * as actionTypes from '../actions/actionTypes'

import cookieFunctions from '../../utility/cookieFunctions'

// cookieFunctions('all')
// cookieFunctions('new', 'test', '5000')
// cookieFunctions('all')
console.log(cookieFunctions('getCookie', 'test'))
console.log(cookieFunctions('getCookieName', 'test'))
console.log(cookieFunctions('getCookieValue', 'test'))

// cookieFunctions('all')
// cookieFunctions('set', 'test', '3000')
// cookieFunctions('all')
// cookieFunctions('reset', 'test')
// cookieFunctions('all')
// cookieFunctions('delete', 'test')
// cookieFunctions('all')


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
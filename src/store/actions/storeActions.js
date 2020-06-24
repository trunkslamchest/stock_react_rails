import * as actionTypes from './actionTypes'

export const save = (updates) => {
  return {
    type: actionTypes.SAVE,
    updates: updates
  }
}

export const update = (updates) => {
  return (dispatch, getState) => {
    // setTimeout(() => {
      // const oldCounter = getState().counter.counter
      // console.log('[getState oldCounter]', oldCounter)
      dispatch(save(updates))
    // }, 2000)
  }
}

export const remove = (updateID) => {
  return {
    type: actionTypes.REMOVE,
    updateID: updateID
  }
}
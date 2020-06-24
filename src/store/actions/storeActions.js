import * as actionTypes from './actionTypes'

export const save = (updates) => {
  return {
    type: actionTypes.SAVE,
    updates: updates
  }
}

export const update = (updates) => {
  return (dispatch, getState) => {
    dispatch(save(updates))
  }
}

export const remove = (updateID) => {
  return {
    type: actionTypes.REMOVE,
    updateID: updateID
  }
}
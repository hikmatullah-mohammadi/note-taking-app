import * as actionTypes from './types'

// TODO: notes should come from an API as JSON
export const fetchNotes = () => dispatch => {
  dispatch({
    type: actionTypes.FETCH_NOTES,
  })
}

let newId = 1
export const addNew = note => dispatch => {
  dispatch({
    type: actionTypes.NEW_NOTE,
    payload: {
      note: {
        id: newId,
        ...note
      }
    }
  })
  newId += 1
}

export const updateNote = (note) => dispatch => {
  const dateModified = Date().slice(4, 21)
  dispatch({
    type: actionTypes.UPDATE_NOTE,
    payload: {
      note:{...note, dateModified}
    }
  })
}

export const deleteNote = id => ({
    type: actionTypes.DELETE_NOTE,
    payload: {
      id
    }
})

export const searchNote = title => ({
  type: actionTypes.SEARCH_NOTE,
  payload: {
    title
  }
})

export const addToOrRemoveFromFavorites = id => ({
  type: actionTypes.ADD_TO_OR_REMOVE_FROM_FAVORITES,
  payload: {
    id
  }
})

export const findFavorites = () => ({
  type: actionTypes.FIND_FAVORITES
})
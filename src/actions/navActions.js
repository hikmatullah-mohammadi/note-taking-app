import * as actionTypes from './types'

export const openHome = () => ({
  type: actionTypes.NAV_HOME
})
export const openAllNotes = () => ({
  type: actionTypes.NAV_ALL_NOTES
})
export const openNewNote = () => ({
  type: actionTypes.NAV_NEW_NOTE
})
export const openFavorites = () => ({
  type: actionTypes.NAV_FAVORITES
})
export const openSearch = () => ({
  type: actionTypes.NAV_SEARCH
})
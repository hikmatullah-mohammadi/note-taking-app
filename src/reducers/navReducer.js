import * as actionTypes from "../actions/types";

const initialState = {
  activeTab: 'home',
  isMenuOpen: false
}
const navReducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.NAV_HOME:
      return {isMenuOpen: !state.isMenuOpen, activeTab: 'home'}
    case actionTypes.NAV_ALL_NOTES:
      return {isMenuOpen: !state.isMenuOpen, activeTab: 'allNotes'}
    case actionTypes.NAV_NEW_NOTE:
      return {isMenuOpen: !state.isMenuOpen, activeTab: 'newNote'}
    case actionTypes.NAV_FAVORITES:
      return {isMenuOpen: !state.isMenuOpen, activeTab: 'favorites'}
    case actionTypes.NAV_SEARCH:
      return {isMenuOpen: !state.isMenuOpen, activeTab: 'search'}
    case actionTypes.TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen}
    default: 
      return {...state}
  }
}

export default navReducer
import * as actionTypes from "./../actions/types";

const initialState = {
  notes: [],
  searchMatches: [],
  favorites: []
}
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTES:
      return {
        ...state
      };
    case actionTypes.NEW_NOTE:
      return {
        ...state,
        notes: [action.payload.note ,...state.notes]
      }
    case actionTypes.DELETE_NOTE:
      return {
        searchMatches: [
          ...state.searchMatches.filter(item => item.id !== parseInt(action.payload.id))
        ],
        notes: [
          ...state.notes.filter(item => item.id !== parseInt(action.payload.id))
        ],
        favorites: [
          ...state.favorites.filter(item => item.id !== parseInt(action.payload.id))
        ]
      }
    case actionTypes.UPDATE_NOTE:
      return {
        searchMatches: [
          ...state.searchMatches.map(item => item.id !== action.payload.note.id ? item : action.payload.note)
        ],
        notes: [
          ...state.notes.map(item => item.id !== action.payload.note.id ? item : action.payload.note)
        ],
        favorites: [
          ...state.favorites.map(item => item.id !== action.payload.note.id ? item : action.payload.note)
        ]
      }
    case actionTypes.SEARCH_NOTE:
      const searchKey = action.payload.title.trim()
      return {
        ...state,
        searchMatches: [...state.notes.filter(item => searchKey.length > 0 && item.noteTitle.search(searchKey) >= 0)]
      }
    case actionTypes.FIND_FAVORITES:
      return {
        ...state,
        favorites: [...state.notes.filter(item => item.isFavorite)]
      }
    case actionTypes.ADD_TO_OR_REMOVE_FROM_FAVORITES:
      return {
        notes: [...state.notes.map(item => item.id === action.payload.id ? ({...item, isFavorite: !item.isFavorite}) : item)],
        searchMatches: [...state.searchMatches.map(item => item.id === action.payload.id ? ({...item, isFavorite: !item.isFavorite}) : item)],
        favorites: [
          ...state.notes.map(item => item.id === action.payload.id ? ({...item, isFavorite: !item.isFavorite}) : item)
          .filter(item => item.isFavorite)
        ]
      }
    default:
      return { ...state };
  }
};

export default noteReducer
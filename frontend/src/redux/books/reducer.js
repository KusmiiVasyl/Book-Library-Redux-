import * as actionTypes from './actionType'
import { v4 as uuidv4 } from 'uuid'

const initialState = []

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      action.payload.id = uuidv4()
      action.payload.isFavorite = false
      return [...state, action.payload]
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload)
    case actionTypes.TOGGLE_FAVORITE:
      return state.map((book) => {
        if (book.id === action.payload) {
          return { ...book, isFavorite: !book.isFavorite }
        }
        return book
      })
    default:
      return state
  }
}

export default booksReducer

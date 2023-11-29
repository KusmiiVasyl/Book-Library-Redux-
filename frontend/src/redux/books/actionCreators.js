import * as actionTypes from './actionType'

export const addBook = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  }
}

export const deleteBook = (id) => {
  return {
    type: actionTypes.DELETE_BOOK,
    payload: id,
  }
}

export const favoriteBook = (id) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    payload: id,
  }
}

import * as actionTypes from './actionType'
import { v4 as uuidv4 } from 'uuid';

const initialState = []

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      action.payload.id = uuidv4()
      return [...state, action.payload]
    default:
      return state
  }
}

export default booksReducer

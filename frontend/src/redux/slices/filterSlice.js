import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  isFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // we can muttate our state, because 'createSlice' use library Immer
      state.title = action.payload

      // We can return new state
      // return { ...state, title: action.payload }
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setFavoriteFilter: (state) => {
      state.isFavorite = !state.isFavorite
    },
    resetFilters: () => initialState,
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  resetFilters,
} = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectIsFavoriteFilter = (state) => state.filter.isFavorite
export default filterSlice.reducer

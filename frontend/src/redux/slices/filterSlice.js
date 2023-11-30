import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
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
    resetFilters: () => initialState,
  },
})

export const { setTitleFilter, resetFilters } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export default filterSlice.reducer

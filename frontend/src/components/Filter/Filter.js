import { useDispatch, useSelector } from 'react-redux'
import {
  resetFilters,
  selectTitleFilter,
  setTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const title = useSelector(selectTitleFilter)
  const dispatch = useDispatch()

  const handleTitleChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={title}
            placeholder="Filter by title..."
            onChange={handleTitleChange}
          />
        </div>
        <button type="button" onClick={() => dispatch(resetFilters())}>
          Filter Reset
        </button>
      </div>
    </div>
  )
}

export default Filter

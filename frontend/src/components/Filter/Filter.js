import { useDispatch, useSelector } from 'react-redux'
import {
  resetFilters,
  selectAuthorFilter,
  selectTitleFilter,
  setAuthorFilter,
  setTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const dispatch = useDispatch()

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={(e) => dispatch(setTitleFilter(e.target.value))}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
            onChange={(e) => dispatch(setAuthorFilter(e.target.value))}
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

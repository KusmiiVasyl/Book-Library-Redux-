import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import './BookList.css'
import { deleteBook, favoriteBook } from '../../redux/books/actionCreators'
import {
  selectAuthorFilter,
  selectIsFavoriteFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'

const BookList = () => {
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const isFavoriteFilter = useSelector(selectIsFavoriteFilter)
  const dispatch = useDispatch()

  const filterBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      book.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
      (isFavoriteFilter ? book.isFavorite : true)
  )

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filterBooks.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => dispatch(favoriteBook(book.id))}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => dispatch(deleteBook(book.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList

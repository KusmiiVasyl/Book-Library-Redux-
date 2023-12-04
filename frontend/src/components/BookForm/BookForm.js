import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook, fetchBook } from '../../redux/slices/booksSlice'
import { setError } from '../../redux/slices/errorSlice'
import bookData from '../../data/books.json'
import createBookWithID from '../../utils/createBookWithID'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handlerAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * bookData.length)
    dispatch(addBook(createBookWithID({ ...bookData[randomIndex] }, 'random')))
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (author && title) {
      dispatch(addBook(createBookWithID({ title, author }, 'manual')))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('You will must fill fields title & author!'))
    }
  }

  const handlerAddRandomBookViaAPI = () => {
    dispatch(fetchBook('http://localhost:4000/random-book'))
  }

  return (
    <div className="app-block book-form">
      <h2>Add a new Book</h2>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handlerAddRandomBook}>
          Add random book
        </button>
        <button type="button" onClick={handlerAddRandomBookViaAPI}>
          Add random book via API
        </button>
      </form>
    </div>
  )
}

export default BookForm

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/books/actionCreators'
import bookData from '../../data/books.json'
import './BookForm.css'
import createBookWithID from '../../utils/createBookWithID'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handlerAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * bookData.length)
    dispatch(addBook(createBookWithID({ ...bookData[randomIndex] })))
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (author && title) {
      dispatch(addBook(createBookWithID({ title, author })))
      setTitle('')
      setAuthor('')
    }
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
      </form>
    </div>
  )
}

export default BookForm

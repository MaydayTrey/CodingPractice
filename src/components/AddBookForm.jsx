import { useState } from 'react'

const AddBookForm = ({ createBook }) => {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')

    const handleBookCreation = (event) => {
        event.preventDefault()
        const createdBook = {
            author,
            title,
            rating
        }
        createBook(createdBook)
        setAuthor('')
        setTitle('')
        setRating('')
    }

    return (
        <form onSubmit={handleBookCreation}>
            <label>
                Author
                <input
                type="text"
                value={author}
                onChange={({ target }) => setAuthor(target.value)}
                />
            </label>
            <label>
                Title
                <input
                type="text"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
                />
            </label>
            <label>
                Rating
                <input
                type="number"
                max='5'
                min='0'
                value={rating}
                onChange={({ target }) => setRating(target.value)}
                />
            </label>
            <button type="submit">Add book</button>
        </form>
    )
}

export default AddBookForm



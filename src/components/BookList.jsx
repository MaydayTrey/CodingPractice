import { Link } from 'react-router-dom'


const BookList = ({ bookArray }) => {
    return (
        <div>
            <ul>
                {bookArray.map(book => 
                <li key={book.id}>
                    <Link to={`/books/${book.id}`}>{book.title} by {book.author}</Link>
                </li>
                )}
            </ul>
        </div>
    )
}

export default BookList
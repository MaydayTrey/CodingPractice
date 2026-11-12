import { useParams } from 'react-router-dom'

const BookView = ({ bookArray }) =>  {
    const id = useParams().id
    const book = bookArray.find(book => book.id === id)

    if(!book){
        return null
    }

    return (
        <div>
            <p>Title: {book.title}</p>
            <p>Written by: {book.author}</p>
            <p>Rating: {book.rating}</p>
            <p>There would be much more information about this book here.</p>
        </div>
    )
}

export default BookView

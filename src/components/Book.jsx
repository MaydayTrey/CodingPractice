import { useState } from 'react'


const Book = ({ book }) => {
    const [detailsVisible, toggleDetails] = useState(false)

    return (
        <div>
            <p>Title: {book.title}</p>
            <p>Written by: {book.author}</p>
            <button onClick={() => (toggleDetails(!detailsVisible))}>{detailsVisible ? 'Hide Details' : 'Show Details'}</button>
            
            {detailsVisible && (
                <div>
                    <p>Rating: {book.rating}</p>
                    <p>There would be much more information about this book here.</p>
                    </div>
                )}
        </div>
    )
}

/*
{detailsVisible && (
  <div>
    <p>Rating: {book.rating}</p>
  </div>
)}

*/

export default Book
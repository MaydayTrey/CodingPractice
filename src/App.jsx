import { useState, useRef } from 'react'
import Collapsible from './components/Collapsible'
import Book from './components/Book'
import AddBookForm from './components/AddBookForm'

const App = () => {
  const bookArrayStart = [
    {author: "Bob",
      title: "Bob's Book",
      rating: 3,
      id: '1' 
    },
    {author: "Jim",
      title: "Jim's Book",
      rating: 4,
      id: '2'
    },
    {author: "Tony",
      title: "Tony's Book",
      rating: 5,
      id: '3'
    }
  ]

  const [bookArray, bookArraySet] = useState(bookArrayStart)
  //Book data, do I put within the useState the objects?

  const handleCreateBook = (bookObject) => {
    const newBook = { ...bookObject, id: crypto.randomUUID() }
    bookArraySet(bookArray.concat(newBook))
    formRef.current.toggleVisibility()
  }

  const formRef = useRef()

  return (
    <div>
      <Collapsible buttonLabel='Show Book List'>
        {bookArray.map(book => 
          <Book key={book.id} book={book}/>
        )}
      </Collapsible>
      <Collapsible buttonLabel='Create A Book' ref={formRef}>
        <AddBookForm createBook={handleCreateBook}/>
      </Collapsible>
    </div>

  )

}

export default App

/*
useRef was a important tenet of what was taught in 5(b), which we will be covering more in-depth in this instance.

Okay, for collapsible, I don't seem to be making any use of ref,
I will use ref for addBook. 


IDs for book objects are currently simple, and hardcoded. 
This will matter when we create books; and the tool will be:
crypto.randomUUID()



*/
import { useState } from 'react'
import AddBookForm from './components/AddBookForm'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import BookList from './components/BookList'
import BookView from './components/BookView'
import Home from './components/Home'
import NotFound from './components/NotFound'

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

  const navigate = useNavigate()
  const handleCreateBook = (bookObject) => {
    const newBook = { ...bookObject, id: crypto.randomUUID() }
    bookArraySet(bookArray.concat(newBook))
    navigate('/books')
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Book List</Link>
        <Link to="/create">Create a Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList bookArray={bookArray}/>}/>
        <Route path="/create" element={<AddBookForm createBook={handleCreateBook}/>}/>
        <Route path="/books/:id" element={<BookView bookArray={bookArray}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  )

}

export default App

/*
In this update; we will use navigation and URL state to render components. 

First pass; imported Link, Routes, Route. 
I am trying to convert from the collapsible form to the version in which we simply click a navigational element to show the proper component we deisre, and reflect this in the URL.




*/
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShowBooks from './pages/ShowBooks'
import DeleteBooks from './pages/DeleteBooks'
import EditBook from './pages/EditBook'
import CreateBook from './pages/CreateBook'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBooks />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBooks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
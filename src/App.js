import React from 'react'
import { BrowserRouter as Router, Route, Routes, Routs } from 'react-router-dom';
import Home from './pages/Home';
import SingleTitle from './pages/SingleTitle';
import Header from './components/Header'

const App = () => {
  return (
      <>
        <Router>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element={<SingleTitle />} />
            </Routes>
        </Router>
      
      
      </>
  )
}

export default App

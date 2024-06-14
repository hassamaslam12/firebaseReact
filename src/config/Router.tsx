import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AskQuestion from '../Screens/AskQuestion'
import AllQuestions from '../Screens/AllQuestions'
import SingleQuestion from '../Screens/SingleQuestion'

const Router = () => {
  return (
    
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AllQuestions />}/>
                <Route path='/askquestion' element={<AskQuestion />}/>
                <Route path='/question/:id' element={<SingleQuestion />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Router

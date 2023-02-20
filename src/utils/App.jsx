import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Netflix from '../pages/Netflix'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Movie from '../pages/Movies'
import TVShows from '../pages/TVShows'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = "/login" element = {<Login/>}/>
      <Route exact path = "/signup" element = {<Signup/>}/>
      <Route exact path = "/" element = {<Netflix/>}/>
      <Route exact path = "/movies" element = {<Movie/>}/>
      <Route exact path = "/tv" element = {<TVShows/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

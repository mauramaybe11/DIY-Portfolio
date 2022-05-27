/* eslint-disable no-tabs */
import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/Maura/about'
import Project from './components/Maura/projects'
import Contact from './components/Maura/contact'
import Home from './components/Maura/home'

function App () {
  return (
    <div>
      <Header/>
      <Route
        exact
        path='/'
        render={() => (
          <Home/>
        )}
      />
      <Route
        exact
        path='/project'
        render={() => (
          <Project/>
        )}
      />
      <Route
        exact
        path='/contact'
        render={() => (
          <Contact/>
        )}
      />
      <Route
        exact
        path='/about'
        render={() => (
          <About/>
        )}
      />
    </div>
  )
}

export default App

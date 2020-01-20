import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { store } from './redux/store'
import Home from './pages/home'
import ETC from './pages/etc'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/etc'>
            <ETC/>
          </Route>
          
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App

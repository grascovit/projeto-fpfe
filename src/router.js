import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import Repositorio from './containers/Repositorio'

const router = (
  <BrowserRouter>
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/repositorio' exact component={Repositorio} />
    </div>
  </BrowserRouter>
)

export default router

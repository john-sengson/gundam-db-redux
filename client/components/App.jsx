import React from 'react'
import { Route } from 'react-router-dom'

import gundam from '../../data/gundam.js'

import Header from './Header'
import GundamList from './GundamList.jsx'
import Cart from './Cart'

const App = () => {
  return (
    <div>
      <Header />
      <GundamList gundam={gundam} />
      <Route exact path='/cart' component={Cart} />
    </div>
  )
}

export default App

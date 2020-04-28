import React from 'react'

import gundam from '../../data/gundam.js'

import Header from './Header'
import GundamList from './GundamList.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <GundamList gundam={gundam} />
    </div>
  )
}

export default App

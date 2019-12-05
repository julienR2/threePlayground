import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Worlds from './Worlds'

const App = () => (
  <Router>
    <Route path="/:world?" component={Worlds} />
  </Router>
)

export default App

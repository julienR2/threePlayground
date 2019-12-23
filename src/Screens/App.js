import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Worlds from './Worlds'

const App = () => (
  <Router>
    <Redirect from="/" to="/SpaceXWorld" />
    <Route path="/:world?" component={Worlds} />
  </Router>
)

export default App

import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Extreme from "./components/Extreme.jsx"
import Home from "./components/Home.jsx"
import NavBar from "./components/NavBar.jsx"

App() => {
  return (
    <Router>
      <div>
        <NavBar />

        <Route exact path = "/" component={Home}>
        <Route exact path = "/extreme" component={Extreme}>
      </div>
    </Router
  )
}

import React, { Fragment } from "react"

import Header from "../header/header"
import Footer from "../footer/footer"
import Navigation from "../navigation/navigation"

import "./layout.scss"

const Layout = ({ children }) => (
  <Fragment>
    <Header/>
    <Navigation />
    <div className="main-layout">
      <main>
        { children }
      </main>
    </div>
    <Footer />
  </Fragment>
)

export default Layout

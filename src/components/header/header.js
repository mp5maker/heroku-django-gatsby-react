import React from "react"

import { Link } from "gatsby"

import './header.scss'

const Header = () => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {`Simple App`}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header

import React from 'react'
import classes from './Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <h1>FinCap</h1>
      <button className={classes.navbar__btn}>Test</button>
    </div>
  )
}

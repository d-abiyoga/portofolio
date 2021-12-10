import classes from './Nav.module.scss'
import Link from 'next/link'
import MenuToggle from '../MenuToggle/MenuToggle'
import { useState, useLayoutEffect } from 'react'

const Nav = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <div className={classes.logo}>Dimas Abiyoga</div>
      </Link>
      <nav >
        <ul>
          <li>
            <Link href='#work'>Work</Link>
          </li>
          <li>
            <Link href='#skills'>Skills</Link>
          </li>
          <li>
            <Link href='#hire-me'>Hire me</Link>
          </li>
        </ul>
      </nav>
      <MenuToggle ariaControls="main-navigation" />
    </header >
  )
}

export default Nav;

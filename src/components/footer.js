import React from 'react'
import { Link } from 'react-router-dom';
import './about.js'
import './stylesheet_footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <br/>
      <hr/>
      <Link id='about' to=".components/about.js">About</Link>
    </div>
  )
}

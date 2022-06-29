import React from 'react'
import "./Moveto.css"
import {Link} from "react-router-dom"
const Moveto = () => {
  return (
    <div>
    <head><title>Menubar</title>
    </head>
    <body>
        <div class="navbar">
            <Link to="/electronics"><button class="dropdown">Elecronics</button></Link>
            <Link to="/fashion"><button class="dropdown">Fashion</button></Link>
            <Link to="/grocery"><button class="dropdown">Grocery</button></Link>
            <Link to="/furniture"><button class="dropdown">Furniture</button></Link>
            <Link to="/cosmetics"><button class="dropdown">Cosmetics</button></Link>
        </div>

    </body>
    
    </div>
  )
}

export default Moveto
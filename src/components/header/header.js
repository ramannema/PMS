import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  <nav>
    <ul>
      <li>
        <h1>
          <a href="#">
            {" "}
            <span className="fa-solid fa-code" aria-hidden="true" />{" "}
            <span></span>
            
            <span>Financial Samurai</span>
            
          </a>
          
        </h1>
      </li>
      <li>
        <a href="/">Home</a>
      </li>
      { <li>
        <Link to={"/Portfolio"}>Portfolio</Link>
      </li> }
      <Link to={"/contact"}> Contact</Link>

      {/* {<li>
        <a href="/search">Stock</a>
      </li> } */}

      <Link to={"/Search"}> Stock </Link> 
      
      { <Link to={"/CreatePortfolio"}><li className='button'>
              Create Portfolio
      </li></Link> }
    </ul>
  </nav>
    
  )
}

export default Header
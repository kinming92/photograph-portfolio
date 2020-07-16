import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <ul className="navbar__nav">
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio"}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio/about"}>About</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio/works"}>Works</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio/contact"}>Contact</Link>
                    </li>
                </ul>
   
            </div>
        );
    }
}

export default Navbar
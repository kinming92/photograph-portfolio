import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <ul className="navbar__nav">
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio"}>主页</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio/about"}>关于我们</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio/works"}>图片</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to={"/photograph-portfolio/contact"}>联系我们</Link>
                    </li>
                </ul>
   
            </div>
        );
    }
}

export default Navbar
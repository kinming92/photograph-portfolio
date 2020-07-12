import React, { Component } from "react"
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render(){
        return (
            <div className="sidebar">
                
                    <nav className="lang"> 
                        <ul className="lang__nav">
                            <li className="lang__item">en</li>
                            <li className="lang__item">ch</li>
                        </ul>
                    </nav>

                    <nav className="social-media-icon">
                        <ul className="social-media-icon__nav">
                            <li className="social-media-icon__item">
                                <Link to={"/facebook"}>
                                    <i className="fab fa-facebook" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/instagram">
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/twitter">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/tiktok">
                                    <i className="fab fa-tiktok"></i>
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/behance">
                                    <i className="fab fa-behance" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/pinterest">
                                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/dribble">
                                    <i className="fab fa-dribbble" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                   
            </div>
        )
    }
}

export default Sidebar
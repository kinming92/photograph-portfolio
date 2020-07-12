import React, { Component } from "react";

class About extends Component{
    render(){
        return (
                <div className="about-box">
                    <div className="container-box-right">
                        <img src="https://via.placeholder.com/300" alt="..." />
                    </div>
                    <div className="container-box-left">
                        <div className="container-box-left__top">
                            <img src="https://via.placeholder.com/150" alt="..." />
                        </div>
                        <div className="container-box-left__bottom">
                            <img src="https://via.placeholder.com/150" alt="..." />
                        </div>
                    </div>
                    <div className="text-box"> 
                        <h5>Abouts</h5>
                            <p>Lorem ipsum dolor sit ampor incididuntt entrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure iat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
               
        )
    }
}

export default About


// css style
// .about-box{
//     max-width: 70%;
//     max-height: fit-content;
//     border: 1px solid white;
//     margin: 3rem;
//     display: flex;
//     align-items: stretch;

// }
// .container-box-right img{
//     padding: 1rem;
// }

// .container-box-left__top{
//     padding: 1em;
//     padding-bottom: 0.5em;
// }
// .container-box-left__bottom{
//     padding: 1em;
//     padding-top: 0.5em;
// }

// .text-box {
//     padding: 1em;
// }

// .text-box h5{
//     font-size: 60px;
//     position: relative;
//     right: 5rem;
// }
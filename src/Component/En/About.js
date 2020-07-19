import React, { Component } from "react";

class About extends Component{
    render(){
        return (
            <div className="about-box container border">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="/photograph-portfolio/image/highway-covered-in-water.jpg" alt="none" />
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <img src="/photograph-portfolio/image/apartments-architecture-balcony-black-and-white.jpg" alt="..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <img src="/photograph-portfolio/image/a-pexels.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div>
                            <b>About</b><hr />
                            <p>Lorem Ipsumer since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About
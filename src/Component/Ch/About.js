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
                            <b>关于我们</b><hr />
                            <p>拍摄照片可以留住当下，让记忆成为永恒。今天摄影很普及，但不妨认真想想及欣赏它，因为在远古时代，或是几百年前，这种能力会被视为一种魔法。</p>
                            <p>当你拍摄时，你必然注意到细节、环境或其他当下的事情，而不会总是在想过去的事情，或是考虑将来如何，却是专注于现在，这是很有意义的。</p>
                            <p>无论小孩子是你的，还是朋友的，他们都是奇妙的拍摄对象。他们以不同的角度看世界，并且相比成年人，更能表达自己的爱与情感。拍摄小孩子是美妙的摄影挑战，同时也是珍贵的学习体验。</p>
                            <p>这是为什么我们会喜欢摄影</p>
                            <p>&copy; https://www.sohu.com/a/166649937_374721</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About
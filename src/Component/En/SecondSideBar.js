import React, {Component} from 'react'
import ReactCarousel from './ReactCarousel'

class SecondSideBar extends Component {
    render(){
        return (
            <div className="second-side-bar">
                <ReactCarousel numItems={this.props.items}/>
            </div>
        );
    }
}

export default SecondSideBar
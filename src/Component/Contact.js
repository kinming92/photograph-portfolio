import React, {Component} from 'react'

class Contact extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        // const post = {
        //     email: e.target.elements.email.value,
        //     message: e.target.elements.message.value
        // }
    }
    
    render(){
        return (
            <div className="contact-box">
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Contact Us</h3>
                        <p className="card-text">Feel free to leave us a message</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3" name="message"></textarea>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-secondary mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact
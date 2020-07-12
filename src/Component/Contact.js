import React, {Component} from 'react'

class Contact extends Component{
    render(){
        return (
            <div className="contact-box">
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Contact Us</h3>
                        <p className="card-text">Feel free to leave us a message</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
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
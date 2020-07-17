import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SecondSideBar from './SecondSideBar'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Works from './Works'



class App extends Component {
  render(){
    return (
      <div className="app">
          <div className="flex-grid" >
            <Sidebar />
            <SecondSideBar />
            <div className="main-content">
              <Navbar />
              <Switch>
                <Route exact path='/photograph-portfolio' component={Home} />
                <Route path='/photograph-portfolio/contact' component={Contact} />
                <Route path='/photograph-portfolio/about' component={About} />
                <Route path='/photograph-portfolio/works' component={Works} />
                
                {/* use button / iframe */}
                <Route path='/facebook' component={({history}) => { 
                    history.replace("/photograph-portfolio");
                    window.location.href = 'https://www.facebook.com/';
                    return null;
                }}/>
                <Route path='/instagram' component={({history}) => { 
                    history.replace("/photograph-portfolio"); 
                    window.location.href = 'https://www.instagram.com/';
                    return null;
                }}/>
                <Route path='/twitter' component={({history}) => {
                    history.replace("/photograph-portfolio"); 
                    window.location.href = 'https://www.twitter.com/'; 
                    return null;
                }}/>
                <Route path='/tiktok' component={({history}) => { 
                    history.replace("/photograph-portfolio"); 
                    window.location.href = 'https://www.tiktok.com/'; 
                    return null;
                }}/>
                <Route path='/behance' component={({history}) => { 
                    history.replace("/photograph-portfolio"); 
                    window.location.href = 'https://www.behance.net/'; 
                    return null;
                }}/>
                <Route path='/pinterest' component={({history}) => { 
                    history.replace("/photograph-portfolio"); 
                    window.location.href = 'https://www.pinterest.com/'; 
                    return null;
                }}/>
                <Route path='/dribble' component={({history}) => { 
                    history.replace("/photograph-portfolio"); 
                    window.location.href = 'https://dribbble.com/'; 
                    return null;
                }}/>
                
              </Switch>
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
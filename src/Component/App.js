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
            <div className="nav-content">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/works' component={Works} />
                <Route path='/facebook' component={() => { 
                    window.location.href = 'https://www.facebook.com/';
                    return null;
                }}/>
                <Route path='/instagram' component={() => { 
                    window.location.href = 'https://www.instagram.com/'; 
                    return null;
                }}/>
                <Route path='/twitter' component={() => { 
                    window.location.href = 'https://www.twitter.com/'; 
                    return null;
                }}/>
                <Route path='/tiktok' component={() => { 
                    window.location.href = 'https://www.tiktok.com/'; 
                    return null;
                }}/>
                <Route path='/behance' component={() => { 
                    window.location.href = 'https://www.behance.net/'; 
                    return null;
                }}/>
                <Route path='/pinterest' component={() => { 
                    window.location.href = 'https://www.pinterest.com/'; 
                    return null;
                }}/>
                <Route path='/dribble' component={() => { 
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

import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Sidebar from './En/Sidebar'
import SecondSideBar from './En/SecondSideBar'
import Works from './En/Works'

import NavbarEn from './En/Navbar'
import HomeEn from './En/Home'
import AboutEn from './En/About'
import ContactEn from './En/Contact'

import NavbarCh from './Ch/Navbar'
import HomeCh from './Ch/Home'
import AboutCh from './Ch/About'
import ContactCh from './Ch/Contact'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lang: 'en'
    }
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this)
  }

  handleLanguageSwitch(lang){
    this.setState({lang: lang})
    console.log(this.state.lang)
  }
  render(){
    const lang = this.state.lang;
    let Navbar = {}
    
    if( lang === 'en' ){
      Navbar = <NavbarEn />

    } else{
      Navbar = <NavbarCh />
    }
    return (
      <div className="app">
          <div className="flex-grid" >
            <Sidebar onLanguageClicked={this.handleLanguageSwitch}/>
            <SecondSideBar />
            <div className="main-content">
              {Navbar}
              <Switch>
                <Route exact path='/photograph-portfolio' component={lang === 'en' ? HomeEn : HomeCh} />
                <Route path='/photograph-portfolio/contact' component={lang === 'en' ? ContactEn : ContactCh} />
                <Route path='/photograph-portfolio/about' component={lang === 'en' ? AboutEn : AboutCh} />
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

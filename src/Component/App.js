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
      lang: 'en',
      largeScreen: true,
      showItems: 7
    }
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this)
   
  }

  handleWindowResize = () => {
    const width = Math.max(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
    const height = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
   
    if (window) {
      let showItems = 7
      if(height < 650){
        showItems = 8
      }else if (height < 900){
        showItems = 9
      }else {
        showItems = 10 //suppose to be max
      }
      this.setState({
        showItems: showItems
      })
    }

    
    if( width < 900 ){
      this.setState( {largeScreen: false})
    }else{
      this.setState({largeScreen: true})
    }
    console.log(this.state)
  }
  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleWindowResize.bind(this))
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleWindowResize.bind(this))
    }
  }

  handleLanguageSwitch(lang){
    this.setState({lang: lang})
  }
  render(){
    const { lang, largeScreen, showItems } = this.state;
    
    return (
      <div className="app">
          <div className="flex-grid" >
            <Sidebar onLanguageClicked={this.handleLanguageSwitch}/>
            { largeScreen ? <SecondSideBar items={showItems}/> : null}
            <div className="main-content">
              { lang === 'en' ? <NavbarEn /> : <NavbarCh />}
              <Switch>
                <Route exact path='/photograph-portfolio' component={ lang === 'en' ? HomeEn : HomeCh } />
                <Route path='/photograph-portfolio/contact' component={ lang === 'en' ? ContactEn : ContactCh } />
                <Route path='/photograph-portfolio/about' component={ lang === 'en' ? AboutEn : AboutCh } />
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

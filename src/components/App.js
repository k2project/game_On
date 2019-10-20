import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Top from './Top/Top';
import About from './About/About';
import Game from './Game/Game';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            levels:{
                currentLevel:1,//1-4
                completedLevels:0, //0-4
            },
            cookies:true,
        }
        this.setSettings= this.setSettings.bind(this);
        this.getSavedSettings=this.getSavedSettings.bind(this);
        this.setGameLevel=this.setGameLevel.bind(this);
        this.setCookies = this.setCookies.bind(this);
    }

    setSettings(){
        let levelSaved=localStorage.getItem('SettingsLevel');
        const {completedLevels}=this.state.levels;
        if(completedLevels>levelSaved){
            localStorage.setItem('SettingsLevel', this.state.levels.completedLevels);
        }


    }
//set the current level based on saved settings
    getSavedSettings(){

        let settingsLevel=Number(localStorage.getItem('SettingsLevel'));
        console.log(settingsLevel)
        // currentLevel=Number(currentLevel);
        let currentLevel=(settingsLevel===4? 1:settingsLevel+1);
        if(settingsLevel){
                this.setState(prevState => ({
                     levels: {
                         ...prevState.levels,
                         completedLevels:settingsLevel,
                         currentLevel,
                     }
                 }))

        }
    }
    setGameLevel(level){
        //set completed levels and localStorage
        const {currentLevel,completedLevels}=this.state.levels;
        if(currentLevel>completedLevels){
            this.setState(prevState => ({
                 levels: {
                     ...prevState.levels,
                     completedLevels:currentLevel,
                 }
             }))
             let settings = localStorage.getItem('SettingsSaved');
             if(settings){
                 this.setSettings();
             }

        }
        //set current level
        this.setState(prevState => ({
             levels: {
                 ...prevState.levels,
                 currentLevel:level,
             }
         }))

    }
    componentDidMount(){
        // window.scrollTo(0,0);
        let settings = localStorage.getItem('SettingsSaved');
        if(settings){
            this.getSavedSettings();
        }
        let cookies = localStorage.getItem('app-cookies');
        if(cookies){
            this.setState({cookies: false})
        }

    }
    setCookies(){
        localStorage.setItem('app-cookies','accepted');
        this.setState({cookies: false});
    }
    render() {
        const {levels}=this.state;
        return (
          <main className={`App theme-level-${levels.currentLevel}`}>
              {this.state.cookies && <div className="Cookies">
                  This website uses cookies solely for functional purposes to ensure you get the best experience. If you continue to use this service, you agree to the use of such cookies.
                  <button onClick={this.setCookies} aria-label="Accept cookies policy"> Got it! </button>

              </div>}
              <Header/>
              <Menu/>
              <Top/>
              <About/>
              <Game levels={levels} setSettings={this.setSettings} setGameLevel={this.setGameLevel}/>
              <Skills completedLevels={levels.completedLevels}/>
              <div className="stickyContainer">
                    <div className="stickyElement anchor">
                        <Projects/>
                    </div>
              </div>
              <Contact/>
              <footer>
                  <h1>Krzysztof Kopczynski</h1> | <b>FED</b> | Edinburgh {new Date().getFullYear()}
              </footer>
          </main>
        );
    }
}

export default App;

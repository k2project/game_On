import React from 'react';
import './Header.css';

export default function Header(){
    return(
        <header className="Header anchor">
            <div className="header__title">WEBDEVELOPER  WITH BALLS</div>
            <div className="header__mail">
                 <img src={require('../../imgs/icons/mailOutline.png')}  alt=""/>
                 <span> kopczkrzy@gmail.com</span>

             </div>
            <a href="https://twitter.com/_k2project" target="_blank" rel="noopener noreferrer">
                <img src={require('../../imgs/icons/twitterOutline.png')}  alt="Twitter account opens in a new window"/>
            </a>
            <a href="https://github.com/k2project" target="_blank" rel="noopener noreferrer">
                <img src={require('../../imgs/icons/githubOutline.png')}  alt="GitHub account opens up in a new window"/>
            </a>
        </header>
    )
}

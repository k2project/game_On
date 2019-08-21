import React from 'react';
import './Game.css';
import GameBox from './GameBox';

export default function Game(props){
    const {levels}=props;

    return (
      <div className="Game section section_grey anchor">
          <div className="section__title">
               <span>03 _______Having_A_Ball________</span>
          </div>
          <div className="section__body section_grey">
                <GameBox levels={levels} setSettings={props.setSettings} setGameLevel={props.setGameLevel}/>
          </div>
      </div>
    );
}

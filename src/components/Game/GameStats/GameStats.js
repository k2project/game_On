import React from 'react';
import './GameStats.css';
import settings from './../../../imgs/icons/settings.png';
import {alerts} from './../utils/gameStates';

const GameStats= (props)=>{
    const {levels,lives,bricks,pauseGame, paused}=props.gameStatesProps;

    const fullLives=Array.from({length:lives}).map((el,i)=><img src={require('../../../imgs/icons/heart_red.png')} alt="red heart" key={`heart-full_${i}`}/>);
    const lostLives=Array.from({length:(3-lives)}).map((el,i)=><img src={require('../../../imgs/icons/heart_grey.png')} alt="grey heart"  key={`heart-empty_${i}`}/>);
    const hearts=[...fullLives,...lostLives];
    const levelsList= [1,2,3,4].map(el=>{
        if(el===levels.currentLevel){
            return <span className="stats__level_current" key={'level_'+el}>{el}</span>
        }else{
            return <span key={'level_'+el}>{el}</span>
        }

    });

    let progress = 100-((bricks.currentNumOfBricks/bricks.numOfBricks)*100);
    let bricksLeft = (bricks.currentNumOfBricks===1)? '1 Brick': bricks.currentNumOfBricks +' Bricks';

    function toggleInfo(){
        const gameInfo= document.querySelector('.GameInfo');
        gameInfo.classList.toggle('is_hidden');
        if(!paused){
            pauseGame(alerts[1]);
        }
    }

    return(
        <div className="GameStats">
            <div className="stats__lives">
                <b>Lives</b>{hearts}
            </div>
            <div className="stats__progress-bar">
                <div><b>{bricksLeft}</b></div>
                <div className="bar">
                    <span style={{width:progress+'%'}}></span>
                </div>
                <div>
                    {Math.trunc(progress)+'%'}
                </div>
            </div>
            <div className="stats__level">
                <b>Current Level: </b>
                {levelsList}
            </div>
            <img src={settings} alt="settings" className="stats__settings" onClick={toggleInfo}/>
        </div>
    )
}

export default GameStats;

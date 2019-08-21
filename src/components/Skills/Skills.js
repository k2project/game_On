
import React from 'react';
import './Skills.css';
import ProgressBar from './ProgressBar';

const skillsDesc=[
    {
        index: 1,
        progress: 85,
        skills: ['HTML5', 'Semantic Coding', 'SEO Principles','Canvas',' Svg'],
        title: 'HTML',

    },
    {
        index: 2,
        progress: 80,
        skills: ['CSS3','Sass','Responsive Design','CSS Grid and CSS Flexbox'],
        title: 'CSS',
    },
    {
        index: 3,
        progress:70,
        skills:['ES6', 'Forms','Classes', 'Async/Await', 'Promise API', 'Fetch API', 'RegExp'],
        title:'JS',
    },
    {
        index: 4,
        progress:35,
        skills:['GitHub','jQuery',' ReactJS', 'NodeJS','Meteor',' WordPress', 'MySQL',' MaongoDB', ],
        title:'Others',
    },
]

const scrollToGame= ()=>{
    const game=document.querySelector('.Game');
    game.scrollIntoView({behavior:'smooth'});
    const progress = localStorage.getItem('gameProgressSaved');

}


export default function Skills( props ){
    const completed = props.completedLevels;
    const skillsList = skillsDesc.map((el,i)=>{
         if(i<completed){
             return <p key={'skillsList_'+i}><b>{el.title} : </b> {el.skills.join(', ')}.</p>
         }
         return null;
    })
    const skillsCircles = skillsDesc.map((el,i)=>{
        const cls = i < completed ? 'skills skills_unlocked' : 'skills';
        const locked = i < completed ? false : true;
        return <div className={cls} key={`skills_0${i}`}>
            <ProgressBar
                strokeWidth="13"
                sqSize="200"
                skills={el}
                locked={locked}
            />
        </div>

    });


    return (
             <div className="Skills section anchor">
                 <div className="section__title">
                      <span>04 _______Skills______</span>
                 </div>
                 <div className="section__body section_2clm">
                     <div>
                         <h2>A self-taught FED who really has something on the ball...</h2>
                         <p><b>I am always enthusiastic about learning new things and taking on a new challenge!</b></p>
                         {completed === 0 && <p>To find out what skills I have aquired so far you must play the Game.</p>}
                         <div className="skills__list">
                             {skillsList}
                         </div>
                         <div className="btn__brick" onClick={scrollToGame}>Back to the Game</div>
                     </div>
                     <div className="txt_ctr">
                         <div className="skills__box">
                             {skillsCircles}
                         </div>
                     </div>
                 </div>


             </div>

    )
}

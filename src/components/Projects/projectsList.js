import React from 'react';
import github from './../../imgs/icons/githubOutline.png';
import globe from './../../imgs/icons/globe.png';

export const projects=[
    {
        id:'Project One',
        title: 'Murray Grant Official Website',
        desc:' Responsive single page application built with React.js. End-to-end commercial project delivered with Agile methodology. Features multiple swipeable carousels with reusable functions and HTML5 Video. ',
        tools:(<span>ReactJS &bull; Sass &bull; CSS Grid &bull; CSS Flexbox</span>),
        web:'http://www.murraygrantofficial.com',
        github:'https://github.com/k2project/murray_grant',
        img:'mg.png',
    },
    {
        id:'Project Two',
        title: 'Rose Theatre Edinburgh',
        desc:'  Responsive single page application built with both Meteor.j and React.js. End-to-end commercial project for Edinburgh\'s local theatre. Features dynamically created routes based on a list of the currently running shows.',
        tools:(<span>MeteorJs &bull; ReactJS &bull; Sass &bull; CSS Grid
    </span>),
        web:'https://www.rosetheatreedinburgh.com/',
        img:'rte.png',
    },
    {
        id:'Projects Three and Four',
        multiple:true,
        title: (<div className="Project__multiple">
            <div className="Project__multiple_name">
                <p>AMB Collaborative </p>
                <p>Marc McBride </p>
            </div>
            <div className="Project__multiple_links">
                <p>
                    <a href="https://github.com/k2project/fred_mcBride"  target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub"/></a>
                    <a href="http://ambcollaborative.com/"  target="_blank" rel="noopener noreferrer"><img src={globe} alt="Website"/></a>
                </p>
                <p>
                    <a href="https://github.com/k2project/marc_mcBride"  target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub"/></a>
                    <a href="http://www.marcmcbride.co.uk/"  target="_blank" rel="noopener noreferrer"><img src={globe} alt="Website"/></a>
                </p>

            </div>
        </div>),
        desc:(<span> Responsive single page applications both built with React.js. End-to-end commercial projects. <i>Marc McBride</i> features HTML5 Video with fully customised controllers. </span>),
        tools:(<span>ReactJS &bull; Sass &bull; CSS Grid</span>),
        img:'mcbride.png',
    },
    {
        id:'Project Five',
        title: 'Nujoji Calvocoressi Counselling',
        desc:' Responsive single page application built with React.js and Nodejs, hosted on Heroku. End-to-end commercial project. Features customised accordion and contact form.',
        tools:(<span>ReactJS &bull; NodeJS &bull; ExpressJs &bull; Sass &bull; CSS Grid</span>),
        web:'http://www.calvocoressi.com/',
        github: 'https://github.com/k2project/nt-mern',
        img:'calvocoressi.png',
    },


    {
        id:'Project Six',
        title: 'Memory Card Game',
        desc:'A non-commercial project featuring a classic concentration game during which the player must match up Marvel\'s heroes and villains pairs. Intended as an exercise in mastering JavaScript and ReactJS skills.',
        tools:'ReactJS',
        web:'https://k2project.github.io/cards/',
        github:'https://github.com/k2project/cards',
        img:'game.png',
    },
    {
        id:'Project Seven',
        title: 'SPM Advisors',
        desc:(<span>My first commercial end-to-end websites built only with jQuery. While the code is far from a presentable example ( more like embarrassing! ), I have decided to feature it along with other projects to show how far I have come as a web developer. </span>),
        tools:(<span>jQuery</span>),
        web:'http://spm-advisors.com/',
        img:'spm.png',
    },
]

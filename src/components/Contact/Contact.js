import React,{useEffect} from 'react';
import './Contact.css';
import KrisKopczynskiResume from './../../imgs/KrisKopczynskiResume.pdf';

export default function Contact() {

    useEffect(()=>{
        window.addEventListener('load', handleScroll);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return ()=>{
            window.removeEventListener('load', handleScroll);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    })

    return(
        <div className="Contact section anchor">
                <div className="section__title">
                     <span>05 _______Hire_Me_!_____</span>
                </div>
                <div className="section__body">
                    {/* <ul className="wall"></ul> */}
                    <div className="section__call_for_action">
                        <h2>Let's work Together to build something amazing.</h2>
                            Maybe not walls though... Keep on knocking those down!
                            <a href={KrisKopczynskiResume} download className="btn__brick">Download resume</a>
                    </div>
                    <div className="contact__details">
                        <h3>The ball is in your court now!</h3>
                        <p>I am always up for a chat over a good cup of coffee. I am open to all ideas!<br/> So, please drop me a line via an email at <b>kopczkrzy@gmail.com</b> or hit me through <a href="https://twitter.com/_k2project" target="_blank" rel="noopener noreferrer" >my twitter account </a> if you are interested.</p>
                    </div>
                </div>

        </div>
    )
}
function handleScroll(){
    const contact= document.querySelector('.Contact');
    const h2= document.querySelector('.Contact .section__call_for_action');
    const prevSibling= contact.previousElementSibling;
    const windowH=document.documentElement.clientHeight;
    if((window.pageYOffset+windowH)>(prevSibling.offsetTop+prevSibling.clientHeight+300)){
        h2.style.top='0rem';
        h2.style.opacity=1;
    }else{
        h2.style.top='10rem';
        h2.style.opacity=0;
    }


}

// drawBricks(){
//     let wall = document.querySelector('.Contact ul.wall');
//     for(let e=0; e<55; e++){
//
//         let brick = document.createElement('li');
//         brick.classList='wall__brick';
//         wall.prepend(brick);
//     }
// }
// animateBricks(e){
//     e.target.style.display='none';
//     let bricks = document.querySelectorAll('.Contact .wall__brick');
//     let excluded=[52,53,47,44,39,37,33,7,6,5];
//
//     Array.from(bricks).forEach((brick, i)=>{
//         let random =Math.floor((Math.random() * 10) + 3);
//         setTimeout(()=>{
//             if(excluded.includes(i)){
//                 brick.style.top='0vh';
//             }else{
//                 brick.style.top='150vh';
//             }
//
//         },random*200)
//     })
//
//
// }

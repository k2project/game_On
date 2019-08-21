import React,{Component} from 'react';
import './Top.css';

export default class Top extends Component{
    constructor(props){
        super(props);
        this.state={
            text:['game','_On ',],
            title:'Game is on... Let\'s play!',
        }
        this.typeText= this.typeText.bind(this);
        this.showBricks = this.showBricks.bind(this);
    }
    typeText(){
        let {text,title}=this.state;
        const spans= document.getElementsByClassName('title__span');
        let i=title.length;
        let letter=(text[1]);
        this.interval = setInterval(() =>{
             if(i>text[0].length){
                title=title.split('');
                title.pop();
                title=title.join('');
                this.setState({ title });
                 i--;
             }else{
                 if(i>0){
                     title=title.split('');
                     title.push(letter[text[1].length-i]);
                     title=title.join('');
                     this.setState({ title });
                     i--;
                 }
             }
             if(title==='Game_On '){
                 clearInterval(this.interval);

                 //cursor
                 // spans[2].hidden=true;

                 let title=spans[1];
                 let titleText=title.textContent;
                 title.innerHTML=`<span>g${titleText.slice(1,3)}<span>${titleText.slice(3,6)}</span>${titleText.slice(6,)}</span>`;
                //hashtag
                spans[0].classList.add('title__span__hashtag_show');
                setTimeout(()=>{
                    const eOn = title.getElementsByTagName('span')[1];
                    eOn.classList.add('theme-color_transitioned');
                    eOn.innerHTML="<span class='e'>e</span>_O";
                },1000);


                 return;
             }
        }, 70);




    }
    showBricks(){
        let wall = document.querySelector('.Top ul.wall');
        for(let e=0; e<17; e++){

            let brick = document.createElement('li');
            brick.classList='wall__brick';

            wall.prepend(brick);

            let random =Math.floor((Math.random() * 10) + 3);

            setTimeout(()=>{
                brick.style.top=0;
                brick.style.opacity=0.5;
                brick.style.transform='scale(1.05)';
            },random*100)
        }

    }
    componentDidMount(){
        this.showBricks();
        setTimeout(this.typeText,1000);
        // setTimeout(this.typeText,2500);
        setTimeout(()=>{
            const rolling=document.querySelector('.rolling');
            rolling.style.opacity=1;
            rolling.style.top=0;
        },3000);

    }
    componentWillUnmount(){
         clearInterval(this.interval);
    }
    render(){
        return(
            <div className="Top section section_grey">
                <div className="section__title">
                     <span>01 _______Welcome_______</span>
                </div>
                <div className="section__body">

                    <ul className="wall"></ul>
                    <div className="title">
                        <span className= "title__span title__span__hashtag">#</span>
                        <span className= "title__span title__span__text">
                            {this.state.title}
                        </span>
                    </div>
                    <div className="rolling">
                        <p>GET THE BALL ROLLING</p>
                        <div className="scroller">|</div>
                    </div>


                </div>

            </div>
        )
    }
}

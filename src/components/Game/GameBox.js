import React, { Component } from 'react';
import GameStats from './GameStats/GameStats';
import GameInfo from './GameInfo/GameInfo';

import {alerts,colors,levels} from './utils/gameStates';
import {drawBall,drawPaddle,drawRec, isArrayInArray, randomInteger,  isElementInViewport} from './utils/gameFuns';

class GameBox extends Component {
    constructor(props){
        super(props);
        this.state={
            ball:{
                x:447,
                y:482,
                r:8, /*ball radius*/
                moving:false,
                newX:2,
                newY:-2,
                speed:10, /* decrease to speed up the ball: 10*/

            },
            bricks:{
                // currentNumOfBricks:0,
                height:20,
                numOfColumns:12,
                numOfRows:12,
                numOfBricks:150, //per sublevel
                offsetLeft:5,
                offsetTop:5,
                padding:5,
                width:70,
            },
            canvas:{
                height:450, //500
                width:905, /*11*brick padding+ 10* brick width*/
            },
            game:{
                // lives:3,
                paused:true,
            },
            message:0,
            spaceHit:0,
            paddle:{
                height:10,
                move:7,
                leftArrowPressed:false,
                rightArrowPressed:false,
                width:100,
                x:400,
                y:440,
            },
            swipe:null
        }
        this.handleKeyPress= this.handleKeyPress.bind(this);
        this.handleTap = this.handleTap.bind(this);
        this.drag = this.drag.bind(this);
        this.dragStart = this.dragStart.bind(this);

        this.toggleGamePause= this.toggleGamePause.bind(this);
        this.pauseGame = this.pauseGame.bind(this);
        this.unpauseGame = this.unpauseGame.bind(this);
        this.startGame= this.startGame.bind(this);
        this.restartGame= this.restartGame.bind(this);
        this.checkIfGameIsInViewport= this.checkIfGameIsInViewport.bind(this);

        this.returnCTX= this.returnCTX.bind(this);
        this.drawIntoCanvas= this.drawIntoCanvas.bind(this);
        this.clearCanvas=this.clearCanvas.bind(this);

        this.arrowPressed=this.arrowPressed.bind(this);
        this.arrowReleased=this.arrowReleased.bind(this);
        this.paddleMove= this.paddleMove.bind(this);
        this.updatePaddlePosition= this.updatePaddlePosition.bind(this);

        this.setupBricksLayout= this.setupBricksLayout.bind(this);
        this.redrawBricks=this.redrawBricks.bind(this);
        this.detectCollisionWithBricks=this.detectCollisionWithBricks.bind(this);
        this.goToNextLevel= this.goToNextLevel.bind(this);

        this.getBallMoving= this.getBallMoving.bind(this);
        this.updateBallYPosition= this.updateBallYPosition.bind(this);
        this.updateBallXPosition= this.updateBallXPosition.bind(this);
        this.detectCollisionWithWalls= this.detectCollisionWithWalls.bind(this);
        this.detectingCollisionWithPaddle=this.detectingCollisionWithPaddle.bind(this);
        this.lostLife= this.losingLife.bind(this);
        this.gameOver=this.gameOver.bind(this);
    }

    handleKeyPress(e){
        //13 center
        //32 space
        //stops space from scrolling
        if (e.keyCode === 32 && e.target === document.body) {
           e.preventDefault();
         }

         if(e.keyCode === 32 && this.state.spaceHit === 0){
            this.unpauseGame();
            this.setState({spaceHit:1});
        }else if(e.keyCode === 32 && this.state.spaceHit === 1){
            this.getBallMoving();
            this.setState({spaceHit:2});
        }else if(e.keyCode === 32 && this.state.spaceHit === 2){
             this.toggleGamePause();
         }

    }
    handleTap(){
        if(this.state.spaceHit === 0){
           this.unpauseGame();
           this.setState({spaceHit:1});
       }else if(this.state.spaceHit === 1){
           this.getBallMoving();
           this.setState({spaceHit:2});
       }else if(this.state.spaceHit === 2){
            this.toggleGamePause();
        }
    }

   dragStart(e) {
       const canvas = document.querySelector('.game__canvas').getBoundingClientRect();
       const scale = 905/ canvas.width; //canvas : 905 x 500
       // e.touches[0].clientX are related to the screen
       //need to be scaled to canvas real px value
       const xOffset = (e.touches[0].clientX - canvas.x)*scale - this.state.paddle.x;
       this.setState(prevState => ({
            swipe: {
                ...prevState.swipe,
                xOffset,
                scale,
                canvas
            }
        }))

    }


    drag(e) {
        e.preventDefault();
        let {xOffset, canvas,scale} = this.state.swipe;
        let x = (e.touches[0].clientX - canvas.x)*scale - xOffset;
        if(x < 0){
            x = 0;
        }
        if(x > this.state.canvas.width - this.state.paddle.width){
            x = this.state.canvas.width - this.state.paddle.width;
        }

        this.setState(prevState => ({
             paddle: {
                 ...prevState.paddle,
                 x,
             }
         }))
    }
    arrowPressed(e){

        if(e.keyCode===39){
            this.setState(prevState => ({
                 paddle: {
                     ...prevState.paddle,
                     rightArrowPressed:true,
                 }
             }))

        }
        if(e.keyCode===37){
            this.setState(prevState => ({
                 paddle: {
                     ...prevState.paddle,
                     leftArrowPressed:true,
                 }
             }))
        }
    }
    arrowReleased(e){

        if(e.keyCode===39){
            this.setState(prevState => ({
                 paddle: {
                     ...prevState.paddle,
                     rightArrowPressed:false,
                 }
             }))
        }
        if(e.keyCode===37){
            this.setState(prevState => ({
                 paddle: {
                     ...prevState.paddle,
                     leftArrowPressed:false,
                 }
             }))
        }
    }
    updatePaddlePosition(){
        const{canvas,paddle}=this.state;
        //only then event handler exist
        if(paddle.rightArrowPressed&&paddle.x<canvas.width-paddle.width){
            this.paddleMove('toRight');
        }
        if(paddle.leftArrowPressed&&paddle.x>0){
            this.paddleMove('toLeft');
        }
    }
    paddleMove(direction){
        const {move}= this.state.paddle;
        this.setState(prevState => ({
             paddle: {
                 ...prevState.paddle,
                 x: (direction==='toRight')? (prevState.paddle.x+move) : (prevState.paddle.x-move),
             }
         }))
    }
    getBallMoving(){
        this.setState(prevState => ({
             ball: {
                 ...prevState.ball,
                 moving: true,
             }
         }))
    }
    updateBallYPosition(){
        let y = 2 + Number(Math.random().toFixed(2));

        y = this.state.ball.newY>0 ? -1* y : y;
        return this.setState(prevState => ({
             ball: {
                 ...prevState.ball,
                 newY: y,
                 // newY: -prevState.ball.newY,
             }
         }))
    }
    updateBallXPosition(){
        return this.setState(prevState => ({
             ball: {
                 ...prevState.ball,
                 newX: -prevState.ball.newX,
             }
         }))
    }

    detectCollisionWithWalls(){
        const{ball,canvas}=this.state;
        /*bouncing the ball of walls: LEFT || RIGHT*/
        if(ball.x+ball.newX<ball.r || ball.x+ball.newX>canvas.width-ball.r ){
           this.updateBallXPosition();
       }
       /* bouncing the ball of the top wall */
        if(ball.y+ball.newY<ball.r){
            this.updateBallYPosition();
        }
        /*bouncing the ball of the bottom wall*/
        if(ball.y+ball.newY+ball.r>canvas.height-ball.r/2 ){
            /*hitting paddle*/
            this.detectingCollisionWithPaddle();
        }
    }
    detectingCollisionWithPaddle(){
        const{ball,paddle}=this.state;
        const edge = 10;
        if(ball.x+ball.r>=paddle.x-edge/2 && ball.x-ball.r<=paddle.x+paddle.width+edge/2 && ball.y+ball.r>=paddle.y && ball.y-ball.r<=paddle.y+paddle.height){
            //moving from top left || moving from top right
            //hitting edges
            //ball bounce back
            if((ball.newX>0 && ball.newY>0 && ball.x+ball.r<paddle.x+edge)||(ball.newX<0 && ball.newY>0 && ball.x-ball.r>paddle.x+paddle.width-edge)){
                this.updateBallYPosition();
                this.updateBallXPosition();
            }else{
                //hitting top of the paddle
                this.updateBallYPosition();
            }


        }else{
                //bouncing ball of bottom wall
                // this.updateBallYPosition(); //this bounce ball from bottom wall off
                this.losingLife();

        }

    }
    losingLife(){
        this.pauseGame();
        const{ball,canvas,paddle,game}=this.state;
        const paddleX=(canvas.width-paddle.width)/2;
        const ballYstartPosition = canvas.height-paddle.height-(ball.r/2);

         //update lives
         if(game.lives>1){
             this.pauseGame(alerts[4]);
             let lives = --game.lives;
             /*center ball and paddle and restart*/
             this.setState(prevState => ({
                  ball: {
                      ...prevState.ball,
                      moving:false,
                      newX:2,
                      newY:-2,
                      x:canvas.width/2,
                      y:ballYstartPosition,
                  },
                  game:{
                      ...prevState.game,
                      lives,
                  },
                  message:4,
                  spaceHit:0,
                  paddle:{
                       ...prevState.paddle,
                       x:paddleX,
                  },
              }),this.drawIntoCanvas)

         }else{
              this.gameOver();
         }
    }
    gameOver(){
        this.pauseGame(alerts[5]);
        //clear lives
        this.setState(prevState => ({
             game:{
                 ...prevState.game,
                 lives:0,
             },
             message:5,
             spaceHit:0,
         }))
        const restartBtn= document.querySelector('.btn_restart');
        restartBtn.addEventListener("click",()=>{
            this.startGame();
            this.unpauseGame();
            setTimeout(this.setState({spaceHit:1}),0);
        });


    }
    setupBricksLayout(){
        let{ height, width,offsetLeft, padding,numOfColumns,numOfRows}=this.state.bricks;
        let currentLevel = this.props.levels.currentLevel;
        let settings = localStorage.getItem('SettingsSaved');
        let level;
        if(settings){
            let settingsLevel=Number(localStorage.getItem('SettingsLevel'));
            level=(settingsLevel===4?this.props.levels.currentLevel-1:settingsLevel);
        }else{
            level=currentLevel-1;
        }

            const random = randomInteger(0,levels[0].length-1);
            const{c_start,c_n,c_skip,r_start,r_n, r_skip,extraStrong, skip_individual}=levels[level][random];
            let layout=[];
            for(let c=0; c<numOfColumns; c++){
                layout[c]=[];
                for(let r=0; r<numOfRows;r++){
                    layout[c][r]={
                        x:0,
                        y:0,
                        status:0
                    }
                }
            }
            let numOfBricks=0;
            for(let c=c_start; c<c_start+c_n; c++){
                if(!c_skip.includes(c)){
                    for(let r=r_start; r<r_start+r_n;r++){
                        if(!r_skip.includes(r)){

                            // const rand = randomInteger(0,3);
                            let brickX= (c*(width+padding))+offsetLeft;
                            let brickY= (r*(height+padding));
                            layout[c][r].x=brickX;
                            layout[c][r].y=brickY;
                            layout[c][r].hittable=true;
                            if(!isArrayInArray(skip_individual,[c,r])){
                                layout[c][r].status=1;
                                layout[c][r].color=colors[level][0];
                                // layout[c][r].color=colors[level][rand];
                                numOfBricks++;
                            }
                            if(isArrayInArray(extraStrong,[c,r])){
                                layout[c][r].status=2;
                            }

                        }


                    }
                }

            }
            this.setState(prevState => ({
                 bricks: {
                     ...prevState.bricks,
                     currentNumOfBricks:numOfBricks,
                     numOfBricks,
                 },
             }))
             return layout;


    }
    redrawBricks(){
        let ctx= this.returnCTX();
        let{height,layout,currentNumOfBricks,width,offsetTop,numOfColumns,numOfRows}=this.state.bricks;
        currentNumOfBricks=0;
        if(layout){
            for(let c=0; c<numOfColumns; c++){
                for(let r=0; r<numOfRows;r++){
                    let b = layout[c][r];
                    if(b.status>0){
                        currentNumOfBricks++;
                        if(b.status===1){
                            // this.drawABrick(ctx,b.x,b.y+offsetTop,width,height);
                            drawRec(ctx,b.x,b.y+offsetTop,width,height,b.color);
                        }
                        if(b.status===2){
                            drawRec(ctx,b.x,b.y+offsetTop,width,height,'#1f1f1f');
                        }
                    }
                }
            }

            this.setState(prevState => ({
                 bricks: {
                     ...prevState.bricks,
                     layout,
                     currentNumOfBricks,
                     offsetTop,
                 },
             }))
        }

    }
    detectCollisionWithBricks(){
        const {x, newX, newY,speed, y,r:rad}=this.state.ball;
        let {height:h,layout,currentNumOfBricks,width:w,numOfColumns,numOfRows,padding} = this.state.bricks;
        //detectingg collision with sides

            if(currentNumOfBricks>0){
                for(let c=0; c<numOfColumns; c++){
                    for(let r=0; r<numOfRows;r++){
                        let b = layout[c][r]; //brick
                        if(b.status>0 &&b.hittable){

                            if(x+rad>=b.x && x-rad<=b.x+w && y+rad>=b.y && y-rad<=b.y+h){
                                //moving from top left ||  bottom left corner
                                if((newX>0 && newY>0) || (newX>0 && newY<0)){
                                    //hitting top or bottom
                                    if(x>b.x+padding){
                                        this.updateBallYPosition();
                                    //hitting left or right side
                                    }else{
                                        // hiting corners
                                        if((y+rad<b.y+5&&newX>0 && newY>0) || (y-rad>b.y+h-5&&newX>0 && newY<0)){
                                            this.updateBallXPosition();
                                            this.updateBallYPosition();
                                        }else{
                                            this.updateBallXPosition();
                                        }

                                    }

                                }
                                //moving from top right || bottom right corner
                                if((newX<0 && newY>0) || (newX<0 && newY<0)){
                                    //hitting top or bottom
                                    if(x+rad<b.x+w-padding){
                                        this.updateBallYPosition();
                                    //hitting left or right side
                                    }else{
                                        // hiting corners
                                        if((y+rad<b.y+5 && newX<0 && newY>0 )|| (y-rad>b.y+h-5&&newX<0 && newY<0)){
                                            this.updateBallXPosition();
                                            this.updateBallYPosition();
                                        }else{
                                            this.updateBallXPosition();
                                        }


                                    }

                                }

                                //turning super bricks into regular
                                if(b.status===2){
                                    b.hittable=false;
                                    setTimeout(()=>{
                                        b.hittable=true;
                                    },speed*2);
                                }
                                b.status--;
                                this.setState(prevState => ({
                                     bricks: {
                                         ...prevState.bricks,
                                         layout,
                                         currentNumOfBricks,
                                     }
                                 }))
                            }

                        }
                    }
                }
            }else{
                    this.goToNextLevel();
            }

    }
    goToNextLevel(){
        this.setState(prevState => ({
             ball: {
                 ...prevState.ball,
                 moving: false,
             },
             game:{
                 ...prevState.game,
                 lives:3,
             },
             paddle:{
                 ...prevState.paddle,
                 x:400,
             },
             spaceHit:0,
         }))
        const{levels}=this.props;
        const skills=document.querySelector('.Skills');
        if(levels.completedLevels<levels.currentLevel){
            skills.scrollIntoView({behavior:'smooth'});
        }


        if(levels.currentLevel<4){
            this.pauseGame(alerts[2]);
            this.setState({message:2})
            const level=levels.currentLevel+1;
            this.props.setGameLevel(level);
            this.startGame();
        }else{
            this.pauseGame(alerts[3]);
            this.setState({message:3})
            this.props.setGameLevel(4);
            const restartBtn= document.querySelector('.btn_restart');
            restartBtn.addEventListener("click",()=>{
                this.restartGame(1);
                this.unpauseGame();
                setTimeout(this.setState({spaceHit:1}),0);
            });
        }


    }
    checkIfGameIsInViewport(){
        const {paused}=this.state.game
        const game=document.querySelector('.game__container');
        if(!isElementInViewport(game)&&!paused){
            this.pauseGame(alerts[1]);
            this.setState({message:1})
            const messageDiv = document.querySelector('.game__message');
            messageDiv.classList='game__message';
        }
    }
    toggleGamePause(message){
        const{paused}=this.state.game;
        const game=document.querySelector('.game__container');
        if(isElementInViewport(game)){
            if(paused){
                this.unpauseGame();
            }
            if(!paused){
                this.pauseGame(alerts[1]);
                this.setState({message:1})
            }
        }
    }
    pauseGame(message){
        clearInterval(this.game);

        this.setState(prevState => ({
             game: {
                 ...prevState.game,
                 paused:true,
             },
         }),()=>{
             const messageDiv = document.querySelector('.game__message');
             // messageDiv.classList='game__message';
             message = message? message : '';
             messageDiv.innerHTML=message;
         })
    }
    unpauseGame(){
        /// Firefox 1.0+
        const isFirefox = typeof InstallTrigger !== 'undefined';
        let s;
        if(isFirefox){
            s=this.state.ball.speed/2;
        }else{
            s=this.state.ball.speed;
        }
        this.game=setInterval(this.drawIntoCanvas,s);
        this.setState(prevState => ({
             game: {
                 ...prevState.game,
                 paused:false,
             },
         }))
    }
    startGame(){

        const{ball,canvas,paddle}=this.state;
        const paddleX=(canvas.width-paddle.width)/2;
        const ballYstartPosition = canvas.height-paddle.height-(ball.r/2);
        const layout=this.setupBricksLayout();
        this.setState(prevState => ({
            ball: {
                ...prevState.ball,
                moving:false,
                newX:2,
                newY:-2,
                x:canvas.width/2,
                y:ballYstartPosition,
            },
            game:{
                ...prevState.game,
                lives:3,
            },
            spaceHit:0,
            paddle:{
                 ...prevState.paddle,
                 x:paddleX,
            },
             bricks: {
                 ...prevState.bricks,
                 layout,
             },
         }), this.drawIntoCanvas)
    }
    restartGame(level){
        this.props.setGameLevel(level);
        this.startGame();
    }


    drawIntoCanvas(){

        this.clearCanvas();

        const ctx=this.returnCTX();
        const{ball,paddle}=this.state;

        this.redrawBricks();

        drawPaddle(ctx,paddle,'#1f1f1c');
        drawBall(ctx,ball,'#1f1f1c');

        if(ball.moving){
            this.setState(prevState => ({
                 ball: {
                     ...prevState.ball,
                     x: prevState.ball.x+ball.newX,
                     y: prevState.ball.y+ball.newY,
                 }
             }))
        }else{
            this.setState(prevState => ({
                 ball: {
                     ...prevState.ball,
                     x: paddle.x+paddle.width/2,
                 }
             }))
        }

        this.updatePaddlePosition();
        this.detectCollisionWithWalls();
        this.detectCollisionWithBricks();
    }

    returnCTX(){
        const cnvs= document.querySelector('.game__canvas');
        let ctx= cnvs.getContext('2d');
        ctx.strokeStyle='#1f1f1c';
        return ctx;
    }
    clearCanvas(){
        let ctx=this.returnCTX();
        const{width, height}=this.state.canvas;
        ctx.clearRect(0,0,width, height);
    }
    componentDidMount(){
        const container = document.querySelector('.game__canvas');
        this.startGame();
        document.addEventListener("keypress",this.handleKeyPress);
        document.addEventListener('keydown',this.arrowPressed);
        document.addEventListener('keyup',this.arrowReleased);
        window.addEventListener('load', this.checkIfGameIsInViewport);
        window.addEventListener('scroll', this.checkIfGameIsInViewport);
        window.addEventListener('resize', this.checkIfGameIsInViewport);
        container.addEventListener("touchstart", this.dragStart, false);
        container.addEventListener("touchmove", this.drag, false);

    }
    componentWillUnmount(){
        const container = document.querySelector('.game__canvas');
        clearInterval(this.game);
        document.removeEventListener("keypress",this.handleKeyPress);
        document.removeEventListener('keydown',this.arrowPressed);
        document.removeEventListener('keyup',this.arrowReleased);
        window.removeEventListener('load', this.checkIfGameIsInViewport);
        window.removeEventListener('scroll', this.checkIfGameIsInViewport);
        window.removeEventListener('resize', this.checkIfGameIsInViewport);
        container.removeEventListener("touchstart", this.dragStart, false);
        container.removeEventListener("touchmove", this.drag, false);

    }


    render() {
        const {bricks,canvas,game} = this.state;
        const{levels} = this.props;
        const gameStatesProps = {
            lives: game.lives,
            bricks,
            levels,
            pauseGame:this.pauseGame,
            paused: game.paused
        }
        return (
          <div className="GameBox">
              <GameStats gameStatesProps={gameStatesProps} />
              <div className="game__container">
                  <canvas className="game__canvas" width={canvas.width} height={canvas.height} onClick={this.handleTap}>
                      Your browser does not support the HTML5 canvas.
                  </canvas>
                  {
                      game.paused&&<div className="game__messageBox" onClick={this.handleTap}>
                        <div className="game__message">
                            <div className="game__message__title" data-state="start">L<span className="e">e</span>T's PLAY! </div>
                            <p>Destroy all the bricks to get to another level <br/> and to reveal my skills.</p>
                        </div>
                        <p className="game__message_ctrs">HIT SPACE or TAP THE SCREEN to start/pause/unpause the Game. <br/>Use arrows (R/L) or swipe movements to position/move the pad. <br/>And to get the ball rolling HIT SPACE/TAP SCREEN again. <br/> </p>
                      </div>
                  }
                  <div className="game__message__portrait">
                      <img src={require('../../imgs/icons/mobile.png')} alt="mobile in lanscape position "/>
                      Please rotate your device into a landscape position.
                  </div>
                  <GameInfo setSettings={this.props.setSettings}/>
              </div>
          </div>
        );
    }
}

export default GameBox;

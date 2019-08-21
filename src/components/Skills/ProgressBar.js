import React, { Component } from 'react';

export default class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state={
            progress:0,
        }
        this.handleScroll= this.handleScroll.bind(this);
    }

    handleScroll(){
        const {progress} = this.props.skills;
        const skills= document.querySelector('.Skills');
        if(window.pageYOffset>skills.offsetTop-200){
            this.setState({progress})
        }else{
            this.setState({progress:0})
        }

    }


    componentDidMount(){
        window.addEventListener('load', this.handleScroll);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);

    }

  render() {
      let {progress}=this.state;
      let{sqSize,strokeWidth,locked}=this.props;
      let{index,title}=this.props.skills;

    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * progress/ 100;
    const text = locked ? 'level '+index : title;
    const color = locked?  '#ccc' : '#111';
    // const skillsList = skills.map(el=><p key={`skill_${el}`}>_____ { el}</p>);
    return (
      <svg className="progress-bar"
          width={sqSize}
          height={sqSize}
          viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth-2}px`} />
          <circle
            className="circle-progress"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }} />
          <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            fill = {color}
            textAnchor="middle">{text}</text>

      </svg>
    );
  }
}

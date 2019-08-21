
import React, {useEffect} from 'react';
import './Projects.css';
import github from './../../imgs/icons/githubOutline.png';
import globe from './../../imgs/icons/globe.png';
import {projects} from './projectsList';

const scrollH = 1500;

const Projects = (props)=>{

    useEffect(() => {
        const stickyContainer = document.querySelector('.stickyContainer');
        stickyContainer.style.height = ( projects.length +1 ) * scrollH +'px';
        window.addEventListener('scroll', handleStickyElScroll)
    });
    const projectsList = projects.map(project=>displayProject(project));
    const lis = projects.map((project, i)=><li key={"li_0"+i}></li>);

    return (
             <div className="Projects section ">
                 <ul>{lis}</ul>
                 <div className="section__title">
                      <span>05 _______Projects______</span>
                 </div>
                 <div className="section__body">
                    {projectsList}
                 </div>
                 <div></div>

             </div>

    )
}
export default Projects;

function displayProject(project){
    return <div className="Project" key={project.id}>
        <div className="Project__id">____{project.id}</div>
        <div className="Project_2clm">
            <div className="Project__desc">
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <p><b>{project.tools}</b></p>
                {!project.multiple && <p className="btns">
                    {project.github && <a href={project.github} className="btn__brick"  target="_blank"><img src={github} alt="GitHub link"/>GitHub</a>}
                    <a  href ={project.web} className="btn__brick" target="_blank"><img src={globe} alt="website link"/>Website</a>
                </p>}

            </div>
            {/* <div className="text_ctr"> */}
                <img src={require('./../../imgs/'+project.img)} alt="projects" className="Project__img"/>
            {/* </div> */}
        </div>

    </div>
}

function handleStickyElScroll(){
    const stickyContainer = document.querySelector('.stickyContainer');
    const stickyContainerRec = stickyContainer.getBoundingClientRect();
    const projectsEl = document.querySelectorAll('.Project');
    const lis = document.querySelectorAll('.Projects li');
    if(stickyContainerRec.top<0){
        const top = Math.abs(stickyContainerRec.top);
        const index = Number((top/scrollH).toFixed(0));
        projectsEl.forEach((el,i)=>{
            el.classList.remove('anim');
            lis[i].classList.remove('active');
            // if(i===index){
            //     el.classList.add('anim');
            //     lis[i].classList.add('active');
            // }else{
            //
            // }
        })
        if(index>projectsEl.length-1){
            projectsEl[projectsEl.length-1].classList.add('anim');
            lis[lis.length -1].classList.add('active')
        }else{
            projectsEl[index].classList.add('anim');
            lis[index].classList.add('active');
        }


    }
}

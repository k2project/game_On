import React,{useEffect} from 'react';
import './Menu.css';

export default  function Menu(){
    useEffect(()=>{
        window.addEventListener('load', handleScroll);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return()=>{
            window.removeEventListener('load', handleScroll);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    });
    return (
      <ul className="Menu">
          <li onClick={handleMenuClick}>
              <span>Top</span>
          </li>
          <li onClick={handleMenuClick}>
              <span>About</span>
          </li>
          <li onClick={handleMenuClick}>
              <span>Game</span>
          </li>
          <li onClick={handleMenuClick}>
              <span>Skills</span>
          </li>
          <li onClick={handleMenuClick}>
              <span>Projects</span>
          </li>
          <li onClick={handleMenuClick}>
              <span>Contact</span>
          </li>
      </ul>
    );

}

function handleScroll(){
    const sections= document.querySelectorAll('.anchor');
    const lis= document.querySelectorAll('.Menu>li');
    Array.from(sections).forEach((section,i)=>{

        isInViewport(section,()=>{
            Array.from(lis).forEach((li,n)=>{
                if(n===i){
                    li.classList="in_view";
                }else{
                    li.classList="";
                }
            });
        });
    })
    const top = document.querySelector('.Top');
    if(top.getBoundingClientRect().top<50){
        Array.from(lis).forEach((li,n)=>{
            setTimeout(()=>{
                li.style.transform='scale(1)';
            },n*100);
        });
    }else{
        Array.from(lis).forEach((li,n)=>{
            setTimeout(()=>{
                li.style.transform='scale(0)';
            },n*100);
        });
    }

}
function handleMenuClick(e){
    const sections= document.querySelectorAll('.anchor');
    const lis= document.querySelectorAll('.Menu>li');
    Array.from(lis).forEach((li,n)=>{
        if(li === e.target.closest('li')){
            sections[n].scrollIntoView({ behavior: 'smooth', block: 'start' });

        }else{
            li.classList="";
        }
    });
}

function isInViewport(el,callback){
   const rect = el.getBoundingClientRect();
   const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
   const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

   const vertInView = (rect.top+windowHeight/2 <= windowHeight) && ((rect.top + rect.height) >= 0);
   const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

   if(vertInView && horInView){
       callback();
   }
   return;
};

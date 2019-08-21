
export const drawBall=(ctx,obj,color)=>{
    let {x,y,r}=obj;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
    ctx.closePath();
}
export const drawPaddle=(ctx,obj,color)=>{
    let{x,y,width,height}=obj;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.stroke();
    ctx.fillStyle=color;
    ctx.fill();
    roundRect(ctx,x,y,width,height,3,true);
    ctx.closePath();
}
export const drawRec=(ctx,x,y,width,height,color)=>{
    ctx.beginPath();
    // ctx.fillStyle=color;
    // ctx.fill();
    ctx.strokeStyle=color;
    ctx.stroke();
    roundRect(ctx, x, y, width, height, 6);
    ctx.closePath();
}



function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
}

export const isArrayInArray=(arr, item)=>{
   item = JSON.stringify(item);
   return arr.some(el=>JSON.stringify(el) === item);

}

export const randomInteger=(min,max)=>{
    if(min===max){
        return min;
    }
    return  Math.round(min - 0.5 +(Math.random() * (max - min + 1)));
}

export const isElementInViewport=(el)=> {

    const rect = el.getBoundingClientRect();

    return (rect.top >= -(0.2*window.innerHeight || 0.2*document.documentElement.clientHeight) && rect.left >= 0 && rect.bottom <= (1.2*window.innerHeight || 1.2*document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth) );
}

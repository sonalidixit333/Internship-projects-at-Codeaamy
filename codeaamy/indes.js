const canvas=document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;

let particleArray=[];
const colors=[
    'white',
    'rgba(255, 0, 0, 0.25)',
    'rgba(255, 0, 0, 0.55)',
    'rgba(207, 0, 0, 0.8)'
    

];
const maxSize=40;
const minSize=0;
const mouseRadius=60;

let mouse={
    x:null,
    y:null

};
window.addEventListener('mousemove' ,
    function(event){
        mouse.x =  event.x;
        mouse.y = event.y;
        //console.log(mouse);
    }
);
setInterval(function(){
    mouse.x= undefined;
    mouse.y=undefined;
},200);

 function Particle(x,y,directionX,directionY ,size ,colour){
     this.x=x;
     this.y=y;
    this.directionX=directionX;
    this.directionY=directionY;
    this.size=size;
    this.colour=colour;
 }
 Particle.prototype.draw=function(){
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
     ctx.filStyle = this.colour;
     ctx.fill();
 }

 Particle.prototype.update= function(){
     if(this.x + this.size*2 >canvas.width || 
        this.x-this.size*2<0){
            this.directionX = -this.directionX;

    }
    if(this.y + this.size*2 >canvas.height || 
        this.y-this.size*2<0){
        this.directionY = -this.directionY;
    
    }

    this.x += this.directionX;
    this.y += this.directionY;
    
    if(mouse.x - this.x < mouseRadius && mouse.x -this.x > -mouseRadius
        && mouse.y - this.y <mouseRadius && mouse.y -this.y >- mouseRadius){
            if(this.size<maxSize){
                this.size +=3;
            }
        } else if(this.size >minSize){
                this.size -=0.1;
            }
             if(this.size <0){
                this.size=0;
            }
            this.draw();
        }
 

 function init(){
     particleArray =[];
     for(let i=0; i<100;i++){
         let size=0;
         let x=(Math.random() * ((innerWidth -size*2)-(size*2))
         + size*2);
         let y=(Math.random() * ((innerHeight -size*2)-(size*2))
         + size*2);
         let directionX =(Math.random() * .2) -.1;
         let directionY = (Math.random()* .2) -.1;
         let colour= colors[Math.floor(Math.random() * colors.length-1)];
       
        
            particleArray.push(new Particle(x,y, directionX,
                directionY ,size ,colour));
     }
 }
 function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for(let i=0;i< particleArray.length;i++){
        particleArray[i].update();
        // particleArray[i].draw();
    }
    // requestAnimationFrame(animate);
 }
 init();
 animate();

 window.addEventListener('resize',
    function(){
        canvas.width=innerWidth;
        canvas.height=this.innerHeight;
    })


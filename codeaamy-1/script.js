const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('open')
})


const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

let mouse = {
  x: null,
  y: null,
  radius: (canvas.width/80) * (canvas.height/80),

}
window.addEventListener('mousemove',
  function(event){
    mouse.x = event.x;
    mouse.y = event.y;
  }
);
//create Particle
class Particle{
    constructor(x, y, directionX, directionY, size, color){
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle ='#fff';
      ctx.fill();
    }
    //check particle position,mouse position
    update(){
      if(this.x > canvas.width || this.x < 0){
        this.directionX = -this.directionX;
      }
      if(this.y > canvas.width || this.y < 0){
        this.directionY = -this.directionY;
      }
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx*dx +dy*dy);

      if(distance < mouse.radius + this.size){
        if(mouse.x < this.x && this.x < canvas.width - this.size*10){
          this.x += 10;
        }
        if(mouse.x > this.x && this.x >this.size*10){
          this.x -= 10;
        }
        if(mouse.y < this.y && this.y < canvas.width - this.size*10){
          this.y += 10;
        }
        if(mouse.y > this.y && this.y >this.size*10){
          this.y -= 10;
        }

      }
      this.x += this.directionX;
      this.x += this.directionY;
      this.draw();
    }
}
//create parrticle array
 function init(){
   particlesArray = [];
   let noOfParticles = (canvas.height * canvas.width)/9000;
   for(let i=0; i<noOfParticles ;i++){
     let size = (Math.random() * 5)+1;
     let x = (Math.random() * ((innerWidth - size * 2)- (size *2)) + size * 2);
     let y = (Math.random() * ((innerHeight - size * 2)- (size *2)) + size * 2);
     let directionX = (Math.random() * 5)  - 2.5;
     let directionY = (Math.random() * 5)  - 2.5;
     let color="#fff";

     particlesArray.push(new Particle(x, y, directionX, directionY, size, color));

   }
 }

 function connect(){
   let opacityValue = 1;
  for(let i=0; i<particlesArray.length; i++){
    for(let j=i; j<particlesArray.length;j++){
      let distance = ((particlesArray[i].x -particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x)) +
      ((particlesArray[i].y -particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y));
      if(distance< (canvas.width/7) * (canvas.height/7)){
        opacityValue = 1 - (distance/20000);
       
        ctx.strokeStyle='rgba(255,250,250,' + opacityValue + ')';
        ctx.lineWidth=1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x , particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

 function animate(){
   requestAnimationFrame(animate);
   ctx.clearRect(0, 0, innerWidth, innerHeight);

   for(let i=0; i<particlesArray.length ;i++){
     particlesArray[i].update();
   }
   
   connect();
  
 }
addEventListener('resize',
  function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80) * (canvas.width/80));
    init();
  }
);

window.addEventListener('mouseout',
function () {
  mouse.x =  undefined;
  mouse.y = undefined;
  
})
init();
 animate();

 
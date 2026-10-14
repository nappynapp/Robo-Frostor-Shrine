let particles=[]
let phrases=["System.Robo: Hel...lo", "System.Robo: Die.", "System.Robo: Eat your broccolies.", "System.Robo: 맹꽁.", "System.Robo: 많이 좋아합니다.", "알아서 살라."]
let imgR, imgL, imgS

async function setup() {
  createCanvas(windowWidth, windowHeight);

  [imgR, imgL, imgS]= await Promise.all([
    loadImage ('images/runR.gif'),
    loadImage ('images/runL.gif'),
    loadImage ('images/standing.gif')
    ]
  )
  
  let numParticles=20
  textSize(25)
  fill(177,252,0)
  phrase=random(phrases)

  for (let i=0; i<numParticles;i++){
    let creature=new Creature()
    particles.push(creature)
  }
  
}

function draw() {
  background(16,22,34);

  mousePos = createVector(mouseX, mouseY)
  text('click on the guys!', 30, windowHeight-50)
  
  
  for (let i=0; i<particles.length;i++){
    particles[i].update()
    particles[i].hover()
    particles[i].show()
  }
}


// function mouseMoved() {
//   let mousePos = createVector(mouseX, mouseY)
//   for (let i=0; i<particles.length;i++) {
//     particles[i].hover()
//   } 
// }

function mousePressed() {
  for (let i=0; i<particles.length;i++) {
    particles[i].click()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

class Creature {

  
  constructor() {
    this.position=createVector(random(width), random(height))
    this.velocity=createVector((random(-2,2)), (random(-2,2)))
    this.size=70
    this.hovered = false;

    
    if(this.velocity.x > 0) {
      this.img = imgR
    } else {
      this.img = imgL
    }
  }

  hover() {
    let d = p5.Vector.dist(mousePos, this.position)
    if(d < this.size) {
      // this.velocity.mult(0)
      
      this.hovered = true;
    } else {
      this.hovered = false;
    }
    // else {
    //   this.velocity=createVector((random(-2,2)), (random(-2,2)))
    //   if(this.velocity.x>0){
    //     this.img=imgR
    //   } else {
    //     this.img=imgL
    //   }
    // }
  }
  
  click() {
    let d = p5.Vector.dist(mousePos, this.position)
    if(d < this.size/2) {
      phrase=random(phrases)
    }
  }

  update() {

    if(this.hovered == true) {
      //
      this.img = imgS
      text(phrase, width/50, height/15)
    } else {
      this.position.add(this.velocity)
      // ? is the "ternary" operator
      this.velocity.x < 0 ? this.img = imgL : this.img = imgR
    }
    
    //this.position.add(this.velocity)

    // right
    if(this.position.x > width-this.size/2){
      this.position.x = width-this.size/2
      this.velocity.x*=-1
      this.img=imgL
    }

    // left
    if(this.position.x < this.size/2){
      this.position.x = this.size/2
      this.velocity.x*=-1
      this.img=imgR
    }

    // top
    if(this.position.y<this.size/2){
      this.position.y = this.size/2
      this.velocity.y*=-1
    }

    // bottom
    if(this.position.y > height-this.size/2){
      this.position.y = height - this.size/2
      this.velocity.y*=-1
    }
  }

  show() {
    imageMode(CENTER)

    // if (this.velocity.x < 0){
    //   //console.log(this.velocity.x)
    //   this.img = img2
    // }
    
    image(this.img, this.position.x, this.position.y, this.size, this.size)

    
      //image(img2, this.position.x, this.position.y, this.size, this.size)
    // } else if (this.velocity.x==0){
    //   this.img = img3
    //   //image(img3, this.position.x, this.position.y, this.size, this.size)
    // }
  }
}
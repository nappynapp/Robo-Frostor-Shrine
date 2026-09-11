function setup() {
    createCanvas(400, 400);
  }
  
  
  function draw() {
    background(220);
    
    let numLines=10
    let space=width/numLines
  
    for(let i=0; i<6; i=i+1){
      line(i*space+50,50, mouseX, mouseY)
    }
    
  }
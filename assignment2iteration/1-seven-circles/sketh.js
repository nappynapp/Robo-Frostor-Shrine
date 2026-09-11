function setup() {
    createCanvas(400, 400);
  }
  
  let size=40
  
  function draw() {
    background(220);
    for(let i=0; i<7; i=i+1){
      // loop body
      fill(i*35,0,255)
      circle(i*size, size/2, size)
    }
  }
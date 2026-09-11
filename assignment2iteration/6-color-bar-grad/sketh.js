function setup() {
    createCanvas(400, 400);
  
    let numRects=10
    let size=(width/numRects)
  
    for(let x=0; x<10; x=x+1) {
      fill(x*35,0,255)
      rect(x*40,0,size,height)
    }
  }
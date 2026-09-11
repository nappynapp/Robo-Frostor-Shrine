function setup() {
    createCanvas(400, 400);
  
    let numRect=10
    let size=int(width/numRect)
    let ht=40
  
    for(let x=0; x<width; x=x+size) {
      rect(x,0,size,ht)
      ht=ht+20
    }
    
  }
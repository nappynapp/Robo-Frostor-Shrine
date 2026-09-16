function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    let gridSize=10 //columns and rows
    let squareSize=width/gridSize
    let spacing=squareSize/2
  
    for(let y=0; y<height; y=y+squareSize){
      for(let x=0; x<width; x=x+squareSize){
  
        if (x/squareSize%2==0) {
        fill(0)
      } else {
        fill(255)
      }
        
        rect(x,y,squareSize)
        // add "+ (spacing * x or y / circleSize)" to space out circles
      }
    }
  }
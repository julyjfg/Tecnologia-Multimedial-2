let quadTree;
let okEncotro=false;
function setup() {
  createCanvas(400, 400);

  let limite = new Rectangulo(200,200,200,200);
  quadTree = new Quadtree(limite,4);
  console.log(quadTree);

  for (let i=0; i<300;i++){
    let p = new Punto(random(width), random(height));
    quadTree.insertar(p);
  }

}

function draw() {
  background(150);
  quadTree.mostrar();

  stroke(0,255,0);
  rectMode(CENTER);
  let rango= new Rectangulo(mouseX,mouseY,25,25);

  if(mouseX<width && mouseY<height){
    rect(rango.x,rango.y,rango.ancho*2,rango.alto*2);
    let puntos=quadTree.consulta(rango);/* let puntos=[]
                                          quadTree.consulta(rango,puntos);*/ 
    for(let p of puntos){
      strokeWeight(4);
      point(p.x,p.y);
    }
    
  }
  
}


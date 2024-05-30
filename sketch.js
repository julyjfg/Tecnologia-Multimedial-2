let quadTree;
let puntos=[];
function setup() {
  createCanvas(400, 400);

  let limite = new Rectangulo(200,200,200,height);
  quadTree = new Quadtree(limite,4);
  colores=new Colores();
  console.log(quadTree);

  for (let i=0; i<200;i++){
    puntos.push( new Punto(random(width), random(height)));
    quadTree.insertar(puntos[i]);
  }

}

function draw() {
  background(255);

  quadTree.actualizar();
  
  quadTree.mostrar();

}

function mouseMoved(){
  for(let p of puntos){
    p.mover();
  }
  //quadTree.mouseMoved();
}
function mousePressed(){
  puntos.splice();
  quadTree.mousePressed();
  for (let i=0; i<200;i++){
    puntos.push( new Punto(random(width), random(height)));
    quadTree.insertar(puntos[i]);
  }
  quadTree.mostrar();
}

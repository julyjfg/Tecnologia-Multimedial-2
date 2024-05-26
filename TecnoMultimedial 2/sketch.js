let ql
function setup() {
  createCanvas(400, 400);

  let limite = new Rectangulo(200,200,200,200);
  qt = new Quadtree(limite,4);
  console.log(qt);

  for (let i=0; i<1000;i++){
    let p = new Punto(random(width), random(height));
    qt.insertar(p);
  }

}

function draw() {
  background(150);
  qt.mostrar();
}


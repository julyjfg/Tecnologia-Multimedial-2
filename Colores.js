class Colores{
constructor(){
    this.valores=[];
    this.r;
    this.g;
    this.b;
    for(let i;i<1000;i++){
        this.r = int(random(0,230));
        this.g = int(random(0,250));
        this.b = int(random(0,190));
    this.valores.push(color(this.r,this.g,this.b));
    }
}
pintar(){
    let i=random(1000);
    return this.valor[i];
}
    mouseMoved(){
        this.r = map(mouseX, 0, width, this.r, 255);
        this.g = map(mouseY, 0, height, this.g,  255);
        this.b = map(mouseX + mouseY, 0, width + height, this.b, 255);
    }
}

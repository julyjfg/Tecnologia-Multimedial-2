class Rectangulo{
    constructor(x,y,ancho,alto){
        this.x=x;
        this.y=y;
        this.ancho=ancho;
        this.alto=alto;
    }
    contiene(punto){
        return(punto.x>this.x-this.ancho &&
            punto.x<=this.x+this.ancho&&
            punto.y>=this.y-this.alto &&
            punto.y<=this.y+this.alto)
    }
}
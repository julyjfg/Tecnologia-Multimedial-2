class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    moverEnX(){
        if(mouseX<width){
            this.x--;
        }else{
            this.x++;
        }
    }
    moverEnY(){
        if(mouseX<height){
            this.y--;
        }else{
            this.y++;
        }
    }
}
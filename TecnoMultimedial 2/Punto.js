class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    mover() {
            this.y += (mouseY - pmouseY) * -1;
            this.x += (mouseX - pmouseX) * -1;
        
        
        // Reposicionar el punto si llega a los extremos de la pantalla
        this.limites();
    }

    // Método para reposicionar el punto si llega a los extremos
    limites() {
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.x = random(0,width);
            this.y = random(0,height);
        }
    }
}
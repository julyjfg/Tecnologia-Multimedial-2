class Quadtree{
    constructor(limite,n){
        this.limite=limite;
        this.capacidad=n;
        this.puntos=[];
        this.dividir= false;
    }
    subdividir(){
        let x=this.limite.x;
        let y= this.limite.y;
        let w= this.limite.ancho;
        let h=this.limite.alto;


       let ne= new Rectangulo(x + w/2, y - h/2, w/2, h/2);
       this.noreste= new Quadtree(ne,this.capacidad);
       let nw= new Rectangulo(x - w/2, y - h/2, w/2, h/2);
       this.noroeste= new Quadtree(nw,this.capacidad);
       let se= new Rectangulo(x + w/2, y + h/2, w/2, h/2);
       this.sureste= new Quadtree(se,this.capacidad);
       let sw= new Rectangulo(x - w/2, y + h/2, w/2, h/2);
       this.suroeste= new Quadtree(sw,this.capacidad);
       this.dividir=true; 
    }
    insertar(punto){
        if(!this.limite.contiene(punto)){
            return false;
        }

        if(this.puntos.length<this.capacidad){
            this.puntos.push(punto);
            return true;
        } else{
            if(!this.dividir){
            this.subdividir();
            }
            if (this.noreste.insertar(punto)){
                return true;
            }else if (this.noroeste.insertar(punto)){
                return true;
            }else if(this.sureste.insertar(punto)){
                return true;
            }else if(this.suroeste.insertar(punto)){
                return true;
            }
        }

    }
      consulta(rango,encotro){
        if(!encotro){
            encotro=[];
        }
        if(!this.limite.seCruza(rango)){
            return;//arreglo vacio.
        } else {
            for(let p of this.puntos){
                if(rango.contiene(p)){
                    p.moverEnX()
                }
            }
        }
        if(this.dividir){
          this.noroeste.consulta(rango,encotro);
           this.noreste.consulta(rango,encotro);
           this.suroeste.consulta(rango,encotro);
           this.sureste.consulta(rango,encotro);
        }
        return encotro;
    }
    mostrar(){
        stroke(225);
        strokeWeight(1);
        noFill();
        rectMode(CENTER);
        rect(this.limite.x,this.limite.y,this.limite.ancho*2,this.limite.alto*2);
        if(this.dividir){
            this.noreste.mostrar();
            this.noroeste.mostrar();
            this.sureste.mostrar();
            this.suroeste.mostrar();
        }
        for (let p of this.puntos){
            strokeWeight(4);
            point(p.x,p.y);
        }

    }
}
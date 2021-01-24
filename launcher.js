class Polygon{
    constructor(x,y,width,height){

        var op={
            isStatic:false,
            friction:10
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        this.image=loadImage("polygon.png");
        World.add(myWorld,this.body);   
    }
     
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}

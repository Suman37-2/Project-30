class Block{
    constructor(x,y,width,height){

        var op={
            isStatic:false,
            friction:10
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        this.visiblity=255;
        World.add(myWorld,this.body);   
    }
     
    display(){
        if(this.body.speed<3){
            var pos=this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
        }
        else{
         World.remove(myWorld,this.body);  
         push();
         this.visiblity=this.visiblity-5;
         tint(255,this.visiblity);
         pop();
        
        
    }
}}

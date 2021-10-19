class Box{
    constructor(x,y,width,height){
        var redBox_options ={
            isStatic: true,
        }
    this.width = width;
    this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,redBox_options);
        World.add(myworld,this.body);
    }

    display(){
       
        var pos = this.body.position
      
        var angle = this.body.angle;
     push ();
        rectMode(CENTER);
       translate(pos.x,pos.y);
     rotate(angle);
    fill("red")
       
        rect(0,0,this.width,this.height);
        pop ();
 }
    
    
}
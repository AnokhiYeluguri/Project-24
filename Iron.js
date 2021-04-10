class Iron {
    constructor(x,y,width,height){
        var ironoptions={
            restitution:0.8,
            friction:3,
            density:30
           }
          this.ironbody = Bodies.rectangle(x,y,width,height,ironoptions)
          World.add(world,this.ironbody)
          this.width = width
          this.height = height
    }
    display(){
        var pos = this.ironbody.position
        var angle = this.ironbody.angle
         push()
        translate(pos.x,pos.y)
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(3)
        stroke("RosyBrown")
        fill("Silver")
        rect(0,0,this.width,this.height)
         pop()
    }

}
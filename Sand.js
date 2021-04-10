class Sand{
	constructor(x,y,r)
	{ 
	var options = {
        friction:0.3,
        density:1.0
      } 

		this.x=x;
		this.y=y;
		this.r=r 
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var sandpos=this.body.position;		
			push()
			translate(sandpos.x, sandpos.y);
			rectMode(CENTER)
            strokeWeight(3)
            stroke("orange")
			fill("DarkGoldenRod");
	
			ellipse(0,0,this.r,this.r)

			pop()
	}

}
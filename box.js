class Box
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=130;
		this.dustbinHeight=185;
		this.wallThickness=20;
		//this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		//Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		//Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

		this.image = loadImage("dustbingren.png");
	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("green")
			
			rotate(this.angle)
            rect(0,0,this.wallThickness, this.dustbinHeight);
            
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			
			angleMode(RADIANS)
            fill("green")
          //  stroke("red")
			rotate(-1*this.angle)
            rect(0,0,this.wallThickness, this.dustbinHeight);
           // rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			imageMode(CENTER);
            image(this.image,0,0,100,100);
		
			angleMode(RADIANS)
            fill("gold")
            //stroke("red")
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}
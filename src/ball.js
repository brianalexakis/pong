import * as PIXI from 'pixi.js'
import Entity from './entity'
import Settings from './settings'

class Ball extends Entity {
	constructor( app ){
		super(app)
		this.app = app
		// this.g.x = ( this.app.screen.width / 2 ) - Settings.Ball.Radius;
		// this.g.y = ( this.app.screen.height / 2 ) - Settings.Ball.Radius;

		//- set inital coords
		this.g.x = 0
		this.g.y = 0
		this.dx  = 1
		this.dy  = 1 		
		this.reset()

		this.draw()

		this.paddles = {left:null,right:null};

		//- used to pass event when a score occurs
		this.scoreCallback = null
	}

	reset(){
		this.g.x = this.app.screen.width/2
		this.g.y = this.app.screen.height/2
		this.dx  *= -1
		this.dy  *= -1
	}

	setScoreCallback(callback){
		this.scoreCallback = callback
	}

	setLeftPaddle(paddle){
		this.paddles.left = paddle
	}

	setRightPaddle(paddle){
		this.paddles.right = paddle
	}


	draw() {
		this.g.clear()
		this.g.beginFill( Settings.Ball.Color )

		//- here, 0,0 is the center coordinate of the circle
		this.g.drawCircle(0, 0, Settings.Ball.Radius)
		this.g.endFill()	
	}

	update() {	

		//- potential new location of ball
		let nx 		= this.g.x + (this.dx*Settings.Ball.Speed)
		let ny 		= this.g.y + (this.dy*Settings.Ball.Speed)
		let rppos 	= this.paddles.right.getPosition()							
		let lppos 	= this.paddles.left.getPosition()
		
		let stage_bounds = {
			left 	: 0,
			top		: 0,
			right 	: this.app.screen.width,
			bottom 	: this.app.screen.height
		}

		//- first see if the ball has collided with the stage bounds
		if ( ny - Settings.Ball.Radius < stage_bounds.top 	 || 
			 ny + Settings.Ball.Radius > stage_bounds.bottom ){
			this.dy *= -1
		}

		if ( nx + Settings.Ball.Radius > stage_bounds.right ) {
			//- score! ball hit right edge, award point to left player
			this.scoreCallback(this.paddles.left)

		}
		if ( nx - Settings.Ball.Radius < stage_bounds.left ) {
			//- score! ball hit right edge, award point to left player
			this.scoreCallback(this.paddles.right)
		}

		//- check if collision with player paddle
		//- front edge
		if ( ny + Settings.Ball.Radius > lppos.y && ny < lppos.y + lppos.height &&
		     nx - Settings.Ball.Radius < lppos.x + lppos.width ){
			//- snap ball to edge
			this.g.x = lppos.x + lppos.width + Settings.Ball.Radius
			this.dx *= -1
		}

		//- top edge

			
		//- check if collision with right paddle
		//- front edge
		if ( ny + Settings.Ball.Radius > rppos.y && ny < rppos.y + rppos.height &&
		     nx + Settings.Ball.Radius > rppos.x ){
			//- snap ball to edge
			this.g.x = rppos.x - Settings.Ball.Radius
			this.dx *= -1
		}

		//- move the ball
		this.g.x += this.dx * Settings.Ball.Speed
		this.g.y += this.dy	* Settings.Ball.Speed	
		
	}


}

export default Ball
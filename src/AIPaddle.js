import * as PIXI from 'pixi.js'
import Settings from './settings'
import Paddle from './paddle'
import Ball from './ball'

class AIPaddle extends Paddle{
	constructor(app){
		//- call constructor of Paddle
		super(app)

		this.app 	= app		
		this.g.x 	= this.app.screen.width - Settings.Paddle.Width - 50
		this.g.y    = (this.app.screen.height/2) - (Settings.Paddle.Height/2)
		this.g.y    = 0

		this.ball 	= null

		super.scorePosition( this.app.screen.width/2 + 100, this.app.screen.height/2 )		

		//- draw the paddle now that the coordinates have been set
		this.draw()	
	}

	setBall(ball){
		this.ball = ball
	}

	update(){
		this.move()
	}

	move(){
		let ny = this.g.y

		if ( this.g.y > this.ball.g.y )
			ny -= Settings.AI.Speed

		if ( this.g.y < this.ball.g.y )
			ny += Settings.AI.Speed

		if ( ny + this.g.height > this.app.screen.height )
			this.g.y = this.app.screen.height - this.g.height
		else if ( ny < 0 )
			this.g.y = 0
		else
			this.g.y = ny
		
	}
}

export default AIPaddle
import * as PIXI from 'pixi.js'
import Settings from './settings.js'
import Paddle from './paddle.js'

class PlayerPaddle extends Paddle{
	constructor(app){
		//- call constructor of Paddle
		super(app)		

		//- set x position of graphics object 
		this.g.x = 50
		this.draw()

		//- create a local copy of app
		this.app = app

		//- bind mouse move event 
		this.app.view.addEventListener('mousemove', e => {this.mouseMoveEvent(e)} )		

		//- set score count
		super.scorePosition( this.app.screen.width/2 - 100, this.app.screen.height/2 )
	}

	//- event listener for mouse move
	mouseMoveEvent(e){
		let ny = e.clientY

		//- does bottom of paddle extend past the bottom of the screen?
		if ( ny + Settings.Paddle.Height < this.app.screen.height ){
			this.g.y = e.clientY
		}
	}

}

export default PlayerPaddle
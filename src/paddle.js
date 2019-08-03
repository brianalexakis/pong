import * as PIXI from 'pixi.js'
import Entity from './entity'
import Settings from './settings.js'


class Paddle extends Entity {
	constructor( app ){
		super(app)	

		this.score_count = 0

		//- setup score text
		const style = new PIXI.TextStyle({
		    fontFamily: 'Arial',
		    fontSize: 36,
		    fontWeight: 'bold',
		    fill: [Settings.Colors.SoftGray],
		    stroke: '#4a1850',
		});				
		this.score_text = new PIXI.Text(this.score_count, style)		
	}		

	scorePosition(x,y){
		this.score_text.x = x
		this.score_text.y = y
		this.app.stage.addChild(this.score_text)
	}

	score(){
		this.score_count++
		this.score_text.text = this.score_count

	}

	draw(){
		//- draw paddle		
		this.g.beginFill( Settings.Paddle.Color )
		this.g.drawRect(0, 0, Settings.Paddle.Width, Settings.Paddle.Height)
		this.g.endFill()	
	}

	getPosition(){
		return {
			'x'			: 	this.g.x, 
			'y'			: 	this.g.y, 
			'width'		: 	Settings.Paddle.Width, 
			'height'	: 	Settings.Paddle.Height
		}
	}
}

export default Paddle;
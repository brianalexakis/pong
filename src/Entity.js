
import * as PIXI from 'pixi.js'
import Settings from './settings'


class Entity{
	constructor(app){
		this.app 	= app

		//- coordinates
		this.x 		= 0
		this.y 		= 0		

		//- default color
		this.color  = Settings.Colors.SoftGray

		//- create graphics container for drawing into
		this.g 		= new PIXI.Graphics()
	}

	getGraphics(){
		return this.g
	}	
		
	score(){
		
	}

	draw(){				

	}

	update(){

	}
}


export default Entity
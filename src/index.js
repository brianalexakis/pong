import * as PIXI from 'pixi.js'
import Settings from './settings'
import css from './styles.css'
import PlayerPaddle from './PlayerPaddle'
import AIPaddle from './AIPaddle'
import Ball from './ball'

//- create PIXI App and attach to HTML
const app = new PIXI.Application({ 
    backgroundColor     : 0x282923,
    resizeTo            : window
})
document.body.appendChild(app.view)

//- draw line through middle
let line = new PIXI.Graphics()
line.beginFill( Settings.Paddle.Color )
line.drawRect(app.screen.width/2, 0, 2, app.screen.width )
line.endFill()
app.stage.addChild(line)

//- create player paddle
let p    = new PlayerPaddle( app )
let p_ai = new AIPaddle( app )



//- add paddles to the stage
app.stage.addChild( p.getGraphics() )
app.stage.addChild( p_ai.getGraphics() )

//- create the ball
let ball = new Ball( app )
ball.setLeftPaddle(p)
ball.setRightPaddle(p_ai)
ball.setScoreCallback(score)
app.stage.addChild( ball.getGraphics() )

//- let the ai paddle follow the ball around
p_ai.setBall(ball)


//- setup game loop timer
app.ticker.speed = Settings.Game.TickSpeed
app.ticker.deltaTime = Settings.Game.TickSpeed

//- game loop
app.ticker.add( () =>{
    ball.update()
    p_ai.update()
}) 

//- score event, reset state
function score(paddle){   
	paddle.score()    

	//- reset ball
	ball.reset()
}





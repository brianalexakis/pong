class Settings {
	constructor(){

		this.Game   = {
			TickSpeed : 2
		}

		this.Colors = {
			SoftGray : 0xEBEDEF
		}

		this.Paddle = {
			Width	: 	20,
			Height  : 	150,
			Color 	: 	this.Colors.SoftGray
		}

		this.Ball = {
			Radius 	: 	10,
			Color 	:   this.Colors.SoftGray,
			Speed   :   3 //- TODO don't tie pixel movement to speed. use frame tick rate
		}

		this.AI = {
			Speed   :   2 //- higher speed, more impossible to play against
		}
	}
}

export default (new Settings)
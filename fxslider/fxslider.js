class FXSlider {

	constructor( element = "#slider", slider = {} ){
		this.element = document.querySelector(element);

		// load global plugins first.
		var plugins = slider.config.plugins;
		for (var plugin of plugins){
			import * from plugin;
		}		
	}

	test(){

	}



}

export default FXSlider;
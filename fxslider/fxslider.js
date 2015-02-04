class FXSlide {
    constructor(){
        this.layers = [];
    }
    
    addLayer(layer){
        console.log(layer);
    }
}

class FXSlider {

	constructor( element = "#slider", slider = {} ){
		this.element = document.querySelector(element);
        this.pluginList = new Set();
        this.slides = [];
        this.theme = slider.config.theme || "fxdefault";
        
		// load global plugins first and initialize them.
		var plugins = slider.config.plugins;
		for (var plugin of plugins){
            var pluginInstance = (new plugin(this));
		    this.pluginList.add( pluginInstance );
		}
        
        // parse config with default parser first:
        
        
        // parse slide config
        var slides = slider.slides || [];
        for (var slide of slides){
            var fxSlide = new FXSlide();
            
            var layers = slide.layers;
            for (var layer of layers){
                fxSlide.addLayer(layer);
            }
            
            this.triggerParseSlide(slide, (newSlide) => {
                console.log(newSlide);
            });
        }
        
    
        
	}

	test(){

	}



}

export default FXSlider;
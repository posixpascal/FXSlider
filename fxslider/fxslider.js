class FXSlide {
    constructor(){
        this.layers = [];
    }
    
    addLayer(layer){
        console.log(layer);
    }
}

class FXCSS {
    contructor(){
    }
    
    static addClass(element, cssClass){
        element.className += ` ${cssClass}`
    }
    
    static removeClass(element, cssClass){
        element.className = element.className.replace(new RegExp(`(?:^|\s)${cssClass}(?!\S)/`, 'g'), '');
    }
    
    static hasClass(element, cssClass){
        return (element.className.match(new RegExp(`(?:^|\s)${cssClass}(?!\S)/`, )))
    }

    static toggleClass(element, cssClass){
        if (FXCSS.hasClass(element, cssClass)){
            FXCSS.removeClass(element, cssClass);
        } else {
            FXCSS.addClass(element, cssClass);
        }
    }
    
    static applyCSS(element, styleSheet){

    }
}

class FXSlider {

	constructor( element = "#slider", slider = {} ){
		this.element = document.querySelector(element);
        this.pluginList = new Set();
        this.slides = [];
        this.events = {};
        this.theme = slider.config.theme || "fxdefault";
        
		// load global plugins first and initialize them.
		var plugins = slider.config.plugins;
		for (var plugin of plugins){
            var pluginInstance = (new plugin(this));
		    this.pluginList.add( pluginInstance );
		}
        
        this.config = slider.config;
        
        this.beforeInit();
        this.init();
        this.afterInit();   
	}
    
    beforeInit(){};
    
    init(){
        var height = this.config.height || [];
        var width = this.config.width || [];
        
        FXCSS.applyCSS(this.element, `height: ${height}px; width: ${width}px;`);
        FXCSS.addClass(this.element, `fx-slider`);
        FXCSS.addClass(this.element, `fx-theme-${this.theme}`);
        
        this.preparePlugins();
        
    };
    
    
    preparePlugins(){
        for (var plugin of this.pluginList){
            if (typeof plugin.prepare !== "undefined"){
                plugin.prepare(this);
            }
        }
    }
    
	afterInit(){};



}

export default FXSlider;
class FXPlugin {
	constructor(){
	    
    }
    
    onParseSlide(slide, next){
        next(slide);
    }
    
}

export default FXPlugin;
import FXPlugin from "../lib/fx.plugin";

class FXTiming extends FXPlugin {
	constructor(){
		super();
	}
    
    onParseSlide(slide, next){
        if (typeof slide.delay !== "undefined"){
            slide.hasDelay = true;
        }
        next(slide);
    }
}
export default FXTiming;
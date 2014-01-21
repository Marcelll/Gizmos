/*
 * This is only a test interactor that isn't implemented. It only shows
 * how to implement a interactor component generally
 */
MTG.Interactors.Interactor_Test = function(){}
MTG.Interactors.Interactor_Test.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.Interactor_Test.prototype.constructor = MTG.Interactors.Interactor_Test;
MTG.Interactors.Interactor_Test.prototype.transformation = function(evt){
    console.log("Test Interactor is not implemented yet");
};

/*
 * This is only a test interactor
 */
MTG.Interactors.Interactor_Test = function(evt){

//    var parameters = {Minimum: 0.0, Maximum: 100.0, Snap: 5.0};
//
//    this.transformation = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < parameters.Maximum) ||
//            (translationDir < 0 && transOld.x > parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= parameters.Minimum + parameters.Snap) {
//                transOld.x = parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= parameters.Maximum - parameters.Snap) {
//                transOld.x = parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };



    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
        var translationDir = this.mousePos.x - evt.layerX;
        if ((translationDir > 0) ||
            (translationDir <= 0)){
            transOld.x += translationDir / 100;
            this.transform.setAttribute("translation", transOld.toString());
        }
        this.mousePos.x = evt.layerX;
    };


//    if (this.parameters.Minimum === undefined) this.parameters.Minimum = 0.0;
//    if (this.parameters.Maximum === undefined) this.parameters.Maximum = 1.0;
//    if (this.parameters.Snap === undefined) this.parameters.Snap = 0.0;
//
//    this.transform = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < this.parameters.Maximum) ||
//            (translationDir < 0 && transOld.x > this.parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= this.parameters.Minimum + this.parameters.Snap) {
//                transOld.x = this.parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= this.parameters.Maximum - this.parameters.Snap) {
//                transOld.x = this.parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };

};

MTG.Interactors.Interactor_Test = function(evt){

//    var parameters = {Minimum: 0.0, Maximum: 100.0, Snap: 5.0};
//
//    this.transformation = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < parameters.Maximum) ||
//            (translationDir < 0 && transOld.x > parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= parameters.Minimum + parameters.Snap) {
//                transOld.x = parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= parameters.Maximum - parameters.Snap) {
//                transOld.x = parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };



//    this.transformation = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        if ((translationDir > 0) ||
//            (translationDir <= 0)){
//            transOld.x += translationDir / 100;
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        this.mousePos.x = evt.layerX;
//    };

    console.log("There's no functionality implemented for this interactor!");

//    if (this.parameters.Minimum === undefined) this.parameters.Minimum = 0.0;
//    if (this.parameters.Maximum === undefined) this.parameters.Maximum = 1.0;
//    if (this.parameters.Snap === undefined) this.parameters.Snap = 0.0;
//
//    this.transform = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < this.parameters.Maximum) ||
//            (translationDir < 0 && transOld.x > this.parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= this.parameters.Minimum + this.parameters.Snap) {
//                transOld.x = this.parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= this.parameters.Maximum - this.parameters.Snap) {
//                transOld.x = this.parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };
};
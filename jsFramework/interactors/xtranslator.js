



/*
 * Translates the visualized gizmo and a selected component in x-direction
 */
Core.Interactors.XTranslator = function(){};
Core.Interactors.XTranslator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.XTranslator.prototype.constructor = Core.Interactors.XTranslator;
Core.Interactors.XTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.x += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
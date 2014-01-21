



/*
 * Translates the visualized gizmo and a selected component in z-direction
 */
Core.Interactors.ZTranslator = function(){};
Core.Interactors.ZTranslator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.ZTranslator.prototype.constructor = Core.Interactors.ZTranslator;
Core.Interactors.ZTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.z += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
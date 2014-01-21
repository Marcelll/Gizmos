



/*
 * Translates the visualized gizmo and a selected component in y-direction
 */
Core.Interactors.YTranslator = function(){};
Core.Interactors.YTranslator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.YTranslator.prototype.constructor = Core.Interactors.YTranslator;
Core.Interactors.YTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.y += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
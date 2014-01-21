



/*
 * Translates the visualized gizmo and a selected component in z-direction
 */
MTG.Core.Interactors.ZTranslator = function(){};
MTG.Core.Interactors.ZTranslator.prototype = new MTG.Core.Interactors.BaseInteractor();
MTG.Core.Interactors.ZTranslator.prototype.constructor = MTG.Core.Interactors.ZTranslator;
MTG.Core.Interactors.ZTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.z += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
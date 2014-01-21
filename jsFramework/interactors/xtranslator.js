



/*
 * Translates the visualized gizmo and a selected component in x-direction
 */
MTG.Core.Interactors.XTranslator = function(){};
MTG.Core.Interactors.XTranslator.prototype = new MTG.Core.Interactors.BaseInteractor();
MTG.Core.Interactors.XTranslator.prototype.constructor = MTG.Core.Interactors.XTranslator;
MTG.Core.Interactors.XTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.x += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
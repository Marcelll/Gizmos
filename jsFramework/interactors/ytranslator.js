



/*
 * Translates the visualized gizmo and a selected component in y-direction
 */
MTG.Interactors.YTranslator = function(){};
MTG.Interactors.YTranslator.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.YTranslator.prototype.constructor = MTG.Interactors.YTranslator;
MTG.Interactors.YTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.y += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
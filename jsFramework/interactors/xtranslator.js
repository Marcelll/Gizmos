



/*
 * Translates the visualized gizmo and a selected component in x-direction
 */
MTG.Interactors.XTranslator = function(){};
MTG.Interactors.XTranslator.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.XTranslator.prototype.constructor = MTG.Interactors.XTranslator;
MTG.Interactors.XTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.x += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
        var elementTransform = document.getElementById("gizmo");
        elementTransform.elementTransform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
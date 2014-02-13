



/*
 * Translates the visualized gizmo and a selected component in z-direction
 */
MTG.Interactors.ZTranslator = function(){};
MTG.Interactors.ZTranslator.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.ZTranslator.prototype.constructor = MTG.Interactors.ZTranslator;
MTG.Interactors.ZTranslator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
    var translationDir = this.mousePos.x - evt.layerX;
    if ((translationDir > 0) ||
        (translationDir <= 0)){
        transOld.z += translationDir / 10;
        this.transform.setAttribute("translation", transOld.toString());
        var elementTransform = document.getElementById("gizmo");
        elementTransform.elementTransform.setAttribute("translation", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
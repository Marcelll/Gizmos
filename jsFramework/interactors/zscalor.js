



/*
 * Scales the visualized gizmo and a selected component in z-direction
 */
MTG.Interactors.ZScalor = function(){};
MTG.Interactors.ZScalor.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.ZScalor.prototype.constructor = MTG.Interactors.ZScalor;
MTG.Interactors.ZScalor.prototype.transformation = function(evt){
    var elementTransform = document.getElementById("gizmo");
    var transOld = x3dom.fields.SFVec3f.parse(elementTransform.elementTransform.getAttribute("scale"));
    var scaleDir = this.mousePos.x - evt.layerX;
    if ((scaleDir > 0) ||
        (scaleDir <= 0)){
        transOld.z += scaleDir / 10;
        elementTransform.elementTransform.setAttribute("scale", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
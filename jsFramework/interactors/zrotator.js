



/*
 * Rotates the visualized gizmo and a selected component around the z-axis
 */
MTG.Interactors.ZRotator = function(){};
MTG.Interactors.ZRotator.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.ZRotator.prototype.constructor = MTG.Interactors.ZRotator;
MTG.Interactors.ZRotator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
    var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
    transOld.x = 0;
    transOld.y = 0;
    transOld.z = 1;
    transOld.w += translationDir;
    this.transform.setAttribute("rotation", transOld.toString());
    var elementTransform = document.getElementById("gizmo");
    elementTransform.elementTransform.setAttribute("rotation", transOld.toString());
    this.mousePos.x = evt.layerX;
};




/*
 * Rotates the visualized gizmo and a selected component around the x-axis
 */
MTG.Interactors.XRotator = function(){};
MTG.Interactors.XRotator.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.XRotator.prototype.constructor = MTG.Interactors.XRotator;
MTG.Interactors.XRotator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
    var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
    transOld.x = 1;
    transOld.y = 0;
    transOld.z = 0;
    transOld.w += translationDir;
    this.transform.setAttribute("rotation", transOld.toString());
    var elementTransform = document.getElementById("gizmo");
    elementTransform.elementTransform.setAttribute("rotation", transOld.toString());
    this.mousePos.x = evt.layerX;
};




/*
 * Rotates the visualized gizmo and a selected component around the y-axis
 */
MTG.Interactors.YRotator = function(){};
MTG.Interactors.YRotator.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.YRotator.prototype.constructor = MTG.Interactors.YRotator;
MTG.Interactors.YRotator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
    var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
    transOld.x = 0;
    transOld.y = 1;
    transOld.z = 0;
    transOld.w += translationDir;
    this.transform.setAttribute("rotation", transOld.toString());
    var elementTransform = document.getElementById("gizmo");
    elementTransform.elementTransform.setAttribute("rotation", transOld.toString());
    this.mousePos.x = evt.layerX;
};
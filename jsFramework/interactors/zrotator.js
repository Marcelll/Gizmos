



/*
 * Rotates the visualized gizmo and a selected component around the z-axis
 */
MTG.Core.Interactors.ZRotator = function(){};
MTG.Core.Interactors.ZRotator.prototype = new MTG.Core.Interactors.BaseInteractor();
MTG.Core.Interactors.ZRotator.prototype.constructor = MTG.Core.Interactors.ZRotator;
MTG.Core.Interactors.ZRotator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
    var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
    transOld.x = 0;
    transOld.y = 0;
    transOld.z = 1;
    transOld.w += translationDir;
    this.transform.setAttribute("rotation", transOld.toString());
    //if (this.parameters.Center !== undefined)
    //    this.transform.setAttribute("center", new x3dom.fields.SFVec3f(this.parameters.Center.x, this.parameters.Center.y, this.parameters.Center.z));
    this.mousePos.x = evt.layerX;
};
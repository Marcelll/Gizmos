



/*
 * Rotates the visualized gizmo and a selected component around the x-axis
 */
MTG.Core.Interactors.XRotator = function(){};
MTG.Core.Interactors.XRotator.prototype = new MTG.Core.Interactors.BaseInteractor();
MTG.Core.Interactors.XRotator.prototype.constructor = MTG.Core.Interactors.XRotator;
MTG.Core.Interactors.XRotator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
    var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
    transOld.x = 1;
    transOld.y = 0;
    transOld.z = 0;
    transOld.w += translationDir;
    this.transform.setAttribute("rotation", transOld.toString());
    //if (this.parameters.Center !== undefined)
    //    this.transform.setAttribute("center", new x3dom.fields.SFVec3f(this.parameters.Center.x, this.parameters.Center.y, this.parameters.Center.z));
    this.mousePos.x = evt.layerX;
};
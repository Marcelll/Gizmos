



/*
 * Rotates the visualized gizmo and a selected component around the y-axis
 */
Core.Interactors.YRotator = function(){};
Core.Interactors.YRotator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.YRotator.prototype.constructor = Core.Interactors.YRotator;
Core.Interactors.YRotator.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
    var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
    transOld.x = 0;
    transOld.y = 1;
    transOld.z = 0;
    transOld.w += translationDir;
    this.transform.setAttribute("rotation", transOld.toString());
    //if (this.parameters.Center !== undefined)
    //    this.transform.setAttribute("center", new x3dom.fields.SFVec3f(this.parameters.Center.x, this.parameters.Center.y, this.parameters.Center.z));
    this.mousePos.x = evt.layerX;
};




/*
 * Scales the visualized gizmo and a selected component in x-direction
 */
MTG.Interactors.XScalor = function(){};
MTG.Interactors.XScalor.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.XScalor.prototype.constructor = MTG.Interactors.XScalor;
MTG.Interactors.XScalor.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("scale"));
    var scaleDir = this.mousePos.x - evt.layerX;
    if ((scaleDir > 0) ||
        (scaleDir <= 0)){
        transOld.x += scaleDir / 10;
        this.transform.setAttribute("scale", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
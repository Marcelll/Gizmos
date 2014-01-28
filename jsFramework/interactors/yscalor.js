



/*
 * Scales the visualized gizmo and a selected component in y-direction
 */
MTG.Interactors.YScalor = function(){};
MTG.Interactors.YScalor.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.YScalor.prototype.constructor = MTG.Interactors.YScalor;
MTG.Interactors.YScalor.prototype.transformation = function(evt){
    var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("scale"));
    var scaleDir = this.mousePos.x - evt.layerX;
    if ((scaleDir > 0) ||
        (scaleDir <= 0)){
        transOld.y += scaleDir / 10;
        this.transform.setAttribute("scale", transOld.toString());
    }
    this.mousePos.x = evt.layerX;
};
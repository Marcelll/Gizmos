/*
 * Super Class of all interactors. Includes all default methods for the 
 * standard interaction and handles the synchronization with the x3dom
 * default interactor
 */

Core.Interactors = {};

Core.Interactors.BaseInteractor = function() {

};

Core.Interactors.BaseInteractor.prototype.Super = function() {
    this.element        = document.getElementById(this.parameters.id);
    this.elementMat     = document.getElementById(this.parameters.id.substr(7, this.parameters.id.length) + "__highlight");
    this.x3d            = document.getElementsByTagName("x3d")[0];
    this.navigation     = document.getElementsByTagName("navigationinfo")[0];
    this.transform      = document.getElementById("gizmo__TRANSFORMATION");
    this.drag           = false;
    this.mousePos       = {x: 0, y: 0};
    this.defaultCol     = this.elementMat.getAttribute("diffuseColor");
    this.highlightCol   = "0 1 1";
    this.interactor     = this;
};

Core.Interactors.BaseInteractor.prototype.AddEventListeners = function() {
    this.element.addEventListener('mousedown', this.elementMouseDown, true);
    this.element.addEventListener('mousemove', this.elementMouseMove, true);
    this.element.addEventListener('mouseup', this.elementMouseUp, true);
    this.element.interactor = this;
    this.x3d.addEventListener('mousemove', this.x3dMouseMove, true);
    this.x3d.addEventListener('mouseup', this.x3dMouseUp, true);
    this.x3d.interactor = this;
    this.navigation.setAttribute("type", "none");
    this.drag = true;
    this.parameters.lock = true;
};

Core.Interactors.BaseInteractor.prototype.RemoveEventListeners = function() {
    this.element.removeEventListener('mousedown', this.elementMouseDown, true);
    this.element.removeEventListener('mousemove', this.elementMouseMove, true);
    this.element.removeEventListener('mouseup', this.elementMouseUp, true);
    this.x3d.removeEventListener('mousemove', this.x3dMouseMove, true);
    this.x3d.removeEventListener('mouseup', this.x3dMouseUp, true);
    this.navigation.setAttribute("type", "examine");
    this.drag = false;
    this.parameters.lock = false;
};

Core.Interactors.BaseInteractor.prototype.elementMouseDown = function(evt) {
    this.interactor.mousePos.x = evt.layerX;
    this.interactor.mousePos.y = evt.layerY;
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.highlightCol);
};

Core.Interactors.BaseInteractor.prototype.elementMouseMove = function(evt) {
    if (evt.button === 1){
        this.interactor.transformation(evt);
    }
};

Core.Interactors.BaseInteractor.prototype.elementMouseUp = function(evt) {
    this.interactor.RemoveEventListeners();
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.defaultCol);
};

Core.Interactors.BaseInteractor.prototype.x3dMouseMove = function(evt) {
    if (evt.button === 0 && this.interactor.drag) {
        this.interactor.transformation(evt);
    }
};

Core.Interactors.BaseInteractor.prototype.x3dMouseUp = function(evt) {
    this.interactor.RemoveEventListeners();
};

Core.Interactors.BaseInteractor.prototype.transformation = function(evt) {
    console.log("The function transformation has to \n\
                     be overwritten for functionality!");
};




Core.Interactors.Interactor_Test = function(){
    //console.log("test");
};
Core.Interactors.Interactor_Test.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.Interactor_Test.prototype.constructor = Core.Interactors.Interactor_Test;

Core.Interactors.Interactor_Test.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};
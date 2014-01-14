/*
 * Super Class of all interactors. Includes all default methods for the 
 * standard interaction and handles the synchronization with the x3dom
 * default interactor
 */

Core.Interactors = {};

Core.Interactors.BaseInteractor = function() {

};

Core.Interactors.BaseInteractor.prototype.Super = function() {
    this.element    = document.getElementById(this.parameters.id);
    this.x3d        = document.getElementsByTagName("x3d")[0];
    this.navigation = document.getElementsByTagName("navigationinfo")[0];
    this.transform  = document.getElementById("gizmo__TRANSFORMATION");
    this.drag       = false;
    this.mousePos   = {x: 0, y: 0}; 
};

Core.Interactors.BaseInteractor.prototype.AddEventListeners = function() {

};

Core.Interactors.BaseInteractor.removeEventListeners = function() {

};

Core.Interactors.BaseInteractor.prototype.elementMouseDown = function(evt) {

};

Core.Interactors.BaseInteractor.prototype.elementMouseMove = function(evt) {

};

Core.Interactors.BaseInteractor.prototype.elementMouseUp = function(evt) {

};

Core.Interactors.BaseInteractor.prototype.x3dMouseMove = function(evt) {

};

Core.Interactors.BaseInteractor.prototype.x3dMouseUp = function(evt) {
    
};

Core.Interactors.BaseInteractor.prototype.transformation = function(evt) {
    console.log("The function transformation has to \n\
                     be overwritten for functionality!");
};




Core.Interactors.Interactor_Test = function(){};
Core.Interactors.Interactor_Test.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.Interactor_Test.prototype.constructor = Core.Interactors.Interactor_Test;

Core.Interactors.Interactor_Test.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};
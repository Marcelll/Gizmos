
// Sub-Namespace Interactors of Core
Core.Interactors = {};



/*
 * Super Class of all interactors. Includes all default methods for the
 * standard interaction and handles the synchronization with the x3dom
 * default interactor
 */
Core.Interactors.BaseInteractor = function() {

};

/*
 * Initializes all interactor components
 */
Core.Interactors.BaseInteractor.prototype.Super = function() {
    this.element        = document.getElementById(this.parameters.id);
    this.elementMat     = document.getElementById(this.parameters.id.substr(7, this.parameters.id.length) + "__highlight");
    this.x3d            = document.getElementsByTagName("x3d")[0];
    this.navigation     = document.getElementsByTagName("navigationinfo")[0];
    this.transform      = document.getElementById("gizmo__TRANSFORMATION");
    this.drag           = false;
    this.mousePos       = {x: 0, y: 0};
    this.defaultCol     = this.elementMat.getAttribute("diffuseColor");
    this.highlightCol   = "1 0.8 0.0";
};

/*
 * Adds all event listeners that are required if an interactor is getting activated
 */
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

/*
 * Removes all event listeners that were required during interaction
 * if the interactor is getting deactivated
 */
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

/*
 * Handling of mousedown-event on element itself
 */
Core.Interactors.BaseInteractor.prototype.elementMouseDown = function(evt) {
    this.interactor.mousePos.x = evt.layerX;
    this.interactor.mousePos.y = evt.layerY;
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.highlightCol);
};

/*
 * Handling of mousemove-event on element itself
 */
Core.Interactors.BaseInteractor.prototype.elementMouseMove = function(evt) {
    if (evt.button === 1){
        this.interactor.transformation(evt);
    }
};

/*
 * Handling of mouseup-event on element itself
 */
Core.Interactors.BaseInteractor.prototype.elementMouseUp = function(evt) {
    this.interactor.RemoveEventListeners();
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.defaultCol);
};

/*
 * Handling of mousemove-event on x3d container
 */
Core.Interactors.BaseInteractor.prototype.x3dMouseMove = function(evt) {
    if (evt.button === 0 && this.interactor.drag) {
        this.interactor.transformation(evt);
    }
};

/*
 * Handling of mouseup-event on x3d container
 */
Core.Interactors.BaseInteractor.prototype.x3dMouseUp = function(evt) {
    this.interactor.RemoveEventListeners();
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.defaultCol);
};

/*
 * Basic transformation method that is executed if nothing is overwritten.
 * This method should be overwritten in every implemented interactor
 */
Core.Interactors.BaseInteractor.prototype.transformation = function(evt) {
    console.log("The function transformation has to \n\
                     be overwritten for functionality!");
};
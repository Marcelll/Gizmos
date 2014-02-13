/*
 * This is only a test interactor that isn't implemented. It only shows
 * how to implement a interactor component generally
 */
MTG.Interactors.Interactor_Test = function(){}
MTG.Interactors.Interactor_Test.prototype = new MTG.Interactors.BaseInteractor();
MTG.Interactors.Interactor_Test.prototype.constructor = MTG.Interactors.Interactor_Test;
MTG.Interactors.Interactor_Test.prototype.transformation = function(evt){
    console.log("Test Interactor is not implemented yet");
};

/*
 * This is only a test interactor
 */
MTG.Interactors.Interactor_Test = function(evt){

    console.log(MTG.Gizmo.TreePositioning.prototype.GetCenterOf(this));
};


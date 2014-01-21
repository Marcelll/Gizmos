
// Currently active interactor
MTG.Core.InteractorHandler.currentInteractor = null;
// List of all registered interactors
MTG.Core.InteractorHandler.interactorList    = [];

/*
 * Adds the passed interactor to the interactor-list and stores it into
 * the variable: Core.InteractorHandler.currentInteractor
 * @param interactor instance of an interactor
 */
MTG.Core.InteractorHandler.interactorList.AddInteractor = function(interactor) {
    MTG.Core.InteractorHandler.interactorList.push(interactor);
    MTG.Core.InteractorHandler.currentInteractor =
        MTG.Core.InteractorHandler.interactorList[MTG.Core.InteractorHandler.interactorList.length - 1];
};

/*
 * Checks if the interactor of the required id already exists
 * @param id id of the element whose interactor should be delivered
 * @returns true if exists, else false
 */
MTG.Core.InteractorHandler.interactorList.Contains = function(id) {
    for (var i = 0; i < MTG.Core.InteractorHandler.interactorList.length; i++){
        if (MTG.Core.InteractorHandler.interactorList[i].parameters.id === id){
            return true;
        }
    }

    return false;
};

/*
 * Returns the interactor of a required id if exists
 * @param id id of the element whose interactor should be delivered
 * @returns interactor if exists, else null
 */
MTG.Core.InteractorHandler.interactorList.GetInteractor = function(id) {
    for (var i = 0; i < MTG.Core.InteractorHandler.interactorList.length; i++){
        if (MTG.Core.InteractorHandler.interactorList[i].parameters.id === id){
            return MTG.Core.InteractorHandler.interactorList[i];
        }
    }

    return null;
};

/*
 * Creates the required interactor for the requested element and activates its functionality
 * @param parameters object that has all parameters of the interactor (id must always be set)
 *        parameters = {id: 'id of element', ...}
 */
MTG.Core.CreateInteractor = function(parameters){
    if (!MTG.Core.InteractorHandler.interactorList.Contains(parameters.id)) {
        var params = {parameters: {id: parameters.id}};
        MTG.Core.InteractorHandler.interactorList.AddInteractor(MTG.Util.ReflectObject(parameters.interactor, params));
        MTG.Core.InteractorHandler.currentInteractor.Super();
    }
    MTG.Core.InteractorHandler.currentInteractor = MTG.Core.InteractorHandler.interactorList.GetInteractor(parameters.id);
    MTG.Core.InteractorHandler.currentInteractor.AddEventListeners();
};
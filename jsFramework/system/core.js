
// Namespace Core
Core                                     = {};
// Sub-Namespace InteractorHandler of Core
Core.InteractorHandler                   = {};
// Currently active interactor
Core.InteractorHandler.currentInteractor = null;
// List of all registered interactors
Core.InteractorHandler.interactorList    = [];

/*
 * Adds the passed interactor to the interactor-list and stores it into
 * the variable: Core.InteractorHandler.currentInteractor
 * @param interactor instance of an interactor
 */
Core.InteractorHandler.interactorList.AddInteractor = function(interactor) {
    Core.InteractorHandler.interactorList.push(interactor);
    Core.InteractorHandler.currentInteractor =
        Core.InteractorHandler.interactorList[Core.InteractorHandler.interactorList.length - 1];
};

/*
 * Checks if the interactor of the required id already exists
 * @param id id of the element whose interactor should be delivered
 * @returns true if exists, else false
 */
Core.InteractorHandler.interactorList.Contains = function(id) {
    for (var i = 0; i < Core.InteractorHandler.interactorList.length; i++){
        if (Core.InteractorHandler.interactorList[i].parameters.id === id){
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
Core.InteractorHandler.interactorList.GetInteractor = function(id) {
    for (var i = 0; i < Core.InteractorHandler.interactorList.length; i++){
        if (Core.InteractorHandler.interactorList[i].parameters.id === id){
            return Core.InteractorHandler.interactorList[i];
        }
    }

    return null;
};

/*
 * Creates the required interactor for the requested element and activates its functionality
 * @param parameters object that has all parameters of the interactor (id must always be set)
 *        parameters = {id: 'id of element', ...}
 */
Core.CreateInteractor = function(parameters){
    if (!Core.InteractorHandler.interactorList.Contains(parameters.id)) {
        var params = {parameters: {id: parameters.id}};
        Core.InteractorHandler.interactorList.AddInteractor(Util.ReflectObject(parameters.interactor, params));
        Core.InteractorHandler.currentInteractor.Super();
    }
    Core.InteractorHandler.currentInteractor = Core.InteractorHandler.interactorList.GetInteractor(parameters.id);
    Core.InteractorHandler.currentInteractor.AddEventListeners();
};
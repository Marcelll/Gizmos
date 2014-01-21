
// Currently active interactor
MTG.Interactors.Cache.currentInteractor = null;
// List of all registered interactors
MTG.Interactors.Cache.interactorList    = [];

/*
 * Adds the passed interactor to the interactor-list and stores it into
 * the variable: Core.currentInteractor
 * @param interactor instance of an interactor
 */
MTG.Interactors.Cache.interactorList.AddInteractor = function(interactor) {
    MTG.Interactors.Cache.interactorList.push(interactor);
    MTG.Interactors.Cache.currentInteractor =
        MTG.Interactors.Cache.interactorList[MTG.Interactors.Cache.interactorList.length - 1];
};

/*
 * Checks if the interactor of the required id already exists
 * @param id id of the element whose interactor should be delivered
 * @returns true if exists, else false
 */
MTG.Interactors.Cache.interactorList.Contains = function(id) {
    for (var i = 0; i < MTG.Interactors.Cache.interactorList.length; i++){
        if (MTG.Interactors.Cache.interactorList[i].parameters.id === id){
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
MTG.Interactors.Cache.interactorList.GetInteractor = function(id) {
    for (var i = 0; i < MTG.Interactors.Cache.interactorList.length; i++){
        if (MTG.Interactors.Cache.interactorList[i].parameters.id === id){
            return MTG.Interactors.Cache.interactorList[i];
        }
    }

    return null;
};
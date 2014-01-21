


/*
 * Creates the required interactor for the requested element and activates its functionality
 * @param parameters object that has all parameters of the interactor (id must always be set)
 *        parameters = {id: 'id of element', ...}
 */
MTG.Core.CreateInteractor = function(parameters){
    if (!MTG.Interactors.Cache.interactorList.Contains(parameters.id)) {
        var params = {parameters: {id: parameters.id}};
        MTG.Interactors.Cache.interactorList.AddInteractor(MTG.Util.ReflectObject(parameters.interactor, params));
        MTG.Interactors.Cache.currentInteractor.Super();
    }
    MTG.Interactors.Cache.currentInteractor = MTG.Interactors.Cache.interactorList.GetInteractor(parameters.id);
    MTG.Interactors.Cache.currentInteractor.AddEventListeners();
};
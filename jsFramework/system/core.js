


/*
 * Creates the required interactor for the requested element and activates its functionality
 * @param parameters object that has all parameters of the interactor (id must always be set)
 *        parameters = {id: 'id of element', ...}
 */
MTG.Core.CreateInteractor = function(parameters){
    if (!MTG.Core.interactorList.Contains(parameters.id)) {
        var params = {parameters: {id: parameters.id}};
        MTG.Core.interactorList.AddInteractor(MTG.Util.ReflectObject(parameters.interactor, params));
        MTG.Core.currentInteractor.Super();
    }
    MTG.Core.currentInteractor = MTG.Core.interactorList.GetInteractor(parameters.id);
    MTG.Core.currentInteractor.AddEventListeners();
};
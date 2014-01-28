


/*
 * Creates the required interactor for the requested element and activates its functionality
 * @param parameters object that has all parameters of the interactor (id must always be set)
 *        parameters = {id: 'id of element', ...}
 */
MTG.Core.CreateInteractor = function(parameters){
	console.log(MTG.Interactors.Cache.interactorList);
    if (!MTG.Interactors.Cache.interactorList.Contains(parameters.id)) {
        var params = {parameters: {id: parameters.id}};
        MTG.Interactors.Cache.interactorList.AddInteractor(MTG.Util.ReflectObject(parameters.interactor, params));
        console.dir(MTG.Interactors.Cache.interactorList.currentInteractor);
        MTG.Interactors.Cache.interactorList.currentInteractor.Super();
    }
    MTG.Interactors.Cache.interactorList.currentInteractor = MTG.Interactors.Cache.interactorList.GetInteractor(parameters.id);
    MTG.Interactors.Cache.interactorList.currentInteractor.AddEventListeners();
};

MTG.Core.SelectObject = function(element, bool) {
	if (!MTG.Gizmo.TREE_POS) {
		MTG.Gizmo.TREE_POS = new MTG.Gizmo.TreePositioning(element, "gizmo", "gizmos.x3d", true);
	}
	else {
		MTG.Gizmo.TREE_POS.Remove();
		MTG.Gizmo.TREE_POS = new MTG.Gizmo.TreePositioning(element, "gizmo", "gizmos.x3d", true);
	}
};
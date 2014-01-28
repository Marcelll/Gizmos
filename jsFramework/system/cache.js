
MTG.Interactors.Cache.InteractorList    = function() {
    // List of all registered interactors
    this.list = [];
    // Currently active interactor
    this.currentInteractor = null;
};

/*
 * Adds the passed interactor to the interactor-list and stores it into
 * the variable: Core.currentInteractor
 * @param interactor instance of an interactor
 */
MTG.Interactors.Cache.InteractorList.prototype.AddInteractor = function(interactor) {
    this.list.push(interactor);
    this.currentInteractor =
        this.list[this.list.length - 1];
};

/*
 * Checks if the interactor of the required id already exists
 * @param id id of the element whose interactor should be delivered
 * @returns true if exists, else false
 */
MTG.Interactors.Cache.InteractorList.prototype.Contains = function(id) {
    for (var i = 0; i < this.list.length; i++){
        if (this.list[i].parameters.id === id){
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
MTG.Interactors.Cache.InteractorList.prototype.GetInteractor = function(id) {
    for (var i = 0; i < this.list.length; i++){
        if (this.list[i].parameters.id === id){
            return this.list[i];
        }
    }

    return null;
};

/*
 * Removes the interactor of a required id if exists
 * @param id id of the element whose interactor should be delivered
 */
MTG.Interactors.Cache.InteractorList.prototype.RemoveInteractor = function(id) {
    for (var i = 0; i < this.list.length; i++){
        if (this.list[i].parameters.id === id){
            this.list.splice(i, 1);
        }
    }
};

/*
* Clears the interactor-list
*/
MTG.Interactors.Cache.InteractorList.prototype.Clear = function() {
    /*for (var i = 0; i < MTG.Interactors.Cache.interactorList.length; i++) {
        MTG.Interactors.Cache.interactorList.pop();
        MTG.Interactors.Cache.interactorList.Clear();
    }*/
    this.list = [];
    // for (var i = 0; i < MTG.Interactors.Cache.interactorList.length; i++){
    //     MTG.Interactors.Cache.interactorList.splice(i,1);
    // }
    console.dir(this.list);
};

MTG.Interactors.Cache.interactorList = new MTG.Interactors.Cache.InteractorList();
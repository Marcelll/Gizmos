
Core = {};

Core.CreateInteractor = function(parameters){
    var params = {parameters: {id: parameters.id}};
    var interactor = Util.ReflectObject(parameters.interactor, params);
    interactor.Super();
    
    console.log(interactor.id);
};



/*
 * Creates an object of the required name and sets all parameters
 * No param delivery to the required object will be done. Only classes
 * with a definition like Car = function(){...} can be created. The parameters
 * will be set by this function. If a delivery is required use ReflectByString();
 *
 * @attribute className name of the class that should be created
 * @attribute params    parameters that should be set on created object
 *
 * @return Object of the required class
 */
MTG.Util.ReflectObject = function(className, params) {
    // Split the String on . to get the hierarchie
    var classHierarchie = className.split('.');

    // Create executable comand line to create new Object of required class
    var executableCode = "new window";
    for (var i = 0; i < classHierarchie.length; i++) {
        executableCode += "['" + classHierarchie[i] + "']";
    }
    executableCode += ";";

    // Add all parameters to
    var reflectedObj = eval(executableCode);
    for (var param in params) {
        reflectedObj[param] = params[param];
    }

    return reflectedObj;
};


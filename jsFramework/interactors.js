/*
 * Super Class of all interactors. Includes all default methods for the 
 * standard interaction and handles the synchronization with the x3dom
 * default interactor
 */

Core.Interactors = {};

Core.Interactors.BaseInteractor = function() {

};

Core.Interactors.BaseInteractor.prototype.Super = function() {
    this.element        = document.getElementById(this.parameters.id);
    this.elementMat     = document.getElementById(this.parameters.id.substr(7, this.parameters.id.length) + "__highlight");
    this.x3d            = document.getElementsByTagName("x3d")[0];
    this.navigation     = document.getElementsByTagName("navigationinfo")[0];
    this.transform      = document.getElementById("gizmo__TRANSFORMATION");
    this.drag           = false;
    this.mousePos       = {x: 0, y: 0};
    this.defaultCol     = this.elementMat.getAttribute("diffuseColor");
    this.highlightCol   = "1 0.8 0.0";
};

Core.Interactors.BaseInteractor.prototype.AddEventListeners = function() {
    this.element.addEventListener('mousedown', this.elementMouseDown, true);
    this.element.addEventListener('mousemove', this.elementMouseMove, true);
    this.element.addEventListener('mouseup', this.elementMouseUp, true);
    this.element.interactor = this;
    this.x3d.addEventListener('mousemove', this.x3dMouseMove, true);
    this.x3d.addEventListener('mouseup', this.x3dMouseUp, true);
    this.x3d.interactor = this;
    this.navigation.setAttribute("type", "none");
    this.drag = true;
    this.parameters.lock = true;
};

Core.Interactors.BaseInteractor.prototype.RemoveEventListeners = function() {
    this.element.removeEventListener('mousedown', this.elementMouseDown, true);
    this.element.removeEventListener('mousemove', this.elementMouseMove, true);
    this.element.removeEventListener('mouseup', this.elementMouseUp, true);
    this.x3d.removeEventListener('mousemove', this.x3dMouseMove, true);
    this.x3d.removeEventListener('mouseup', this.x3dMouseUp, true);
    this.navigation.setAttribute("type", "examine");
    this.drag = false;
    this.parameters.lock = false;
};

Core.Interactors.BaseInteractor.prototype.elementMouseDown = function(evt) {
    this.interactor.mousePos.x = evt.layerX;
    this.interactor.mousePos.y = evt.layerY;
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.highlightCol);
};

Core.Interactors.BaseInteractor.prototype.elementMouseMove = function(evt) {
    if (evt.button === 1){
        this.interactor.transformation(evt);
    }
};

Core.Interactors.BaseInteractor.prototype.elementMouseUp = function(evt) {
    this.interactor.RemoveEventListeners();
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.defaultCol);
};

Core.Interactors.BaseInteractor.prototype.x3dMouseMove = function(evt) {
    if (evt.button === 0 && this.interactor.drag) {
        this.interactor.transformation(evt);
    }
};

Core.Interactors.BaseInteractor.prototype.x3dMouseUp = function(evt) {
    this.interactor.RemoveEventListeners();
    this.interactor.elementMat.setAttribute("diffuseColor", this.interactor.defaultCol);
};

Core.Interactors.BaseInteractor.prototype.transformation = function(evt) {
    console.log("The function transformation has to \n\
                     be overwritten for functionality!");
};




Core.Interactors.Interactor_Test = function(evt){
    
//    var parameters = {Minimum: 0.0, Maximum: 100.0, Snap: 5.0};
//    
//    this.transformation = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < parameters.Maximum) || 
//            (translationDir < 0 && transOld.x > parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= parameters.Minimum + parameters.Snap) { 
//                transOld.x = parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= parameters.Maximum - parameters.Snap) { 
//                transOld.x = parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };
    
    

    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
        var translationDir = this.mousePos.x - evt.layerX;
        if ((translationDir > 0) || 
            (translationDir <= 0)){
            transOld.x += translationDir / 100;
            this.transform.setAttribute("translation", transOld.toString());
        }
        this.mousePos.x = evt.layerX;
    };
    
    
//    if (this.parameters.Minimum === undefined) this.parameters.Minimum = 0.0;
//    if (this.parameters.Maximum === undefined) this.parameters.Maximum = 1.0;
//    if (this.parameters.Snap === undefined) this.parameters.Snap = 0.0;
//    
//    this.transform = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < this.parameters.Maximum) || 
//            (translationDir < 0 && transOld.x > this.parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= this.parameters.Minimum + this.parameters.Snap) { 
//                transOld.x = this.parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= this.parameters.Maximum - this.parameters.Snap) { 
//                transOld.x = this.parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };

};

Core.Interactors.Interactor_Test = function(evt){
    
//    var parameters = {Minimum: 0.0, Maximum: 100.0, Snap: 5.0};
//    
//    this.transformation = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < parameters.Maximum) || 
//            (translationDir < 0 && transOld.x > parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= parameters.Minimum + parameters.Snap) { 
//                transOld.x = parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= parameters.Maximum - parameters.Snap) { 
//                transOld.x = parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };
    
    

//    this.transformation = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        if ((translationDir > 0) || 
//            (translationDir <= 0)){
//            transOld.x += translationDir / 100;
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        this.mousePos.x = evt.layerX;
//    };
    
    console.log("There's no functionality implemented for this interactor!");
    
//    if (this.parameters.Minimum === undefined) this.parameters.Minimum = 0.0;
//    if (this.parameters.Maximum === undefined) this.parameters.Maximum = 1.0;
//    if (this.parameters.Snap === undefined) this.parameters.Snap = 0.0;
//    
//    this.transform = function(evt){
//        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
//        var translationDir = this.mousePos.x - evt.layerX;
//        var snapped = false;
//        if ((translationDir > 0 && transOld.x < this.parameters.Maximum) || 
//            (translationDir < 0 && transOld.x > this.parameters.Minimum)){
//            transOld.x += translationDir / 50;
//            if (transOld.x <= this.parameters.Minimum + this.parameters.Snap) { 
//                transOld.x = this.parameters.Minimum;
//                snapped = true;
//            }
//            if (transOld.x >= this.parameters.Maximum - this.parameters.Snap) { 
//                transOld.x = this.parameters.Maximum;
//                snapped = true;
//            }
//            this.transform.setAttribute("translation", transOld.toString());
//        }
//        if (!snapped)
//            this.mousePos.x = evt.layerX;
//    };
};


Core.Interactors.Interactor_Test.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.Interactor_Test.prototype.constructor = Core.Interactors.Interactor_Test;

Core.Interactors.Interactor_Test.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};

Core.Interactors.XTranslator = function(evt){
    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
        var translationDir = this.mousePos.x - evt.layerX;
        if ((translationDir > 0) || 
            (translationDir <= 0)){
            transOld.x += translationDir / 100;
            this.transform.setAttribute("translation", transOld.toString());
        }
        this.mousePos.x = evt.layerX;
    };
};

Core.Interactors.XTranslator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.XTranslator.prototype.constructor = Core.Interactors.XTranslator;

Core.Interactors.XTranslator.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};

Core.Interactors.YTranslator = function(evt){
    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
        var translationDir = this.mousePos.x - evt.layerX;
        if ((translationDir > 0) || 
            (translationDir <= 0)){
            transOld.y += translationDir / 100;
            this.transform.setAttribute("translation", transOld.toString());
        }
        this.mousePos.x = evt.layerX;
    };
};

Core.Interactors.YTranslator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.YTranslator.prototype.constructor = Core.Interactors.YTranslator;

Core.Interactors.YTranslator.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};

Core.Interactors.ZTranslator = function(evt){
    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec3f.parse(this.transform.getAttribute("translation"));
        var translationDir = this.mousePos.x - evt.layerX;
        if ((translationDir > 0) || 
            (translationDir <= 0)){
            transOld.z += translationDir / 100;
            this.transform.setAttribute("translation", transOld.toString());
        }
        this.mousePos.x = evt.layerX;
    };
};

Core.Interactors.ZTranslator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.ZTranslator.prototype.constructor = Core.Interactors.ZTranslator;

Core.Interactors.ZTranslator.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};

Core.Interactors.XRotator = function(evt){   
    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
        var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
        transOld.x = 1;
        transOld.y = 0;
        transOld.z = 0;
        transOld.w += translationDir;
        this.transform.setAttribute("rotation", transOld.toString());
        //if (this.parameters.Center !== undefined)
        //    this.transform.setAttribute("center", new x3dom.fields.SFVec3f(this.parameters.Center.x, this.parameters.Center.y, this.parameters.Center.z));
        this.mousePos.x = evt.layerX;
    };
};

Core.Interactors.XRotator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.XRotator.prototype.constructor = Core.Interactors.XRotator;

Core.Interactors.XRotator.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};

Core.Interactors.YRotator = function(evt){   
    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
        var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
        transOld.x = 0;
        transOld.y = 1;
        transOld.z = 0;
        transOld.w += translationDir;
        this.transform.setAttribute("rotation", transOld.toString());
        //if (this.parameters.Center !== undefined)
        //    this.transform.setAttribute("center", new x3dom.fields.SFVec3f(this.parameters.Center.x, this.parameters.Center.y, this.parameters.Center.z));
        this.mousePos.x = evt.layerX;
    };
};

Core.Interactors.YRotator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.YRotator.prototype.constructor = Core.Interactors.YRotator;

Core.Interactors.YRotator.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};

Core.Interactors.ZRotator = function(evt){   
    this.transformation = function(evt){
        var transOld = x3dom.fields.SFVec4f.parse(this.transform.getAttribute("rotation"));
        var translationDir = -Math.floor((this.mousePos.x - evt.layerX)) / 180 * Math.PI;
        transOld.x = 0;
        transOld.y = 0;
        transOld.z = 1;
        transOld.w += translationDir;
        this.transform.setAttribute("rotation", transOld.toString());
        //if (this.parameters.Center !== undefined)
        //    this.transform.setAttribute("center", new x3dom.fields.SFVec3f(this.parameters.Center.x, this.parameters.Center.y, this.parameters.Center.z));
        this.mousePos.x = evt.layerX;
    };
};

Core.Interactors.ZRotator.prototype = new Core.Interactors.BaseInteractor();
Core.Interactors.ZRotator.prototype.constructor = Core.Interactors.ZRotator;

Core.Interactors.ZRotator.prototype.transformation = function(evt){
    console.log("The function transformation has been overwritten successfully!");
};



/*
 *
 */
MTG.Gizmo.TreePositioning = function(element, id, url, render){
    this.Create(element, id, url, render);
};


/*
 *
 */
MTG.Gizmo.TreePositioning.prototype.Create = function(element, id, url, render) {
    this.gizmoID = id;
    var scene = document.getElementsByTagName("scene")[0];
    var gizmoTransform = document.createElement("Transform");
    var elementTransform = element.parentNode;
    var gizmoInline = document.createElement("Inline");

    this.TransformTo(gizmoTransform, elementTransform);

    gizmoInline.setAttribute("id", id);
    gizmoInline.setAttribute("url", url);
    gizmoInline.setAttribute("nameSpaceName", id);
    gizmoInline.setAttribute("mapDefToID", true);
    gizmoInline.setAttribute("render", render);

    gizmoTransform.appendChild(gizmoInline);
    element.parentNode.parentNode.appendChild(gizmoTransform);
};

/*
 *
 */
MTG.Gizmo.TreePositioning.prototype.Remove = function() {
    var gizmo = document.getElementById(this.gizmoID);

    if (gizmo){
        MTG.Interactors.Cache.interactorList.Clear();
        var gizmoParentNode = gizmo.parentNode;
        gizmoParentNode.parentNode.removeChild(gizmoParentNode);
    }
};

/*
 *
 */
MTG.Gizmo.TreePositioning.prototype.TransformTo = function(element, target) {
    var translation = target.getAttribute("translation");
    var rotation = target.getAttribute("rotation");
    var scale = target.getAttribute("scale");

    element.setAttribute("translation", translation);
    element.setAttribute("rotation", rotation);
    element.setAttribute("scale", scale);
};

/*
 *
 */
MTG.Gizmo.TreePositioning.prototype.GetMiddleOf = function(element) {
    var middle = null;

    
    var translation = element.getAttribute("translation");
    var rotation = element.getAttribute("rotation");
    var scale = element.getAttribute("scale");

    return middle;
};
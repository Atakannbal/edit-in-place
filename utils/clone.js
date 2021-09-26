// The cloned object returned is completely empty, except for the prototype attribute
// Which is (indirectly) pointing to the prototype object, by way of the F object.

function clone(object) {
    function F() { }
    F.prototype = object;
    return new F;
}
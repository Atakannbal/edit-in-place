function extend(subClass, superClass) {
    const F = function () { };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superclass = superClass.prototype;

    if (superClass.prototype.constuctor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

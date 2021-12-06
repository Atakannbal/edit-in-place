
Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn;
  return this;
};

(function() {
  function _$(els) {
    this.elements = [];
    
    for(var i = 0, len = els.length; i < len; ++i) {
      var element = els[i];

      if(typeof element == 'string') {
        element = document.getElementById(element);
      }

      this.elements.push(element)
    }
  }

  _$
  .method('text', function (input) {
    const element = this.getElement()
    element.innerHTML = input
    return this
  })
  .method('getElement', function(type, fn) {
    if(this.elements.length === 1) {
      return this.elements[0]
    } else if (this.elements.length > 1) {
      return this.elements
    } else {
      return undefined
    }
  })
    
  
  window.installHelper = function(scope, interface) {
    scope[interface] = function() {
      return new _$(arguments);
    }
  };

})();
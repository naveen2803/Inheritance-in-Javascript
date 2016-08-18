Function.prototype.method = function(name, func){
    this.prototype[name] = func;
    return this;
};
Function.method("extends", function(Parent){
    this.prototype = new Parent();
    return this;
});

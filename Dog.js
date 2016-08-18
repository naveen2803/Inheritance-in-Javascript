(function(window){

    var Dog = function(name, says)
    {
        this.name = name;
        this.says = says;
    }.extends(Mammal);

    Dog.staticVar = "Dogs static variable";
    
    Dog.prototype.whatSays = function()
    {
        return this.says;
    };

    window.Dog = Dog;
})(window);

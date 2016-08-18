(function(window){


    var Cat = function(name, says)
    {
        this.name = name;
        this.says = says;
    }.extends(Mammal);

    Cat.staticVar = "Cats static variable";
    
    Cat.prototype.whatSays = function()
    {
        return this.says;
    };

    window.Cat = Cat;
})(window);

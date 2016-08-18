(function(window){


    var Mammal = function()
    {
        console.log("Super is called");

        var _private = "I am private variable";
    }

    Mammal.prototype.getName = function()
    {
        return this.name;
    };

    window.Mammal = Mammal;
})(window);

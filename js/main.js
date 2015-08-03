var Human = Backbone.Model.extend({
    initialize: function(){
        alert("Welcome to this world");
    }
});

var human = new Human({ name: "Thomas", age: 67});


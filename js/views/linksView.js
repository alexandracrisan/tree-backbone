/**
 * Created by alexandracrisan on 8/12/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.linksView = Backbone.View.extend({
    el : '.menu',

    render : function(){
        this.$el.html('<a href="#" id="home"><button type="button">Home</button></a>' +
            '<a href="#test" id="secondPage"><button type="button">Test</button></a>');
    }
});
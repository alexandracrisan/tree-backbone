/**
 * Created by alexandracrisan on 8/12/2015.
 */

window.SearchTree = window.SearchTree || {};

window.SearchTree.testView = Backbone.View.extend({
    el: 'body',

    render: function() {
        this.$el.html('<h1>Welcome to my test page</h1>');
    }
});
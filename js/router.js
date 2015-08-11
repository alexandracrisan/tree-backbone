/**
 * Created by alexandracrisan on 8/11/2015.
 */

window.SearchTree = window.SearchTree || {};

window.SearchTree.router =  Backbone.Router.extend({
    initialize: function() {
        console.log('router starts');
        Backbone.history.start({ pushState: false });
    },
    routes: {
        '': 'home',
        'test': 'test'
    },

    home: function(){
        console.log('home');
    },

    test: function(){
        console.log('testpage');
    }

});


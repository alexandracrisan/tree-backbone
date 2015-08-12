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
        var viewHome = new window.SearchTree.mainView();
        viewHome.render();
    },

    test: function(){
        console.log('testpage');
        var viewTest = new window.SearchTree.testView();
        viewTest.render();
    }

});


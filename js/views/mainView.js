/**
 * Created by alexandracrisan on 8/12/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.mainView = Backbone.View.extend({
    el: '.container',

    initialize: function(){

    },

    render: function(){
        this.$el.html('<div id="search-field-container"></div><div id="tree"></div>');

        this.input =  new window.SearchTree.inputView({
            model: window.SearchTree.instantiatedTreeModel
        });

        this.instantiatedTreeView = new window.SearchTree.treeView({
            model: window.SearchTree.instantiatedTreeModel
        });

        this.input.render();
        this.instantiatedTreeView.render();
    }
});


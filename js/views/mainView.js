/**
 * Created by alexandracrisan on 8/12/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.mainView = Backbone.View.extend({
    el: 'container',

    initialize: function(){
        this.input =  new window.SearchTree.inputView({
            model: window.SearchTree.instantiatedTreeModel
        });

        this.instantiatedTreeView = new window.SearchTree.treeView({
            model: window.SearchTree.instantiatedTreeModel
        });
    },

    render: function(){
        //this.$el.empty();
        this.$el.append(this.input.$el, this.instantiatedTreeView.$el);
        this.input.render();
        this.instantiatedTreeView.render();
    }
});


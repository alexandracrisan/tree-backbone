/**
 * Created by alexandracrisan on 8/4/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.treeView = Backbone.View.extend({
    el:'#tree',

    events: {
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render());
       // this.$el.html(JSON.stringify(this.model.get('data')))
    },

    render: function(params) {
        this.$el.html(JSON.stringify(params));
    }
});


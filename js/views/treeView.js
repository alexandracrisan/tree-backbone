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
    },

    render: function() {
        this.$el.html(JSON.stringify(this.model.get('data')));
    }
});

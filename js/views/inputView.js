/**
 * Created by alexandracrisan on 8/4/2015.
 */

window.SearchTree = window.SearchTree || {};

window.SearchTree.inputView = Backbone.View.extend({
    el:'#search-field-container',

    events: {
        'keyup #search-field': 'update'
    },

    update: function(){
        var fieldValue = $('#search-field').val();
        this.model.filterByValue(fieldValue);
    },

    render: function(){
        this.$el.html('<input id="search-field" type="search" placeholder="folder name">')
    }
});



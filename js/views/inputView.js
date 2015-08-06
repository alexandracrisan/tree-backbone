/**
 * Created by alexandracrisan on 8/4/2015.
 */

window.SearchTree = window.SearchTree || {};

window.SearchTree.inputView = Backbone.View.extend({
    el:'#search-field-container',

    dataView: window.SearchTree.fileData,

    events: {
        'keyup #search-field': 'update'
    },

    update: function(){
        var field = $('#search-field').val();
        if (field === ''){
            window.SearchTree.instantiatedTreeModel.filterTree(this.dataView, '');
        }
        else {
            window.SearchTree.instantiatedTreeModel.filterTree(this.dataView, field);
        }
    }
});



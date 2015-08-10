/**
 * Created by alexandracrisan on 8/4/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.treeView = Backbone.View.extend({
    el:'#tree',

    events: {
    },

    templates: {
        list: _.template(
            '<ul>' +
            '<% _.each(data, function (item) { %>' +
            //'<li><% (item.hasOwnProperty("children")) ? class="mdi mdi-folder"<%= item.name %> : class="mdi mdi-file-outline"<%= item.name %> %></li>'+
            '<% if(item.hasOwnProperty("children")){ %>' +
            '<li class="mdi mdi-folder"><%= item.name %></li>' +
            '<% } %>' +
            //'<% this.templates.list({data: item.children}) %>' +
            '<% if(!item.hasOwnProperty("children")){ %>' +
            '<li class="mdi mdi-file-outline"><%= item.name %></li>' +
            '<% } %>' +
            '<% }) %>' +
            '</ul>'
        )
    },

    initialize: function() {
        this.model.on('change:filteredData', this.render, this);
    },

    render: function() {
        this.$el.html(this.templates.list({ data: this.model.get('filteredData') }));
        console.log(this.model.get('data'));
        console.log(this.model.get('filteredData'));
    }
});


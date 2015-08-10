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
            '<% if(!item.hasOwnProperty("children")){ %>' +
            '<li class="mdi mdi-file-outline"><%= item.name %></li>' +
            '<% } %>' +
            '<% }) %>' +
            '</ul>'
        )
    },

    initialize: function() {
        this.model.on('change', this.handleModelChange, this);
    },

    handleModelChange: function(data){
        this.localData = data;
        this.render();
    },

    render: function() {
        // this.$el.html(JSON.stringify(params));
        this.$el.html(this.templates.list({data: this.localData}));
    }
});

////<tbody>
//<% _.each(accountLists, function(account) { %>
//    <tr>
//    <td><%= (account.active == 'true') ? 'Active': 'Inactive' %></td>
//    </tr>
//    <% }); %>
//</tbody>


//'<% this.templates.list({data: item.children}) %>' +
//'<% .li.class="mdi mdi-folder" %>' +
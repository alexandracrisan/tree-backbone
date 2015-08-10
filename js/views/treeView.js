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
             '<% if(item.hasOwnProperty("children")){ %>' +
             //'<% .li.class="mdi mdi-folder" %>' +
            '<li class="mdi mdi-folder"><%= item.name %></li>' +
            //'<% this.templates.list({data: item.children}) %>' +
            '<% } %>' +
            //'<% else { %>' +
            '<li class="mdi mdi-file-outline"><%= item.name %></li>' +
            //'<% } %>' +
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

//<td><%= compensation %></td>
//
//SearchTree.CreateTree = function(data, parent){
//    var container = document.createElement('ul');
//    for(var i=0; i < data.length; i++) {
//        var entry = data[i];
//        var li = document.createElement('li');
//        li.innerHTML = entry.name;
//        li.className = SearchTree.constants.classes.fileIcon;
//        container.appendChild(li);
//        if (entry.hasOwnProperty('children')) {
//            SearchTree.CreateTree(entry.children, li);
//            li.className = SearchTree.constants.classes.folderIcon;
//        }
//    }
//    parent.appendChild(container);
//}
//<% if (typeof(date) !== "undefined") { %>
//<span class="date"><%= date %></span>
//        <% } %>
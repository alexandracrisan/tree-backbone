/**
 * Created by alexandracrisan on 8/4/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.treeView = Backbone.View.extend({
    el:'#tree',

    events: {
    },

    list: function(data,parent){

         var container = $('<ul></ul>');
         for (var  i = 0; i< data.length; i++){
             var entry = data[i];
             var li = $('<li></li>');
             li.text(entry.name);
             li.addClass('mdi mdi-file-outline');
             container.append(li);
             if(entry.hasOwnProperty('children')) {
                 li.addClass('mdi mdi-folder');
                 this.list(entry.children, li);
             }
         }
         parent.append(container);
    },

    initialize: function() {
        this.model.on('change:filteredData', this.render, this);
    },

    render: function() {
        //this.$el.html(this.templates.list({ data: this.model.get('filteredData') }));
        this.$el.empty();
        this.$el.html(this.list(this.model.get('filteredData'), this.$el));
    }
});



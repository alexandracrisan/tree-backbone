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
            '<% _.each(params, function (item) { %>' +
            '<li><%= item %></li>' +
            '<% }) %>' +
            '</ul>'
        )
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render());
    },

    render: function(params) {
        // this.$el.html(JSON.stringify(params));
        this.$el.html(this.templates.list({
                params: params
            })
        );
    }
});


//
//window.SearchTree.treeView = Backbone.View.extend({
//    el:'#tree',
//
//    events: {
//    },
//
//    initialize: function() {
//        this.listenTo(this.model, 'change', this.render());
//       // this.$el.html(JSON.stringify(this.model.get('data')))
//    },
//
//    render: function(params) {
//        this.$el.html(JSON.stringify(params));
//        //this.$el.html(
//       // this.view(params, this.el);
//    },
//
//    view: function (arr, parent){
//       // console.log(arr);
//        var container = $('<ul></ul>');
//        for(var j = 0; j< arr.length; j++) {
//            var entry = arr[j];
//            var li = $('<li></li>');
//            li.addClass('mdi mdi-file-outline');
//            li.name = entry.name;
//            container.appendChild(li);
//            if(entry.hasOwnProperty('children')) {
//                this.view(entry.children, li);
//                li.addClass('mdi mdi-folder');
//            }
//        }
//        parent.appendChild(container);
//    }
//});
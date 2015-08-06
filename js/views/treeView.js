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
       // this.$el.html(this.view(params, this.el));
    },

    view: function (pa, parent){
        console.log(pa);
        var container = $('<ul></ul>');
        for(var j = 0; j< pa.length; j++) {
            var entry = pa[j];
            var li = $('<li></li>');
            //li.className;
            li.name = entry.name;
            container.appendChild(li);
            if(entry.hasOwnProperty('children')) {
                this.view(entry.children, li);
                //li.className =
            }
        }
        parent.appendChild(container);
    }
});

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
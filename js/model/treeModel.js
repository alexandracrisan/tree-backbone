/**
 * Created by alexandracrisan on 8/4/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.treeModel = Backbone.Model.extend({

    result: [],

    filterTree: function(data, src){
        var arrData = data;

        for (var i =0; i< arrData.length; i++) {
            if (arrData[i].type === 'file' && src === '') {
                this.result.push(arrData[i]);
            }
            else {
                if(arrData[i].name.indexOf(src) >= 0) {
                    this.result.push(arrData[i]);
                    if(arrData[i].hasOwnProperty('children')) {
                        this.filterTree(arrData[i].children, '');
                    }
                }
                else {
                    if (arrData[i].hasOwnProperty('children')) {
                        this.filterTree(arrData[i].children, src);
                    }
                }
            }
        }
    },

    renderFilteredTree: function(data, src) {
        this.filterTree(data, src);
        this.trigger('change', this.result);
        this.result = [];
        //window.SearchTree.instantiatedTreeView.render(this.result);
    }
});

window.SearchTree.instantiatedTreeModel = new window.SearchTree.treeModel({
    data: window.SearchTree.fileData,
});

/**
 * Created by alexandracrisan on 8/4/2015.
 */
window.SearchTree = window.SearchTree || {};

window.SearchTree.treeModel = Backbone.Model.extend({

    filterTree: function(data, src){
        //console.log(src);
        var arrData = data;
        var result = [];
        //console.log(arrData);

        for (var i =0; i< arrData.length; i++) {
            //var item = arrData[i];
            if (arrData[i].type === 'file' && src === '') {
                result.push(arrData[i].name);
            }
            else {
                if(arrData[i].name.indexOf(src) >= 0) {
                    result.push(arrData[i].name);
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
        console.log(result);
       // return result;
    }
});

window.SearchTree.instantiatedTreeModel = new window.SearchTree.treeModel({
    data: window.SearchTree.fileData,
});
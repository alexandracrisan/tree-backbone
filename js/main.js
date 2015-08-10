window.SearchTree = window.SearchTree || {};


window.SearchTree.app =
    $(document).ready(function(){
        window.SearchTree.instantiatedTreeModel = new window.SearchTree.treeModel({
            data: window.SearchTree.fileData,
            filteredData: window.SearchTree.fileData
        });

        window.SearchTree.input = new window.SearchTree.inputView({
            model: window.SearchTree.instantiatedTreeModel
        });
        window.SearchTree.input.render();

        window.SearchTree.instantiatedTreeView = new window.SearchTree.treeView({
            model: window.SearchTree.instantiatedTreeModel
        });
        window.SearchTree.instantiatedTreeView.render();
    });



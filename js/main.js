window.SearchTree = window.SearchTree || {};


window.SearchTree.app =
    $(document).ready(function(){
        var input = new window.SearchTree.inputView();
        window.SearchTree.instantiatedTreeView = new window.SearchTree.treeView({ model: window.SearchTree.instantiatedTreeModel });
        window.SearchTree.instantiatedTreeView.render();
    });



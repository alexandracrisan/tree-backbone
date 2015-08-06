window.SearchTree = window.SearchTree || {};


window.SearchTree.app =
    $(document).ready(function(){
        window.SearchTree.input = new window.SearchTree.inputView();
        window.SearchTree.instantiatedTreeView = new window.SearchTree.treeView({ model: window.SearchTree.instantiatedTreeModel });
        window.SearchTree.input.update();
    });



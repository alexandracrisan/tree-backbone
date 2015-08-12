window.SearchTree = window.SearchTree || {};


window.SearchTree.app =
    $(document).ready(function(){
        window.SearchTree.instantiatedTreeModel = new window.SearchTree.treeModel({
            data: window.SearchTree.fileData,
            filteredData: window.SearchTree.fileData
        });

        window.SearchTree.instantiatedRoutes = new window.SearchTree.router();
    });



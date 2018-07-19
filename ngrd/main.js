var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scop,$modal) {
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { 
        data: 'myData',
        showGroupPanel: true,
        enableCellSelection:true,
        enableRowSelection:false,
        enableCellEdit:true,
        columnDefs: [{field:'name', displayName:'Name'}, {field:'age', displayName:'Age'}]
    };

    $scope.showModal=function(){
    	$scope.nuevoMiembro={};
    	var modalInstance= $modal.open({
    		templateUrl:'miembros.html'
    	})
    }
});
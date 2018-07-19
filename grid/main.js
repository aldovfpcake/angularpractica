// main.js
var app = angular.module('myApp', ['ngGrid','ui.bootstrap','dialogs']);
app.controller('MyCtrl', function($scope,$modal,$dialogs) {
  
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
                     
    $scope.columnDefs1 = [{ field:"name", displayName: "NAME"},
                                   { field:"age", displayName: "AGE"}];
                                   
    
    $scope.columnDefs2 = [{ field:"name", displayName: "Name"},
                                   { field:"age", displayName: "Age"}];                               

                     
    var options1 = { data: 'myData',
                       columnDefs: 'columnDefs1',
                       showGroupPanel: true,
                       enableCellSelection:true,
                       enableRowSelection:false,
                       multiSelect: true };


    $scope.gridOptions1 = options1;

    $scope.switchOptions = function() {

        $scope.columnDefs1 = $scope.columnDefs2;


        
    }
  
     $scope.showModal=function(){
      $scope.nuevoMiembro={};
       dlg = $dialogs.create('/dialogs/whatsyourname.html','whatsYourNameCtrl',{},{key: false,back: 'static'});
        dlg.result.then(function(name){
          $scope.name = name;
        },function(){
          $scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
    }
 

});
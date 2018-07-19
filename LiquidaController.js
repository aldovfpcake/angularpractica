var app = angular.module('app', []);
app.controller('LiquidaController', function ($scope) {
    $scope.pami =0;
    $scope.jubilacion =0;
	$scope.kilometros = 0;
	$scope.sindicato = 0;
    $scope.nombre=/^[a-zA-Z]*$/;
   
   $scope.calcular = function () {
    
   /* $scope.jubilacion = Math.round($scope.jubilacion * 100) / 100*/
    $scope.sueldobasico  = $scope.basico;
	$scope.kilopesos     = $scope.kilometros *1.18006; 
	$scope.kilopesos     = Math.round($scope.kilopesos,2);
	$scope.bruto         = $scope.sueldobasico+$scope.kilopesos;
	$scope.jubilacion    = Math.round(($scope.bruto*11/100)*100)/100;
    $scope.pami       	 = Math.round(($scope.bruto*3/100)*100)/100;
    $scope.sindicato  	 = Math.round(($scope.bruto*3/100)*100)/100; 
    $scope.obrasocial 	 = Math.round(($scope.bruto*3/100)*100)/100;
    $scope.totaldescuento = $scope.pami+$scope.sindicato+$scope.obrasocial;
    $scope.neto = $scope.basico+$scope.kilopesos - $scope.totaldescuento;
	
  };

  $scope.myHTML =
     'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';


  });
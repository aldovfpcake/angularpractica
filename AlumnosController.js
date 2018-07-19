function AlumnosController($scope){
          $scope.alumnos=[
		                 {nombre:"Juan Blanco",telefono:"445-5555",curso:"3B",edad:"16"},
		                 {nombre:"Alberto Garcia",telefono:"447-5555",curso:"3B",edad:"16"},
		                 {nombre:"Oscar Alan ",telefono:"436-7755",curso:"3B",edad:"16"},
		                 {nombre:"Vicente Gutt",telefono:"445-5555",curso:"3B",edad:"16"}
		                 ];

$scope.Save= function(){
        $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre,telefono:$scope.nuevoAlumno.telefono,curso:$scope.nuevoAlumno.curso});
		$scope.formVisibility=false;
		console.log($scope.formVisibility)
		};

$scope.formVisibility=false;

$scope.Mod=function(){alert('Modificacion');
                      alert($scope.alumnos.keys());  };
		
$scope.ShowForm= function(){
        $scope.formVisibility=true;
        console.log($scope.formVisibility) 	
	}

$scope.getTotal = function(){
    var total = 0;
	console.log($scope.alumnos.edad);
    for(var i = 0; i < $scope.alumnos.length; i++){
        var edad = parseInt($scope.alumnos.edad);
        total += edad;
    }
    return total;
}


	
	}		
function usuariosController($scope,$http) {  
 
    //Cada vez que modifiquemos el contenido del campo de texto haremos una petición a nuestra base de datos con valores relacionados
    $scope.cargausuarios = function(){
	alert('q pasa?');
    $http({url: "http://localhost/resto/meseros/lista", 
           method: "GET",
           params: {value: $scope.usuario}
      }).success(function(usuarios) {$scope.usuarios = usuarios;});
    
    }

    $scope.Mod=function(){alert('Modificacion');
                      alert($scope.alumnos.keys());  };
	
   //Cuando eliges un usuario lo reemplaza en el campo de texto
    $scope.cambiausuario = function(usuario){
    $scope.usuario = usuario;
    $scope.usuarios = null;
    }
}
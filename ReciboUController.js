angular
    .module('apiApp', [])
    .controller('apiAppCtrl', controladorPrincipal);

function controladorPrincipal($scope){  

            var vm=this;
           alert("Ejecutando el Script");
           vm.jubilacion =  vm.val * 0.11;
           console.log(vm.val);
}
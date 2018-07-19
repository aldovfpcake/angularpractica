var app = angular.module('MyApp', []);

app.controller('TablasController', function($scope){
	 $scope.basicos ={

              sueldosbasicos: [

              				{
           						 id: 1,
            					 text: 'Oficial',
            			    	importe: 15698,
            			    	link:'oficial.html'

            			    },


                           {
           						 id: 2,
            					 text: 'Medio Oficial',
            			    	importe: 14829,
                                link:'file:///C:/angular/angularpractica/SBASICOS.html/MedioOficial.html'
            			    }

                      
                            ]


                    };






	 });

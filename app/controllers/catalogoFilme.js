app.controller('CatalogoFilmeCtrl', function($scope) {
	var f = new Entidades();

	$scope.filmes = [
		new f.Filme({ nome: "Filme 1", prateleira: 232, atores: [], diretor: "Diretor 1", ano: 2014  })
	];
});
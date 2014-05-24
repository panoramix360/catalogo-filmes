var app = angular.module('CatalogoFilme', ['MenuModule', 'MovieModule', 'ngRoute']);

app.controller('MainController', function($scope, Menus) {
	$scope.menus = Menus.query();

	$scope.countFilmes = 1;
});

function ListarFilmeController($scope, Filmes) {
	$scope.filmes = Filmes.query();
}

function AdicionarFilmeController($scope) {
	$scope.adicionarFilme = function() {
		$scope.countFilmes++;
	};
}

var pageModule = angular.module('MenuModule', []);
pageModule.factory('Menus', function() {
	var menus = {};

	menus.query = function() {
		return [
			{ text: 'Adicionar Filme', url: '#/addFilme' },
			{ text: 'Listar Filmes', url: '#/' }
		];
	};

	return menus;
});

var movieModule = angular.module('MovieModule', []);
movieModule.factory('Filmes', function() {
	var filmes = {};

	filmes.query = function() {
		return [ { id: 1, nome: 'Os Vingadores', prateleira: '2' } ];
	};

	return filmes;
});
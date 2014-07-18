var app = angular.module('CatalogoFilme', ['MenuModule', 'MovieModule', 'ngRoute']);

var filmes = [];

app.controller('MainController', function($scope, Menus) {
	$scope.menus = Menus.query();
});

function ListarFilmeController($scope, Filmes) {
	filmes = Filmes.query();

	$scope.filmes = filmes;
}

function AdicionarFilmeController($scope) {
	$scope.adicionarFilme = function(nomeFilme, prateleira) {
		filmes.push({ id: id++, nome: nomeFilme, prateleira: prateleira });
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
		return [ { id: id++, nome: 'Os Vingadores', prateleira: '2' } ];
	};

	return filmes;
});
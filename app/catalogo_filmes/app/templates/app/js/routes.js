// Set our mappings between URLs, templates, and controllers
function mainRouteConfig($routeProvider) {
	$routeProvider
		.when('/', {
			controller: ListarFilmeController,
			templateUrl: 'listarFilme.html'
		})
		.when('/addFilme', {
			controller: AdicionarFilmeController,
			templateUrl: 'adicionarFilme.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}

// Set up our route so the AMail service can find it
app.config(mainRouteConfig);
var connect = require('connect');

connect.createServer(
	connect.static('../catalogo-filmes')
).listen(5000);
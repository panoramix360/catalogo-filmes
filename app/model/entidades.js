var Entidades = function() {
	var self = this;

	self.Filme = function(dados) {
		var me = this;
		me.nome = dados.nome;
		me.prateleira = dados.prateleira;
		me.atores = dados.atores;
		me.diretor = dados.diretor;
		me.ano = dados.ano;
	};
};
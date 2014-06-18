from django.db import models

class Ator(models.Model):
	nome = models.CharField("Nome", max_length=255)
	idade = models.IntegerField("Idade")

class Filme(models.Model):
	atores = models.ManyToManyField(Ator)
	nome = models.CharField(max_length=255)
	descricao = models.TextField()
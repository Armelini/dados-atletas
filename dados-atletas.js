class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {

    }

    calculaIMC() {

    }

    calculaMediaValida() {

    }

    obtemNomeAtleta() {
        return this.nome
    }

    obtemIdadeAtleta() {
        return this.idade
    }

    obtemPesoAtleta() {
        return this.peso
    }

    obtemNotasAtleta() {
        return this.notas
    }

    obtemCategoria() {

    }

    obtemIMC() {

    }

    obtemMediaValida() {

    }

}


// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.obtemNomeAtleta());
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    obtemNomeAtleta() {
        return this.nome
    };

    obtemIdadeAtleta() {
        return this.idade
    };

    obtemPesoAtleta() {
        return this.peso
    };

    obtemNotasAtleta() {
        return this.notas
    };

    calculaCategoria() {
        let categoria = "Categoria";

        if (this.idade >= 9 && this.idade <= 11) {
            categoria = "Infantil";
        }
        else if (this.idade >= 12 && this.idade <= 13) {
            categoria = "Juvenil";
        }
        else if (this.idade >= 14 && this.idade <= 15) {
            categoria = "Intermediário";
        }
        else if (this.idade >= 16 && this.idade <= 30) {
            categoria = "Adulto";
        }
        else { categoria = "Sem categoria" };

        return categoria;
    };

    obtemCategoria() {
        return this.calculaCategoria()
    };

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura)
        return imc;
    };

    obtemIMC() {
        return this.calculaIMC();
    };

    calculaMediaValida() {

        this.notas.sort();

        let notasConsideradas = this.notas.slice(1, this.notas.length - 1);

        let soma = 0;
        notasConsideradas.forEach(function (nota) {
            soma += nota;
        });

        let media = soma / notasConsideradas.length;
        return media;
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    };

}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}\nIdade: ${atleta.obtemIdadeAtleta()}\nPeso: ${atleta.obtemPesoAtleta()}\nAltura: ${atleta.altura}\nNotas: ${atleta.notas}\nCategoria: ${atleta.obtemCategoria()}\nIMC: ${atleta.obtemIMC()}\nMédia válida: ${atleta.obtemMediaValida()}`);

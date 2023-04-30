const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

function exercicio1(){
/*Imprima no console a quantidade de pessoas Total.*/

    let TotaldePessoas = data.length;
    console.log(TotaldePessoas)
}

function exercicio2(){
/*Imprima no console a quantidade de pessoas pessoas do sexo
Feminino.*/

    let Mulheres = [];

    for(let i=0;i<data.length;i++){
        if(data[i].sexo==='F'){
            Mulheres.push(data[i]);
        }
    }

    let TotaldeMulheres = Mulheres.length;

    console.log(TotaldeMulheres);
}

function exercicio3(){
/*Imprima no console a soma do salário de todas as pessoas.*/

    let somaSalario = 0;

    for(let item of data){
        somaSalario +=item.salario;
    }

    console.log(`R$${somaSalario.toFixed(2)}`);
}

function exercicio4(){
/*Imprima no console a média do salário de todas as pessoas.*/

    let somaSalario = 0;
    let mediaSalario = 0;

    for(let item of data){
    somaSalario +=item.salario;
    }

    mediaSalario = somaSalario/data.length;
    console.log(`R$${mediaSalario.toFixed(2)}`);

}

function exercicio5(){
    
    let Homens = [];
    let somaSalarioHomens = 0;

    for(let i=0;i<data.length;i++){
        if(data[i].sexo==='M'){
            Homens.push(data[i]);
        }
    }

    for(let item of Homens){
        somaSalarioHomens+=item.salario;
    }

    console.log(`R$${somaSalarioHomens.toFixed(2)}`);
}

function exercicio6(){
/*Imprima no console a média do salário de todas as pessoas do sexo
Masculino*/

    let Homens = [];
    let somaSalarioHomens = 0;
    let mediaSalarioHomens =0;

    for(let i=0;i<data.length;i++){
        if(data[i].sexo==='M'){
            Homens.push(data[i]);
        }
    }

    for(let item of Homens){
        somaSalarioHomens+=item.salario;
    }

    mediaSalarioHomens = somaSalarioHomens/Homens.length;

    console.log(`R$${mediaSalarioHomens.toFixed(2)}`);   
}

function exercicio7(){
/*Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.*/

    const salarioMaior = data.some((item)=>item.salario>7000);

    console.log(salarioMaior);

}

function exercicio8(){
/*Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.*/

    const indice = data.findIndex((item)=>item.nome==='Eva Trindade');

    console.log(indice);
}

function exercicio9(){
/*Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva".*/

    let pessoasComSobrenomeSilva = data.filter((pessoa) =>
        pessoa.nome.includes("Silva")
      );

      console.log(pessoasComSobrenomeSilva);
    
}

function exercicio10(){
/*Imprima os nomes utilizando o MAP*/

    let nomes = data.map((valor)=>valor.nome);
    console.log(nomes);
}


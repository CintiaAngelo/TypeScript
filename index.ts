let nome:string = "Cintia";
let sobrenome="Angelo"
const pi:number=3.14;
let idade:number = 20;

console.log(nome);

//Arrays
//Array c/ String 
let carros:string[] = ["Audi", "BMW", "Corsa"]
carros.push("Jeep")

console.log("*****Exemplo Array*******")
carros.forEach(carro => {
    console.log(carro)
})

//Array Interiros
let idades:number[] = [13,10,20,24]
console.log(idades.length)

for (let index =0; index < idades.length; index++){
    const element = idades[index];
    console.log(element)
}


//Tipos complexos
console.log("*****Tipos Complexos*******")
let pessoa:{nome:string, idade:number}
={
    nome:"",
    idade:0
}

pessoa.nome = "Cintia Angelo";
pessoa.idade = 20;
console.log(`Nome: ${pessoa.nome}`)
console.log(`Idade: ${pessoa.idade}`)


//Tuplas
console.log("*****Tipos Tuplas*******")
let cadastro:[string,number]
cadastro =["Cintia Angelo", 20]
console.log("Nome Completo: " + cadastro[0])
console.log("Idade: " + cadastro[1])
console.log(typeof cadastro[1])
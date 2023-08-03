let carroA = { fabricante: 'Ford', modelo: 'Mustang', ano: 2000 };

let carroB = { fabricante: 'Porsche', modelo: 'Macan', ano: 2023 };

let carros = [carroA, carroB];

/*  */ // pra fazer = CTRL : 
for (let carro of carros) {
    console.log(carro);
}
console.log('--------------------------');
for (let propriedade in carroA) {
    console.log(propriedade);
}

console.log('---------------------------');
for (let propriedade in carroB) {
    console.log('Propriedade: ' + propriedade
    + ' - valor: ' + carroB[propriedade]);
}

console.log('---------------------------');
let nomes = ['Fred', 'Sheila', 'Sara'];
for(let nome of nomes) {
    console.log(nome);
}
console.log('---------------------------');
for(let nome in nomes) {
    console.log(nome);          
}
// TEM DIFERENÇA ENTRE IN e OF = O OF VAI DAR O QUE ESTÁ ESCRITO NA VARIÁVEL E O IN vai dar o indices


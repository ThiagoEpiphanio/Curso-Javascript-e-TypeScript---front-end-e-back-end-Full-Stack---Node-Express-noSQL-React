/*Thiago Epiphanio da Silva tem 40 anos, pesa 130kg
tem 1.86 de altura e seu IMC é de xx.xx. e nasceu em 1984 
*/
const nome = 'Thiago Epiphanio';
const sobrenome = 'da Silva';
const idade = 40;
const peso = 130;
const alturaEmMt = 1.85;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmMt * alturaEmMt);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'e pesa', peso + 'kg.');
console.log(`Tem ${alturaEmMt} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
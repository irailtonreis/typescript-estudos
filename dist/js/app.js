import { Negociacao } from "./models/Negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100)
console.log(negociacao)
// negociacao.quantidade = 1000;
console.log(negociacao.volume)
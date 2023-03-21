import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesView } from "../views/Negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociaoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociaoesView");
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.upadate(this.negociaoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociaoes.adiciona(negociacao);
        this.negociacoesView.upadate(this.negociaoes);
        this.limparFormulario();
        console.log(this.negociaoes.lista());
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

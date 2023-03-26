import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesView } from "../views/Negociacoes-view.js";
import { MensagemView } from "../views/Mensagem-View.js";
export class NegociacaoController {
    constructor() {
        this.negociaoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociaoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.upadate(this.negociaoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            this.negociaoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        }
        else {
            this.mensagemView.upadate('Apenas negociações em dias úteis são aceitas.');
        }
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
    atualizaView() {
        this.negociacoesView.upadate(this.negociaoes);
        this.mensagemView.upadate("Negociação adicionada com sucesso!");
    }
}

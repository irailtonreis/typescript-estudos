import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesView } from "../views/Negociacoes-view.js";
import { MensagemView } from "../views/Mensagem-View.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaoes = new Negociacoes()
    private negociacoesView = new NegociacoesView("#negociaoesView");
    private mensagemView = new MensagemView("#mensagemView");



    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.upadate(this.negociaoes);
    }

    adiciona():void {
        const negociacao = this.criaNegociacao()
        this.negociaoes.adiciona(negociacao)
        this.limparFormulario()
        this.atualizaView()
    }
    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(
            date,
            quantidade,
            valor
        )
    }

    limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); 
    }

    private atualizaView(): void{
        this.negociacoesView.upadate(this.negociaoes);
        this.mensagemView.upadate("Negociação adicionada com sucesso!");
    }
}



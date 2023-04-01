import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesView } from "../views/Negociacoes-view.js";
import { MensagemView } from "../views/Mensagem-View.js";
import { diasDaSemana } from "../enums/dias-da-semana.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaoes = new Negociacoes()
    private negociacoesView = new NegociacoesView("#negociaoesView", true);
    private mensagemView = new MensagemView("#mensagemView");



    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.upadate(this.negociaoes);
    }

   public adiciona():void {

    const negociacao = Negociacao.criaDe(
        this.inputData.value,
        this.inputQuantidade.value,
        this.inputValor.value
      )

        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.upadate('Apenas negociações em dias úteis são aceitas.')
            return;
        }
        this.negociaoes.adiciona(negociacao)
        this.limparFormulario()
        this.atualizaView()
    }
    private ehDiaUtil(data: Date){
        return data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO

    }


    private limparFormulario():void{
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



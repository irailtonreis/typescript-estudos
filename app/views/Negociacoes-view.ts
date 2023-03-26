import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./View.js";

export class NegociacoesView extends View<Negociacoes> {
    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered"> 
                <thead>
                 <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                 </tr>
                </thead>
                <tbody>
                ${model.lista().map(negociacao => {
            return `
                   <tr>
                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                   </tr>`;
        }).join('')}
                </tbody>
            </table>
        `;
    }

    upadate(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template)
        this.elemento.innerHTML = template
    }
}
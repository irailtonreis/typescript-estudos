import { View } from "./View.js";
export class NegociacoesView extends View {
    template(model) {
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
                    <td>${this.formatar(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                   </tr>
                   <script>alert(oi)</script>
                   `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    upadate(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
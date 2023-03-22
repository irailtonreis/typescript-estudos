import { View } from "./View.js";

export class MensagemView extends View {
    
    template(model: string): string {
        return ` <p class="alert alert-info">${model}</p>`;
    }

    upadate(model: string): void {
        const template = this.template(model);
        console.log("element", this.elemento)
        this.elemento.innerHTML = template
    }
   
}
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    upadate(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}

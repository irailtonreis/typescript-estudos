export abstract class View<T> {
    protected elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    upadate(model: T): void {
        const template = this.template(model);
        console.log(template)
        this.elemento.innerHTML = template
    }
    
    abstract template(model: T): string 
}
  
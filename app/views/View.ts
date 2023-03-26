export abstract class View<T> {
    protected elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    public upadate(model: T): void {
        const template = this.template(model);
        console.log(template)
        this.elemento.innerHTML = template
    }

   protected abstract template(model: T): string 
}
  
export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let divisor = 1;
            let unidade = 'milisegundos'
            if(emSegundos){
                divisor = 100;
                unidade = "segundos"
            }
            const t1 = performance.now()
            const retorno = metodoOriginal.apply(this, args)

            const t2 = performance.now()
            console.log(`${propertKey} tempo de execução ${(t1 - t2) / divisor} ${unidade}.`)
            retorno
        };
        return descriptor
    }
}
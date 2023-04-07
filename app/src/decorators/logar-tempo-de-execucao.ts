export function logarTempoDeExecucao() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now()
            const retorno = metodoOriginal.apply(this, args)

            const t2 = performance.now()
            console.log(`${propertKey} tempo de execução ${(t1 - t2) / 1000} segundos.`)
            retorno
        };
        return descriptor
    }
}
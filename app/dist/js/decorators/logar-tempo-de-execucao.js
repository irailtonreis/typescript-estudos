export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 100;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertKey} tempo de execução ${(t1 - t2) / divisor} ${unidade}.`);
            retorno;
        };
        return descriptor;
    };
}
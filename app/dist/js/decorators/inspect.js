export function inspect() {
    return function (target, propertKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`----- Método ${propertKey}`);
            console.log(`----- parâmetros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`----- retorno ${JSON.stringify(retorno)}`);
            retorno;
        };
        return descriptor;
    };
}

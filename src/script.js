const Impuestos = require ('./impuestos.js')
const Cliente = require ('./clientes.js')

let impuestosCliente = new Impuestos (234567, 123456);
let cliente01 = new Cliente ('Danilo', impuestosCliente);

console.log(`El ${cliente01.name} debe pagar ${cliente01.calcularImpuesto()}`);
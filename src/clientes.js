const taxes = require ('./impuestos.js')

class Cliente {
    constructor (name, tax) {
        this._nombre = name;
        this._tax = tax;
    };
    get nombre () {
        return this._nombre;
    };
    set nombre (newName) {
        this._nombre = newName;
    }
    get impuesto () {
        return this._tax;
    };
    set impuesto (newTax) {
        this._tax = newTax;
    };
    calcularImpuesto () {
        return (this._tax.montoBrutoAnual-this._tax.deducciones)*0.21
    };
};

module.exports = Cliente;
class Impuestos {
    constructor (montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    };
    get montoBrutoAnual () {
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual (newValue) {
        this._montoBrutoAnual = newValue;
    }
    get deducciones () {
        return this._deducciones;
    }
    set deducciones (newValue) {
        this._deducciones = newValue;
    }
};

module.exports = Impuestos;
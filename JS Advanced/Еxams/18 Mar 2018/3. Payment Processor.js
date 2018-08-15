class PaymentProcessor {
    constructor(setOptions) {
        this.setOptions(setOptions);
        this.payments = [];
    }

    registerPayment(id, name, type, value) {
        this.payments.forEach(e => {
            if (e[0] === id) {
                throw new Error();
            }
        });
        if (id === "" || name === "" || typeof value !== "number") {
            throw new Error();
        }
        if (!this._setOptions.types.includes(type)) {
            throw new Error();
        }
        this.payments.push([id, name, type, value]);
    }

    deletePayment(id) {
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i][0] === id) {
                this.payments.splice(i, 1);
                return;
            }
        }
        throw new Error();
    }

    get(id) {
        let result = "";
        this.payments.forEach(e => {
            if (e[0] === id) {
                result += `Details about payment ID: ${e[0]}\n- Name: ${e[1]}\n- Type: ${e[2]}\n`;
                result += `- Value: ${e[3].toFixed(this._setOptions.precision)}`;
            }
        });
        if (result !== "") {
            return result;
        }
        throw new Error();
    }

    toString() {
        let balance = 0;
        this.payments.forEach(e => balance += e[3]);
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${balance.toFixed(this._setOptions.precision)}`;
    }

    setOptions(obj) {
        this._setOptions = {types: ["service", "product", "other"], precision: 2};
        for (let prop in obj) {
            this._setOptions[prop] = obj[prop];
        }
    }
}

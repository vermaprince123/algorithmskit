const { checkNumber, checkNumberArray } = require("../utils/typeCheckingFunctions");

class FenwickTree {
    constructor(size) {
        this.size = size;
        this.bit = new Array(size + 1).fill(0);
    }

    _checkInputType(value, variableName){
        try{
            checkNumber(value);
        }
        catch(error){
            throw new Error(`Wrong input type passed for ${variableName}. Expected a number`);
        }
    }

    build(arr){
        checkNumberArray(arr);
        for(let i=1; i<=this.size; i++){
            this.update(i, arr[i]);
        }
    }

    update(i, delta) {
        this._checkInputType(i, "Index");
        this._checkInputType(delta, "difference");
        for (; i <= this.size; i += i & -i) {
            this.bit[i] += delta;
        }
    }

    query(i) {
        this._checkInputType(i, "Index");
        let sum = 0;
        for (; i > 0; i -= i & -i) {
            sum += this.bit[i];
        }
        return sum;
    }

    rangeQuery(l, r) {
        this._checkInputType(l, "Left Index");
        this._checkInputType(r, "Right Index");
        return this.query(r) - this.query(l - 1);
    }
}

module.exports = FenwickTree;

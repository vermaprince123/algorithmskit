class FenwickTree {
    constructor(size) {
        this.size = size;
        this.bit = new Array(size + 1).fill(0);
    }

    build(arr){
        for(let i=1; i<=this.size; i++){
            this.update(i, arr[i]);
        }
    }

    update(i, delta) {
        for (; i <= this.size; i += i & -i) {
            this.bit[i] += delta;
        }
    }

    query(i) {
        let sum = 0;
        for (; i > 0; i -= i & -i) {
            sum += this.bit[i];
        }
        return sum;
    }

    rangeQuery(l, r) {
        return this.query(r) - this.query(l - 1);
    }
}

module.exports = FenwickTree;

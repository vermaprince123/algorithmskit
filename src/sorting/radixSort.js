/**
 * Performs Radix Sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function radixSort(arr) {
    if (arr.length === 0) return arr; 
    const maxi = Math.max(...arr);
    let base = 1;

    while (Math.floor(maxi / base) > 0) {
        const countArr = new Array(10).fill(0);
        const keyArr = new Array(arr.length);
        const sortedKeyArr = new Array(arr.length);

        for (let i = 0; i < arr.length; i++) {
            const digit = Math.floor(arr[i] / base) % 10;
            keyArr[i] = [digit, arr[i]];
            countArr[digit]++;
        }

        for (let i = 1; i < 10; i++) {
            countArr[i] += countArr[i - 1];
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = keyArr[i][0];
            const index = --countArr[digit];
            sortedKeyArr[index] = keyArr[i];
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = sortedKeyArr[i][1];
        }

        base *= 10;
    }

    return arr;
}

module.exports = radixSort;

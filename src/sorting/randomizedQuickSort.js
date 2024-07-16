/**
 * Performs Randomized Quick Sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */

function randomizedQuickSort(arr) {
    if (arr.length <= 1) return arr;  // Edge case: empty or single-element array
    quickSort(0, arr.length - 1, arr);
    return arr;
}

function quickSort(start, end, arr) {
    if (start >= end) return;
    const pivot = partition(start, end, arr);
    quickSort(start, pivot - 1, arr);
    quickSort(pivot + 1, end, arr);
}

function partition(start, end, arr) {
    const range = end - start + 1;
    const p = Math.floor(Math.random() * range) + start;

    let left = start + 1;
    let right = end;

    let temp = arr[p];
    arr[p] = arr[start];
    arr[start] = temp;

    while (left <= right) {
        while (left <= right && arr[left] <= arr[start]) left++;
        while (left <= right && arr[right] > arr[start]) right--;

        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    temp = arr[start];
    arr[start] = arr[right];
    arr[right] = temp;

    return right;
}

module.exports = randomizedQuickSort;

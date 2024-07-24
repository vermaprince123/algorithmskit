import { checkNumberArray } from "../utils/typeCheckingFunctions";


/**
 * Performs Count Sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
export function countSort(arr){
    try{
        checkNumberArray(arr);
    }
    catch (error){
        throw error;
    }
    
    const n = arr.length;

    const maxi = Math.max(...arr);
    const mini = Math.min(...arr);

    const range = maxi-mini+1;
    const countArr = new Array(range).fill(0);

    for(let i=0; i<n; i++){
        countArr[arr[i] - mini]++;
    }

    for(let i=1; i<range; i++){
        countArr[i] += countArr[i-1];
    }

    const ans = new Array(n).fill(0);

    for(let i=n-1; i>=0; i--){
        let num = arr[i]-mini;
        let position = countArr[num]--;
        
        ans[position-1] = arr[i];
    }


    return ans;
};

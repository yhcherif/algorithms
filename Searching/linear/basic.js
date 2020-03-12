'use strict';

/**
 * Basic Linear search implementation
 * Inputs:
 *     array: the elements we are searching a given element in.
 *     size: the size of the array.
 *     x: the element we searching its presence in the array.
 * Runnig time:
 *     - Best-case: O(1); When the element we are searching is ths first element in the  array.
 *     - Worst-case: O(n) for n this size of the array. When the ellement we are searching is the last element in the array.
 * Requires the array to be sorted? No.
 */

const search = (array, size, x) => {
    let answer = null;
    for (let i = 0; i <= size; i++) {
        if(array[i] == x){
            answer = i;
        }
    }

    return answer;
}


module.exports = search;

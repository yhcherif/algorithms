'use strict';

/**
 * Binary search implementation
 * Inputs:
 *     array: the elements we are searching a given element in.
 *     p: index of the first element of the array.
 *     r: index of the last element of the array.
 *     x: the element we searching its presence in the array.
 * Runnig time:
 *     - Best-case: O(1); When the element we are searching is ths first element in the  array.
 *     - Worst-case: O(lg n) for n this size of the array. When the ellement we are searching is the last element in the array.
 * Requires the array to be sorted? Yes.
 */

const search = (array, p, r, x) => {
    if (p > r) {return null;}

    let q = Math.floor((p+r) / 2);

    if (array[q] == x) {return q;}
    if (array[q] > x) {return search(array, p, q - 1, x);}
    if (array[q] < x) {return search(array, q + 1, r, x);}
}


module.exports = search;

//Write a monkey patch of quick sort that accepts a callback

Array.prototype.myQuickSort = function (callback) {
  if (this.length <= 0) return this;
  let pivot = this.shift();
  let left = this.mySelect((el) => callback(el, pivot) < 0);
  let right = this.mySelect((el) => callback(el, pivot) > 0);
  return left.myQuickSort(callback).concat([pivot]).concat(right.myQuickSort(callback))
};

console.log('-------MY QUICK SORT-------');
let cb8 = function (el, pivot) {
  if (el > pivot) {
    return 1;
  } else {
    return -1;
  }
};
console.log([9,8,7,6,5,4,3,2,1].myQuickSort(cb8).equals([1,2,3,4,5,6,7,8,9]));
console.log([7,6,2,-3,8,4,5,3,9,1].myQuickSort(cb8).equals([-3,1,2,3,4,5,6,7,8,9]));

// binary search

Array.prototype.myBsearch = function (target){
  if (this.length === 0) return null;
  let mid = Math.floor(this.length / 2);
  if (this[mid] === target) return mid;
  if (this[mid] > target) {
    return this.slice(0, mid).myBsearch(target);
  } else {
    return this.slice(mid + 1, this.length).myBsearch(target) + mid + 1;
  }
};

console.log('-------MY BSEARCH-------');
console.log([1,2,3,4,5,6,7,8,9].myBsearch(1) === 0);
console.log([1,2,3,4,5,6,7,8,9].myBsearch(9) === 8);
console.log([1,2,3,4,5,6,7,8,9].myBsearch(4) === 3);
console.log([1,2,3,4,5,6,7,8,9].myBsearch(-3) === null);

// merge sort

Array.prototype.myMergeSort = function (callback) {
  if (this.length === 1) return this ;
  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).myMergeSort(callback);
  let right = this.slice(mid, this.length).myMergeSort(callback);
  return merge(left, right, callback);
};

let merge = function (left, right, callback) {
  let sorted = [];
  while (left.length > 0 && right.length > 0) {
    if (callback(left[0], right[0]) < 0) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left).concat(right);
};

console.log('-------MY MERGE SORT-------');
let cb9 = function (el1, el2) {
  if (el1 > el2) {
    return 1;
  } else {
    return -1;
  }
};
console.log([9,8,7,6,5,4,3,2,1].myMergeSort(cb9).equals([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
console.log([7,6,2,-3,8,4,5,3,9,1].myMergeSort(cb9).equals([ -3, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));

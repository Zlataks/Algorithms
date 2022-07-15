function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right-left)/2 + left);
        if (arr[mid] === target) {
            return mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } 
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9];
console.log(binarySearch(arr, 2));
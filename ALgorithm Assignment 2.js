// QUESTION 1

function binarySearch(array, target) {
    left = 0;
    right = array.length-1;
    while (left<=right) {
        let mid = Math.floor((left+right)/2);
        if (target === array[mid]) {
            return "Element Found";
        }
        else if (target<array[mid]) {
            right= mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return "Element Not Found";
}

// console.log(binarySearch(nums, 35))


// QUESTION 2

function divisible(array) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > 15) {
      count++;
    } else {
    }
  }

  return count;
}
// console.log(divisible(test))


// QUESTION 3

function divisible(array,x, y) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= x && array[i] <= y) {
      count++;
    } else {
    }
  } 

  return count;
}
// console.log(divisible([3 ,3 ,3, 5, 18, 6, 20], 15, 30))


// QUESTION 4

function highestSum (x, y) {
    let sum1 = x.reduce(function(a, b) {return a + b}, 0)
    let sum2 = y.reduce(function(a, b) {return a+b}, 0)
    if (sum1>sum2) {
        return sum1
    } else {
        return sum2
    }
}
// console.log(highestSum([30], [3, 6, 2, 6]))


// QUESTION 5

function kthSmallest(array,k) {
    array.sort((a,b) => a-b);
    return array[k-1]
}

// console.log(kthSmallest([7, 10, 4, 3, 20, 15], 4))
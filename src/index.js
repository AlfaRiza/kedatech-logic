const Utils = {
  SortDescending: function (numbers) {
    const length = numbers.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }

    return numbers;
  },
  maxSum: function (arr, num) {
    if (num > arr.length) {
      return null;
    }

    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
      let tempSum = 0
      for (let j = i; j < num + i; j++) {
        tempSum += Number(arr[j] || 0)
      }
      maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
  },
  nestedObject: function (obj) {
    let sum = 0;

    for (const key in obj) {
      if (typeof obj[key] === "object") {
        sum += Utils.nestedObject(obj[key]);
      } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }

    return sum;
  },
};

module.exports = Utils;

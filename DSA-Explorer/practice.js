function sumTwoSmallestNumbers(arr) {
  let firstLowest = Infinity;
  let secondLowest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstLowest) {
      secondLowest = firstLowest;
      firstLowest = arr[i];
    } else if (arr[i] < secondLowest) {
      secondLowest = arr[i];
    }
  }

  return firstLowest + secondLowest;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

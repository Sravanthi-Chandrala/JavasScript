function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    let firstLargest = Math.max(arr[0], arr[1]);
    let secondLargest = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const arr = [12, 10, 6, 40];
const result = findSecondLargest(arr);
console.log("Second largest element:", result);


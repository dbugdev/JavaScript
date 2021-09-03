class SortHandler {
  static selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  static bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  static insersionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      sort(i + 1);
    }
    function sort(last) {
      if (last === 0 || arr[last] > arr[last - 1]) {
        return;
      }
      [arr[last], arr[last - 1]] = [arr[last - 1], arr[last]];
      sort(--last);
    }
    return arr;
  }
}

module.exports = SortHandler;

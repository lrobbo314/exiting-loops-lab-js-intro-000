function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.lenth; i++) {
    if (array[i]===stopValue) {
      break;
    }
    array[i] = changeValue;
  }
}
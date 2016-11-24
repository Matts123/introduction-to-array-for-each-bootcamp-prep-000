function changeCompletely(element, index, array) {
  array[index] = element + Math.random() * 100 + "!!!" 
}


function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

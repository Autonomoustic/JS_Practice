arr = [1, 2, 3, 4, 5, 6]

function myForEach (arr) {
  let keys_arr = []
  for (let key in arr) {
    keys_arr.push(key)
  }
  for (i = 0; i < keys_arr.length; i++) {
    arr[keys_arr[i]]
  }
  return arr
}

function myMap (arr, callback) {
  let newArr = []
  let keys_arr = []
  for (let key in arr) {
    keys_arr.push(key)
  }
  for (i = 0; i < keys_arr.length; i++) {
    newArr.push(callback(arr[keys_arr[i]]))
  }
  return newArr
}

function myFilter (arr, callback) {
  let newArr = []
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function myFind (arr, callback) {
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i]
    }
  }
}

function myReduce (arr, callback, acc = 0) {
  let answer = acc
  for (let i = 0; i < arr.length; i++) {
    	answer = callback(answer, arr[i])
  }
  return answer
}

function objToArray (obj) {
  if (is(obj, 'object')) {
    const arr = Object.entries(obj)
    return arr.map(pair => [pair[0], allObjsToArray(pair[1])])
  } else {
    return obj
  }
}

function is (object, type) {
  const objectType = Object.prototype.toString.call(null)
		.split(' ')[1]
		.slice(0, -1)
  return objectType.toLowerCase() === type.toLowerCase()
}

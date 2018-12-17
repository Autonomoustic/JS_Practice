let data = [
  {
    name: 'Mr. Ruffles',
    species: 'dog'
  },
  {
    name: 'Felix',
    species: 'cat'
  },
  {
    name: 'Sir Woofington III',
    species: 'dog'
  },
  {
    name: 'Lord Banoonoo',
    species: 'monkey'
  },
  {
    name: 'Max',
    species: 'dog'
  },
  {
    name: 'Ziggy',
    species: 'iguana'
  },
  {
    name: 'Raptor',
    species: 'canary'
  },
  {
    name: 'Howard',
    species: 'iguana'
  },
  {
    name: 'Lemon',
    species: 'cat'
  },
  {
    name: 'Samuel',
    species: 'monkey'
  },
  {
    name: 'Joey',
    species: 'iguana'
  }
]

function species (data) {
  const species = data.map(dog => Object.values(dog)).map(dog => dog[1])
  return [...new Set(species)]
}

function toObj (arr) {
  let obj = new Object()
  for (i = 0; i < arr.length; i++) {
    obj[arr[i]] = []
  }
  return obj
}

function speciesObj (data) {
  const speciesObject = toObj(species(data))
  data.forEach(animal => {
    animal.id = speciesObject[animal.species].length + 1
    speciesObject[animal.species].push(animal)
  })
  return speciesObject
}

//----------------------------------------------

const arrayToObj = array => {
  const obj = {}
  array.forEach(item => {
    if (obj[item.species] === undefined) {
      obj[item.species] = []
    } 
    item.id = obj[item.species].length + 1
    obj[item.species].push(item)
  })
  return obj
}

arrayToObj(data)

const arrayToObj = array => {
  return array.reduce((obj, item) => {
    if (obj[item.species] === undefined) {
      obj[item.species] = []
    }
    item.id = obj[item.species].length + 1
    obj[item.species].push(item)
    return obj
  }, {})
}

array.reduce((filteredArray, item) => {
  if (item.valid === true) {
    filteredArray.push(item)
  }
  return filteredArray
}, [])

{
  // get an array of unique species
  // create an empty object
  // iterate of unique species names
    // empty object.species name = filtered original array animal.species === speices name
}

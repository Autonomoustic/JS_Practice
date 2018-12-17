const sentences = [
  'The happy cat lapped up the milk joyously.',
  'Happy but tired, the milk man joyously turned in to bed'
]

const splitSentences = sentences =>
  sentences.map(sentence => sentence.replace(/[\.,]/g, '').toLowerCase().split(' '))

function arrayOfAllWords (splitSentences) {
  let newArr = []
  splitSentences.forEach(sentence => sentence.forEach(word => newArr.push(word)))
  return newArr
}

function arraysToObj (sentences) {
  let obj = {}
  sentences.forEach((sentence, sentenceIndex) => {
    sentence.forEach((word, wordIndex) => {
      obj[word] ?
        obj[word].push({sentence: sentenceIndex, word: wordIndex}) :
        obj[word] = [{sentence: sentenceIndex, word: wordIndex}]
    })
      // if (obj[item] === undefined) {
      //   obj[item] = []
      // }
      // obj[item].push({sentence: arrays.indexOf(array), word: array.indexOf(item)})
  })
  return obj
}

function dataAboutSentence (array) {
  return obj = {
    'num_sentences': array.length,
    'num_words': elementsInArray(array),
    'num_unique_words': unique(array),
    'most_frequently use word': mostFrequent(array),
    'alphabetized_Words': alphabetized(array),
    'word location': arraysToObj(array)
  }
}

const alphabetized = array => [...new Set(arrayOfAllWords(array))].sort()

const mostFrequent = array => Object.keys(occurances(arrayOfAllWords(array)))[0]

const unique = array => [...new Set(arrayOfAllWords(array))].length

const elementsInArray = array => arrayOfAllWords(array).length

function occurances (arr) {
  return arr.reduce((counts, num) => {
    counts[num] = counts[num] ? counts[num] + 1 : 1
    return counts
  }, {})
}

// create empty obv
// iterate over each array
// add each element of array to the empty obj as a key

// for each key in obj,
// add index of which sentence and word as obj for every

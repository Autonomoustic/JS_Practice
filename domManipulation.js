function pigLatin () {
  const textElement = document.querySelector('#bodyContent')
  const text = textElement.innerText
  const words = text.split(' ')

  textElement.innerText = words.map(word => {
    word = word.toLowerCase()
    if (['a', 'e', 'i', 'o', 'u'].indexOf(word[0]) > -1) {
      return word = word + 'way'
    } else {
      for (let i = 0; i < word.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(word[i]) > -1) {
          let firstcons = word.slice(0, i)
          let middle = word.slice(i, word.length)
          word = middle + firstcons + 'ay'
          break
        }
      }
      return word
    }
  }).join(' ')
}

// remove anything on a DOM
document.addEventListener('click', event => {
  event.target.innerHTML = ''
})

// make any 'p' tag editable




document.addEventListener('click', event => {
	if(event.target.localName === 'p'){
		const textarea = document.createElement('textarea')
    const button = document.createElement('button')
    let target = event.target

    button.innerText = 'submit'
    textarea.rows = 4
    textarea.cols = 100
    textarea.value = target.innerText

    button.addEventListener('click', event => {
      //do the reverse
      //create a p tag
      //select the text in the text area
      //append p tag target
      const p = document.createElement('p')
      p.innerText = target.innerText
      target.innerHTML = ''
      target.append(p)
    })
    target.innerHTML = ''
    target.append(textarea)
    target.append(button)
  }
})



const wordClicked =

const getDefintion = wordClick =>
fetch(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${wordClicked}`)
  .then(res => res.json()).then(json => console.log(json))


const textOnPage = () => {
  const elements = document.getElementsByTagName("*")
  const elementsArray = [...elements]
  elementsArray.forEach(element => console.log(({element: element, element_text: element.innerText})))
}

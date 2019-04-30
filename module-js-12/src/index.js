
const sourse = document.querySelector('.template').innerHTML.trim()
const template = Handlebars.compile(sourse)
const cardList = document.querySelector('.card-list')
const input = document.querySelector('#input')
const form = document.querySelector('.form')
const button = document.querySelector('btn')


let linkArray = []

const LOCALSTORAGE = (w => {
  if (!w) return

  const isActive = 'localStorage' in w

  const get = key => {
    try {
      const serializedState = localStorage.getItem(key)

      return serializedState === null ? undefined : JSON.parse(serializedState)
    } catch (err) {
      console.error('Get state error: ', err)
    }
  }

  const set = (key, value) => {
    try {
      const serializedState = JSON.stringify(value)
      localStorage.setItem(key, serializedState)
    } catch (err) {
      console.error('Set state error: ', err)
    }
  }

  const publicAPI = {
    isActive,
    get,
    set
  }

  return publicAPI
})(window)

;(function preload () {
  if (LOCALSTORAGE.get('linkArray') === undefined) return
  linkArray = LOCALSTORAGE.get('linkArray')
  markUp(linkArray)
  console.log(linkArray)
})()

function addCard (e) {
  e.preventDefault()
  if (input.value === '') {
    alert('Please enter your link')
    form.reset()
    return
  } else if (!checkValue(input.value, linkArray)) {
    linkArray.unshift({ url: input.value })
    LOCALSTORAGE.set('linkArray', linkArray)
  } else {
    alert('Link already exists in bookmark')
    form.reset()
    return
  }
  cardList.innerHTML = ''
  markUp(linkArray)
  form.reset()
}

function checkValue (value, arr) {
  return arr.some(el => el.url === value)
}

function markUp (arr) {
  let markUp = arr.reduce((acc, link) => acc + template(link), '')
  cardList.insertAdjacentHTML('afterbegin', markUp)
}

function removeCard (e) {
  let event = e.target
  if (event.classList.value === 'delete') {
    event.parentNode.remove()
    linkArray = linkArray.filter(el => el.url !== event.previousElementSibling.innerText)
    LOCALSTORAGE.set('linkArray', linkArray)
    cardList.innerHTML = ''
    markUp(linkArray)
  }
}
form.addEventListener('submit', addCard)
cardList.addEventListener('click', removeCard)


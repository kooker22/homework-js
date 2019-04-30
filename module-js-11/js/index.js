'use strict'
const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  }
]

const filter = { size: [], color: [], release_date: [] }
const source = document.querySelector('#card').innerHTML.trim()
const container = document.querySelector('#cards')
const form = document.querySelector('form')
const input = document.querySelector('input')
const temp = Handlebars.compile(source);
const markup = laptops.reduce((acc,el) => acc + temp(el),"")
container.innerHTML = markup;

function resetCheckboxArray() {
  filter.color = [];
  filter.size = [];
  filter.release_date = [];
}

function filterArray(arr) {
  let result;
  
 return result = arr
    .filter(
      el =>
        filter.size.includes(String(el.size)) || filter.size.length === 0
    )
    .filter(
      el =>
        filter.color.includes(String(el.color)) || filter.color.length === 0
    )
    .filter(
      el =>
        filter.release_date.includes(String(el.release_date)) ||
        filter.release_date.length === 0
    );
}

function GetCheckboxes() {
  let checkedBoxes = Array.from( document.querySelectorAll("input[type=checkbox]:checked"));
  let arrayValues = checkedBoxes.forEach(el => filter[el.name].push(el.value));
  //   let regSize = /\b\d{2}\b/
  // let regColor = /[white,gray,black]/g
  // let regDate = /\b\d{4}\b/
  // for (let i = 0; i < checkboxes.length; i++) {
  //   if (checkboxes[i].checked && checkboxes[i].value.match(regSize)) {
  //     filter.size.push(checkboxes[i].value)
  //   } else if (checkboxes[i].checked && checkboxes[i].value.match(regColor)) {
  //     filter.color.push(checkboxes[i].value)
  //   } else if (checkboxes[i].checked && checkboxes[i].value.match(regDate)) {
  //     filter.release_date.push(checkboxes[i].value)
  //   }
  // }
  filterArray(laptops);
}

form.addEventListener('submit',filterOutput);

 function filterOutput(e){
  resetCheckboxArray();
  e.preventDefault();
  GetCheckboxes();
 newHTML(filterArray(laptops));
 }

        function newHTML(arr){
   if(arr.length === 0){
    filterArray([])
     alert('Товара с такими характеристиками нет в наличии!');
   }
  const markupFilter = arr.reduce((acc,el) => acc + temp(el),"");
  container.innerHTML = markupFilter;
 }
  
  


// задание 2
// const list = document.querySelector('ul');
// const firstChild = list.firstElementChild;
// firstChild.style.color = 'red';
// const lastChild = list.lastElementChild;
// lastChild.style.color = 'blue';


//--------------------------------------------


// задание 3

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const list = document.querySelector('ul');

// let html = document.createElement('li');
// let css = document.createElement('li');
// let js = document.createElement('li');
// let react = document.createElement('li');
// let node = document.createElement('li');


// list.classList.add('list');


// html.textContent = 'HTML';
// css.textContent = 'CSS';
// js.textContent = 'JavaScript';
// react.textContent = 'REACT';
// node.textContent = 'Node';



// list.prepend(html);
// list.append(css);
// list.append(js);
// list.append(react);
// list.append(node);

// ----------------------------------------------


// задание 4
// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

//   const gallery = document.querySelector('ul');
//   let li = document.createElement('li');
//   let img = document.createElement('img');
//   img.style.width = '300px';
  
//   img.setAttribute('url', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
//   img.setAttribute('alt', 'Lion on Grass Field during Daytime');
//   gallery.classList.add('gallery');
//   gallery.append(li);
//   li.append(img);
//   for(el of galleryItems) {
//       img.setAttribute('url', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
//       img.setAttribute('alt', galleryItems.alt);
//       gallery.append(li);
//       li.append(img);
//   }


// ---------------------------------------------------------------------
// задание 7

let root = document.querySelector('#root');

function createBoxes(num) {
//   for(let i = 0; i <= num; i++ ) {
    let item = document.createElement('div');
    item.style.width = '30px';
    item.style.height= '30px';
    root.append(item); 
//   }
}
console.log(createBoxes(2));

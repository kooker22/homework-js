'use strict'
const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];
function CreateMovieCard(img, title,text,link) {
   this.img = img;
   this.title = title;
   this.text = text;
   this.link = link;
//узлы

let body = document.querySelector('body');
let movie = document.createElement('div');
let movieImage = document.createElement('img');
let movieBody = document.createElement('div');
let movieTitle = document.createElement('h2');
let movieDescription = document.createElement('p');
// let movieDate = document.createElement('p');
let movieLink = document.createElement('a');
let linkWrap = document.createElement('p');

//классы
movie.classList.add('movie');
movieImage.classList.add('movie__image');
movieBody.classList.add('movie__body');
movieTitle.classList.add('movie__title');
movieDescription.classList.add('movie__description');
linkWrap.classList.add('movie__rating');

// аттрибуты
movieImage.setAttribute('src',img);
movieImage.setAttribute('alt','movie image');
movieLink.setAttribute('href', link);

// текст контент
movieDescription.textContent = text;
movieTitle.textContent = title;
movieLink.textContent = link;

// добавление в хтмл
body.append(movie);
movie.prepend(movieImage);
movie.append(movieBody);
movieBody.append(movieTitle);
movieBody.append(movieDescription);
movieBody.append(linkWrap);
linkWrap.append(movieLink);
}
  
function createCards(posts) {
  posts.forEach(el => new CreateMovieCard(el.img, el.title, el.text, el.link));
    
}

createCards(posts);
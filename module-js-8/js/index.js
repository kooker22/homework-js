'use strict'
const galleryItems = [
  {
    preview: 'images/preview/photo1.jpeg',
    fullview: 'images/fullsize/photo1.jpeg',
    alt: 'alt text 1'
  },
  {
    preview: 'images/preview/photo2.jpeg',
    fullview: 'images/fullsize/photo2.jpeg',
    alt: 'alt text 2'
  },
  {
    preview: 'images/preview/photo3.jpeg',
    fullview: 'images/fullsize/photo3.jpeg',
    alt: 'alt text 3'
  },
  {
    preview: 'images/preview/photo4.jpeg',
    fullview: 'images/fullsize/photo4.jpeg',
    alt: 'alt text 4'
  },
  {
    preview: 'images/preview/photo5.jpeg',
    fullview: 'images/fullsize/photo5.jpeg',
    alt: 'alt text 5'
  },
  {
    preview: 'images/preview/photo6.jpeg',
    fullview: 'images/fullsize/photo6.jpeg',
    alt: 'alt text 6'
  }
]

function galery () {
  let imgGal = document.querySelector('.image-gallery')

  let fullView = document.createElement('div');
  let preview = document.createElement('ul');
  let imgFull = document.createElement('img');

  fullView.classList.add('fullview');
  preview.classList.add('preview');

  imgFull.setAttribute('src', 'images/fullsize/photo1.jpeg')
  imgGal.prepend(fullView);
  imgGal.append(preview);
  fullView.append(imgFull);

  galleryItems.forEach(el => {
    let li = document.createElement('li');
    let img = document.createElement('img');

    img.setAttribute('src', el.preview);
    img.setAttribute('data-fullview', el.fullview);
    img.setAttribute('alt', el.alt);
    li.classList.add('li');
    preview.append(li);
    li.append(img);
  })

  function changeSize (e) {
    if (e.target.nodeName !== 'IMG') {

    } else {
      imgFull.setAttribute('src', e.target.getAttribute('data-fullview'))
    }
  }

  preview.addEventListener('click', changeSize)
  function changeCol (e) {
    let target = e.target;
    target.style.color = 'black';
    target.style.opacity = 0.8;
  }
  function removeCol (e) {
    let target = e.target;
    target.style.color = 'none';
    target.style.opacity = 1;
  }

  preview.addEventListener('mouseover', changeCol);
  preview.addEventListener('mouseout', removeCol);
}

galery()

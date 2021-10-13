const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  galleryUlEl: document.querySelector('.js-gallery'),
  galleryLightboxWindow: document.querySelector('.lightbox'),
  galleryOverlay: document.querySelector('.lightbox__overlay'),
  galleryContent: document.querySelector('.lightbox__content'),
  galleryLink: document.querySelector('.gallery__link'),
  modalImage: document.querySelector('.lightbox__image'),
  buttonClose: document.querySelector('[data-action="close-lightbox"]'),
}
const galleryMarkup = createGalleryCardMarkup(galleryItems);

refs.galleryUlEl.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryUlEl.addEventListener('click', onClick);
refs.buttonClose.addEventListener('click', offCloseButton);
document.addEventListener('keydown', pressEscKeyboard);
document.addEventListener('click', closeOverlay);



function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
    onclick="return false"
  >
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </li>
      `
    })
    .join('');
  
}

function onClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  refs.galleryLightboxWindow.classList.add('is-open');
  refs.modalImage.src = e.target.dataset.source;
  refs.modalImage.alt = e.target.alt;
}

function offCloseButton(e) {
  refs.galleryLightboxWindow.classList.remove('is-open');
  refs.modalImage.src = "";
  refs.modalImage.alt = "";
  
}

function pressEscKeyboard(e) {
  if (e.key === 'Escape') {
    refs.galleryLightboxWindow.classList.remove('is-open');
    refs.modalImage.src = "";
    refs.modalImage.alt = "";
    
  }
  console.log(e.key)
  
}
function closeOverlay(e) {
if (e.target.nodeName !== 'IMG') {
    refs.galleryLightboxWindow.classList.remove('is-open');
    refs.modalImage.src = "";
    refs.modalImage.alt = "";
  }
}
// document.addEventListener("keydown", (e) => {
//     console.log(e.code);
//     if (e.key === "ArrowRight") {
//         plusSlide()
//     }
//     if (e.key === "ArrowLeft") {
//         minusSlide()
//     }
// })

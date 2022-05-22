import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const imagesMarcup = createImagesCardsMarcup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarcup)

function createImagesCardsMarcup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>
            `
        })
        .join('');
};

gallery.addEventListener('click', blockLinkOnImageClic);
gallery.addEventListener('click', openModalImage);

function blockLinkOnImageClic(evt) {
    evt.preventDefault();
};

function openModalImage(evt) {
    const clicOnImage = evt.target.classList.contains('gallery__image');
    const modalImage = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="100%" height="100%">
    `).show();
    if (!clicOnImage) {
        return;
    }
    return modalImage;
}


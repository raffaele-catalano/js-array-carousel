const pictures = [
    'assets/img/01.webp',
    'assets/img/02.webp',
    'assets/img/03.webp',
    'assets/img/04.webp',
    'assets/img/05.webp',
]

    // console.log('array picture ->',pictures);

// elements
const picsWrapper = document.querySelector('.pics-wrapper');
const arrowNext = document.querySelector('.next');
const arrowPrev = document.querySelector('.prev');

    // contatore
let counterPic = 0;


for (let i = 0; i < pictures.length; i++) {

    const pic = pictures[i];

    picsWrapper.innerHTML += 
    `
    <img class="pic hide" src="${pic}">
    `
}

const items = document.getElementsByClassName('pic');
    // console.log('raccolta delle immagini per classe', items);.

arrowNext.addEventListener('click', function() {

    items[counterPic].classList.add('hide');

    counterPic++;
    items[counterPic].classList.remove('hide');

})

arrowPrev.addEventListener('click', function() {
    
    items[counterPic].classList.add('hide');

    counterPic--;
    items[counterPic].classList.remove('hide');

})

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
const circlesWrapper = document.querySelector('.circles');
const arrowNext = document.querySelector('.next');
const arrowPrev = document.querySelector('.prev');

    // contatore
let counterPic = 0;


for (let i = 0; i < pictures.length; i++) {

    const pic = pictures[i];

    picsWrapper.innerHTML += `<img class="pic hide" src="${pic}">`

    circlesWrapper.innerHTML += `<div class="circle"></div>`
}

const items = document.getElementsByClassName('pic');
    items[counterPic].classList.remove('hide');
    // console.log('raccolta delle immagini per classe', items);.

const circlesGroup = document.getElementsByClassName('circle');
    circlesGroup[counterPic].classList.add('active');

arrowPrev.classList.add('hide');


arrowNext.addEventListener('click', function() {

    circlesGroup[counterPic].classList.remove('active');

    items[counterPic].classList.add('hide');

    counterPic++;
    items[counterPic].classList.remove('hide');

    circlesGroup[counterPic].classList.add('active');

    if (counterPic == pictures.length - 1) {
        arrowNext.classList.add('hide');
    } else {
        arrowPrev.classList.remove('hide');
    }
    
})

arrowPrev.addEventListener('click', function() {

    circlesGroup[counterPic].classList.remove('active');
    
    items[counterPic].classList.add('hide');

    counterPic--;
    items[counterPic].classList.remove('hide');

    circlesGroup[counterPic].classList.add('active');

    if (counterPic === 0) {
        arrowPrev.classList.add('hide');
    }else {
        arrowNext.classList.remove('hide');
    }
})

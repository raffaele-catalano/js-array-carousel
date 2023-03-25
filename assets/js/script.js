const pictures = [
    'assets/img/01.webp',
    'assets/img/02.webp',
    'assets/img/03.webp',
    'assets/img/04.webp',
    'assets/img/05.webp',
]

    console.log('array picture ->',pictures);



// 1
const picsWrapper = document.querySelector('.pics-wrapper');

for (let i = 0; i < pictures.length; i++) {

    const pic = pictures[i];

    picsWrapper.innerHTML += 
    `
    <img class="pic hide" src="${pic}">
    `
}
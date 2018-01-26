let $ = document.querySelector.bind(document);

let stars = $('.loader').querySelectorAll(".star");
for(let i = 0; i < stars.length; i++){
    let star = stars[i];
    setTimeout(() => {
        star.classList.add('anim');
    }, 200*i);
}

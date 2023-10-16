let btnSeeMore = document.querySelectorAll('.about-text-btn')[0]
let divAbout = document.querySelectorAll('.about')[0]
let moreText = document.querySelectorAll('.about-text-more')[0]
let viewMore = false

console.log(divAbout);
btnSeeMore.addEventListener('click', ()=>{
    if (viewMore == false) {
        divAbout.style.transition = '400ms'
        // divAbout.style.height = "950px"
        moreText.style.height = 'auto'

        btnSeeMore.textContent = "Ver menos"
        viewMore = true
    } else {
        moreText.style.height = '0'
        btnSeeMore.textContent = "Ver mais..."
        viewMore = false
    }

})

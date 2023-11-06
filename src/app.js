
let filter = document.querySelectorAll('.projects-filter')[0]
let btnFilter = filter.querySelectorAll("span")
let mainProject = document.querySelectorAll('.main')
let secProject = document.querySelectorAll('.sec')


btnFilter.forEach(element => {
    element.addEventListener('click', filteProject)
});




function filteProject() {
    let child = this.parentElement.querySelectorAll('span')
    child.forEach(element => {
        element.style.background = ""
        element.style.color = ""
    });
    this.style.background = '#333'
    this.style.color = '#fdfdfd'
    if (this.textContent == "Principais") {
        mainShow("block")
        secShow("none")

    } else if (this.textContent == "Secundários") {
        mainShow("none")
        secShow("block")
    } else { 
        mainShow("block")
        secShow("block")
    }
}

function mainShow(e) {
    mainProject.forEach(element => {
        element.style.display = e
    });
}
function secShow(e) {
    secProject.forEach(element => {
        element.style.display = e
    });
}




btnFilter[0].click()
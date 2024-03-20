// Variáveis
let filter = document.querySelectorAll('.projects-filter')[0]
let btnFilter = filter.querySelectorAll(".projects-filter button")
let mainProject
let secProject
let btnContact = document.querySelector('#btn-contact')
let formContact = document.querySelector('#form-contact')
let btnSendEmail = document.querySelector('#btn-email')

let btnInit = document.querySelectorAll('[hreff="#home"')[0]
let btnAbout = document.querySelectorAll('[hreff="#about"')[0]
let btnProjects = document.querySelectorAll('[hreff="#projects"')[0]
let btnContactHd = document.querySelectorAll('[hreff="#contact"')[0]
let cardProjects
let countSpan = document.querySelectorAll('.count span')
const allSections = document.querySelectorAll('section')
let projectList = document.querySelectorAll('.projects-list')[0]


let isDragging
let startX
let scrollLeft

projectList.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - projectList.offsetLeft
    scrollLeft = projectList.scrollLeft
})

projectList.addEventListener('mouseup', () => {
    isDragging = false;
});

projectList.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - projectList.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste conforme necessário
    projectList.scrollLeft = scrollLeft - walk;
});




let allProjects = [
    {
        name: "FG.Torrent",
        main: true,
        tech: ["HTML", "CSS", "JS", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/FG.Torrent",
        webLink: "https://fg-torrent.onrender.com/",
        src: "img/FG.torrent.png",
    },
    {
        name: "FisioMov",
        main: true,
        tech: ["HTML", "CSS", "JS", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/Fisio-Mov",
        webLink: "https://fbianog.github.io/FisioMov-Front/public/html/index.html",
        src: "img/fisioMov.png",
    },
    {
        name: "Steam",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/Steam-CopSite",
        webLink: "https://fbianog.github.io/Steam-CopSite/",
        src: "img/Steam-CopySite.png",
    },
    {
        name: "Pokedex",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/Pokedex",
        webLink: "https://fbianog.github.io/Pokedex/",
        src: "img/Pokedex.png",
    },
    {
        name: "OpenClima",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/Pokedex",
        webLink: "https://fbianog.github.io/OpenClima/",
        src: "img/openClima.png",
    },
    {
        name: "Calculadora",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/Calculadora",
        webLink: "https://fbianog.github.io/Calculadora/",
        src: "img/calc.png",
    },
    {
        name: "App Estácio - Mobile",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/App-Estacio",
        webLink: "https://fbianog.github.io/App-Estacio/index.html",
        src: "img/estacio.png",
    },
    {
        name: "Jogo da Velha",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "",
        webLink: "",
        src: "",
    },
]







let countPage = 0

allSections.forEach(element => {
    element.style.transition = "1000ms ease-in-out"
})


btnInit.addEventListener('click', () => {
    if (window.innerWidth <= 1278) {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 0
        wheel("")
    }
})
btnAbout.addEventListener('click', () => {
    if (window.innerWidth <= 1278) {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 1
        wheel("")
    }
})
btnProjects.addEventListener('click', () => {
    if (window.innerWidth <= 1278) {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 2
        wheel("")
    }
})

btnContact.addEventListener('click', () => {
    if (window.innerWidth <= 1278) {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 3
        wheel("")
    }
}) // Scrola a página à section de "contato" ao clicar no button 


btnContactHd.addEventListener('click', () => {
    if (window.innerWidth <= 1278) {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 3
        wheel("")
    }
})
// Eventos


btnSendEmail.addEventListener('click', (e) => sendEmail(e)) // Envia o formulário de contato para meu Email


// list[0].style.animation = `slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 500ms both;`


function projectCard() {
    cardProjects.forEach((element, index) => {
        element.style.animation = "fade-in-right 0.6s ease-out";
        element.style.animationDelay = `${0.2 * index}s`;
        element.style.animationFillMode = "both";
    });
}



const home = document.querySelector('#home')
const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const contactt = document.querySelector("#contact")
// document.querySelectorAll(".logo")[0]

changeSpan(countPage)
function changeSpan(e) {
    countSpan.forEach((element, index) => {
        element.id = ""
        if (index == e) {
            element.id = "spanActive"
        }
    })
}

document.body.addEventListener('wheel', wheel)

function wheel(e) {

    if (e.deltaY > 0) {
        countPage += 1
        countPage > 3 ? countPage = 3 : ''
    }
    else if (e.deltaY < 0) {
        countPage -= 1
        countPage < 0 ? countPage = 0 : ''
    }

    if (countPage == 1) {
        home.style.top = "-100%"
        about.style.top = "0px"
        projects.style.top = "50%"
        contactt.style.top = "50%"
        changeSpan(countPage)
    } else if (countPage == 2) {
        home.style.top = "-100%"
        about.style.top = "-100%"
        projects.style.top = "0px"
        projectCard()
        contactt.style.top = "50%"
        changeSpan(countPage)
    } else if (countPage == 3) {
        home.style.top = "-100%"
        about.style.top = "-100%"
        projects.style.top = "-100%"
        contactt.style.top = "0px"
        changeSpan(countPage)
    } else if (countPage == 0) {
        home.style.top = "0px"
        about.style.top = "50%"
        changeSpan(countPage)
    }


}


// Funções

async function sendEmail(e) { // Envia o formulário de contato para meu Email
    e.preventDefault()

    const name = document.querySelector('[name="name"]').value
    const email = document.querySelector('[name="email"]').value
    const message = document.querySelector('[name="message"]').value
    if (name == "" || email == "" || message == "") {
        console.log("Preencha todos os dados")
        return
    }
    try {
        btnSendEmail.setAttribute("disabled", "true")
        await emailjs.sendForm('service_an5y8sf', 'template_3o8qe56', formContact);
        location.reload()
    } catch (error) {
        console.log('Erro ao enviar e-mail:', error);
    }
}

function filterProject() { // filtra os projetos de acordo com a categoria
    let child = this.parentElement.querySelectorAll('button')
    mainShow("none")
    secShow("none")
    child.forEach(element => {
        element.style.background = ""
        element.style.color = ""
    });
    this.style.background = '#333'
    this.style.color = '#fdfdfd'
    setTimeout(() => {
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
    }, 0);
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

function createProjects() {
    allProjects.forEach(element => {
        createProjectHtml(element)
    })

    mainProject = document.querySelectorAll('.main')
    secProject = document.querySelectorAll('.sec')
    btnFilter.forEach(element => { // filtra os projetos de acordo com a categoria
        element.addEventListener('click', filterProject)
    })
    cardProjects = document.querySelectorAll('.projects-card')
}

function createProjectHtml(e) {
    let newProject = document.createElement('div')
    let type = e.main == true ? "main" : "sec"
    newProject.classList = `projects-card ${type}`
    newProject.innerHTML = `
        <div class="card-data">
            <label for="">${e.tech.join(" / ")}</label>
            <h3>${e.name}</h3>
            <div class="card-links">
                <a href="${e.webCode}" target="_blank">Code</a>
                <a href="${e.webLink}" target="_blank">Site</a>
            </div>
        </div>
        <div class="card-image">
            <img src="${e.src}" alt="Imagem ilustrativa do site">
        </div>
    `
    projectList.appendChild(newProject)
}

// Chamadas

emailjs.init("ceAIIFLHMCK_ganFy")
wheel("")
createProjects()
btnFilter[0].click()
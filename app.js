// Variáveis
let allProjects = [ // Projetos
    {
        name: "FG.Hub",
        main: true,
        tech: ["React", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/FG.Hub",
        webLink: "https://fghub.vercel.app/",
        src: "img/FG.torrent.png",
        details: "Desenvolvida para otimizar a gestão de informações em recepções hospitalares. Oferece fácil acesso a senhas de planos de saúde, armazenamento de documentos, geração de guias de internação, uma lista de ramais e muito mais, tudo controlado por um painel de gestão eficiente."
    },
    {
        name: "MovieFilm",
        main: true,
        tech: ["React", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/MovieFilm",
        webLink: "https://moviefilme.vercel.app/",
        src: "img/movieFilm.png",
        details: "Aqui, você pode navegar por uma vasta biblioteca de filmes, acessar seus detalhes e informações sobre elencos. Crie uma lista de seus filmes favoritos. O MovieFilm é o lugar perfeito para planejar sua próxima sessão de cinema."
    },
    {
        name: "SeeBox",
        main: true,
        tech: ["React", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/SeeBox",
        webLink: "https://seebox.vercel.app/",
        src: "img/SeeBox.png",
        details: "Este sistema interconecta informações médicas, a recepção e a gestão de leitos, facilitando a comunicação entre diferentes setores do hospital. O aplicativo permite um acompanhamento completo do processo do paciente, desde sua entrada até a internação, garantindo uma resposta rápida e eficaz"
    },
    {
        name: "Giotrology",
        main: true,
        tech: ["React", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/Giotrology",
        webLink: "https://giotrology.vercel.app/",
        src: "img/Giotrology.png",
        details: "Projetado para que a proprietária possa destacar seus serviços astrológicos. Além de oferecer consultas e análises astrológicas, o site possui uma seção exclusiva para a publicação de artigos relacionados à astrologia. Cada artigo é criado e gerenciado por um sistema que os armazena em um banco de dados."
    },
    {
        name: "FinanceTS",
        main: true,
        tech: ["TypeScript", "React"],
        webCode: "https://github.com/FbianoG/FinanceTS",
        webLink: "https://ffinancets.vercel.app/",
        src: "img/financets.png",
        details: "Projeto que visa demostrar o uso de TypeScript junto ao React.js usando algorítmos para controle de gastos financeiros."
    },
    {
        name: "FisioMov",
        main: true,
        tech: ["HTML", "CSS", "JS", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/Fisio-Mov",
        webLink: "https://fbianog.github.io/FisioMov-Front/public/html/index.html",
        src: "img/fisioMov.png",
        details: "É um site de acompanhamento de tratamento fisioterapêutico online, equipado com IA para captura de movimento que orienta pacientes durante exercícios, garantindo a correta execução. Inclui um painel de gestão que permite a fisioterapeutas personalizar e monitorar os exercícios de cada paciente individualmente."
    },
    {
        name: "ToDoList",
        main: true,
        tech: ["React", "Node.js", "MongoDB"],
        webCode: "https://github.com/FbianoG/ToDoList-Back",
        webLink: "https://to-do-list-react-eight-ochre.vercel.app/",
        src: "img/ToDoList.png",
        details: "É um aplicativo prático de gerenciamento de tarefas que permite aos usuários adicionar, organizar e controlar suas atividades diárias. Com uma interface simples e intuitiva, os usuários podem facilmente criar listas de tarefas, definir prioridades e acompanhar o progresso de cada item."
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
        name: "Steam",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/Steam-CopSite",
        webLink: "https://fbianog.github.io/Steam-CopSite/",
        src: "img/Steam-CopySite.png",
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
        name: "Tabela Brasileirão",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/Api-Futebol",
        webLink: "https://fbianog.github.io/Api-Futebol/",
        src: "img/tabela.png",
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
        webCode: "https://github.com/FbianoG/JogoDaVelha",
        webLink: "https://fbianog.github.io/JogoDaVelha/",
        src: "img/velha.png",
    },
    {
        name: "Calculadora",
        main: false,
        tech: ["HTML", "CSS", "JS"],
        webCode: "https://github.com/FbianoG/Calculadora",
        webLink: "https://fbianog.github.io/Calculadora/",
        src: "img/calc.png",
    },

]
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const contactt = document.querySelector("#contact")
// const allSections = document.querySelectorAll('section')
let filter = document.querySelectorAll('.projects-filter')[0]
let btnFilter = filter.querySelectorAll(".projects-filter button")
let mainProject
let secProject
let btnContact = document.querySelector('#btn-contact')
let formContact = document.querySelector('#form-contact')
const btnSendEmail = document.querySelector('#btn-email')
let btnInit = document.querySelectorAll('[hreff="#home"')[0]
let btnAbout = document.querySelectorAll('[hreff="#about"')[0]
let btnProjects = document.querySelectorAll('[hreff="#projects"')[0]
let btnContactHd = document.querySelectorAll('[hreff="#contact"')[0]
let cardProjects
let countSpan = document.querySelectorAll('.count span')
let projectList = document.querySelectorAll('.projects-list')[0]
let isDragging
let startX
let scrollLeft
let countPage = 0 // Contador da "section" atual


// Eventos

projectList.addEventListener('mousedown', (e) => {
    isDragging = true
    startX = e.pageX - projectList.offsetLeft
    scrollLeft = projectList.scrollLeft
})

projectList.addEventListener('mouseup', () => {
    isDragging = false
})

projectList.addEventListener('mousemove', (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - projectList.offsetLeft;
    const walk = (x - startX) * 2
    projectList.scrollLeft = scrollLeft - walk;
})

btnInit.addEventListener('click', () => { // Evento - scrola a página até o "Início"
    if (window.innerWidth <= 1278) {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 0
        wheel("")
    }
})

btnAbout.addEventListener('click', () => { // Evento - scrola a página até o "Sobre"
    if (window.innerWidth <= 1278) {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 1
        wheel("")
    }
})

btnProjects.addEventListener('click', () => { // Evento - scrola a página até o "Projetos"
    if (window.innerWidth <= 1278) {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 2
        wheel("")
    }
})

btnContact.addEventListener('click', () => { // Evento - scrola a página até o "Contato"
    if (window.innerWidth <= 1278) {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 3
        wheel("")
    }
})

btnContactHd.addEventListener('click', () => { // Evento - scrola a página até o formulário de e-mail
    if (window.innerWidth <= 1278) {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        countPage = 3
        wheel("")
    }
})

btnFilter.forEach(element => { // filtra os projetos de acordo com a categoria
    element.addEventListener('click', filterProject)
})

btnSendEmail.addEventListener('click', (e) => sendEmail(e)) // Evento = envia o formulário para o meu Email
document.body.addEventListener('wheel', wheel) // Evento = altera as "sections" ao scrolar o mouse


if (window.innerWidth < 1279) {
    btnFilter[0].click()
}

// Funções

function wheel(e) { // Função - altera as "sections" ao scrolar o mouse ou clicar ao clicar no "menu"
    if (window.innerWidth < 1279) {
        return
    }
    if (e.deltaY > 0) {
        countPage += 1
        countPage > 3 ? countPage = 3 : ''
    } else if (e.deltaY < 0) {
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
        // projectCard()
        createProjects(allProjects)
        contactt.style.top = "50%"
        btnFilter[0].click()
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

function changeSpan(e) { // Função - altera a cor do contador lateral de acordo com a "section" atual
    countSpan.forEach((element, index) => {
        element.id = ""
        if (index == e) {
            element.id = "spanActive"
        }
    })
}

function projectCard() { // Função - cria efeito "fade-in" aos projetos quando a "section" é focada ou quando os projetos são filtrados
    cardProjects.forEach((element, index) => {
        element.style.animation = "fade-in-right 0.6s ease-out";
        element.style.animationDelay = `${0.2 * index}s`;
        element.style.animationFillMode = "both";
    });
}

function createProjects(params) { // Função - cria o elemento de cada projeto registado

    params.forEach(element => {
        createProjectHtml(element)
    })

    cardProjects = document.querySelectorAll('.projects-card')
    projectCard()
}



function createProjectHtml(e) { // Função - cria o "HTML" de cada elemento dos projetos
    let newProject = document.createElement('div')
    newProject.classList = `projects-card`
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
        <div class="cardBtnDatails">?</div>
        <div class="cardDatails">
            <h3>${e.name}</h3>
            <label for="">${e.tech.join(" / ")}</label>
            <p>${e.details}</p>
        </div>
    `
    projectList.appendChild(newProject)
    newProject.querySelectorAll(".cardBtnDatails")[0].addEventListener('click', showDetails)
}

function showDetails() {
    const card = this.parentElement
    if (this.textContent == "X") {
        this.textContent = '?'
        this.style.color = ""
        card.querySelectorAll('.cardDatails')[0].style.top = ''
    } else {
        this.textContent = 'X'
        this.style.color = "#f30438"
        card.querySelectorAll('.cardDatails')[0].style.top = '0'
    }
}

function filterProject() { // Função - filtra os projetos de acordo com a categoria
    let child = this.parentElement.querySelectorAll('button')
    let projectFilter
    child.forEach(element => {
        element.style.background = ""
        element.style.color = ""
    })
    this.style.background = '#333'
    this.style.color = '#fdfdfd'
    projectList.innerHTML = ""
    if (this.textContent == "Principais") {
        projectFilter = allProjects.filter(element => element.main)
        createProjects(projectFilter)
    } else if (this.textContent == "Secundários") {
        projectFilter = allProjects.filter(element => !element.main)
        createProjects(projectFilter)
    } else {
        createProjects(allProjects)
    }
}

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


// Chamadas

wheel("") // Altera as "sections" ao scrolar o mouse ou clicar ao clicar no "menu"
changeSpan(countPage) // Altera a cor do contador lateral de acordo com a "section" atual
btnFilter[0].click() // Deixa os projetos filtrados por "todos"
emailjs.init("ceAIIFLHMCK_ganFy") // Chamada o "emailjs"

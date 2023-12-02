// Variáveis
let filter = document.querySelectorAll('.projects-filter')[0]
let btnFilter = filter.querySelectorAll(".projects-filter button")
let mainProject = document.querySelectorAll('.main')
let secProject = document.querySelectorAll('.sec')
let btnContact = document.querySelector('#btn-contact')
let formContact = document.querySelector('#form-contact')
let btnSendEmail = document.querySelector('#btn-email')




// Eventos

btnFilter.forEach(element => { // filtra os projetos de acordo com a categoria
    element.addEventListener('click', filteProject) 
})
btnContact.addEventListener('click', contact) // Scrola a página à section de "contato" ao clicar no button 
btnSendEmail.addEventListener('click', (e) => sendEmail(e)) // Envia o formulário de contato para meu Email




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
        const response = await emailjs.sendForm('service_an5y8sf', 'template_3o8qe56', formContact);
        location.reload();
    } catch (error) {
        console.log('Erro ao enviar e-mail:', error);
    }
}

function contact() { // Scrola a página à section de "contato" ao clicar no button 
    window.location.href = '/#contact'
}

function filteProject() { // filtra os projetos de acordo com a categoria
    let child = this.parentElement.querySelectorAll('button')
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




// Chamadas

emailjs.init("ceAIIFLHMCK_ganFy")
btnFilter[0].click()
// Responsividade do Menu mobile

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=> {
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=> {
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=> {
  menu.classList.remove('abrir-menu')
})

// Configuracao do slide dos projetos
let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count > 4) {
        count = 1
    }

    document.getElementById('radio' + count).checked = true;
}

// configurações do codigo de email

function enviar() {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
      if (response.ok) {
        form.reset()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
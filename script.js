// criando link do HTML com o js
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const form = document.getElementById('formValidar')
const button = document.querySelector('button')
const container = document.getElementById('content')
let p1 = document.querySelectorAll('p')[0]
let p2 = document.querySelectorAll('p')[1]

// deixa o button desabilitado
button.disabled = true

// add evento ao input 2
input2.addEventListener('keyup',function(e){
  // transforma em numeros inteiros
    let valorInput1 = parseInt(input1.value)
    let valorInput2 = parseInt(e.target.value)
    
    // mensagens para inpresão 
    let msgNegativa = `Input B tem que ser maior que o A`
    let msgPositiva = `Pode Enviar `

     // verifica se são apenas numeros
    if(!(valorInput1 >= 0)){
        p2.innerHTML = `Apenas números`
        p2.classList.add('numeroMaior')
        button.disabled = true
        button.classList.add('buttonInvalido')
        console.log('ooooooooo')
        
        // verifica sem o input2 é maior que o 1
    } else if(valorInput1 < valorInput2){
        p2.classList.add('numeroMenor')
        
        button.disabled = false
        button.classList.remove('buttonInvalido')
        p2.innerHTML = ''
        p2.innerHTML = msgPositiva
        p2.classList.remove('numeroMaior')
    } else{

        p2.classList.add('numeroMaior')
        p2.classList.remove('numeroMenor')
        button.classList.add('buttonInvalido')
        p2.innerHTML =  msgNegativa
        button.disabled = true

    }   
})


form.addEventListener('submit',function(e){
    console.log(e)
    e.preventDefault()
    form.style.display = 'none'
    p1.innerHTML  = `ENVIADO COM SUCESSO`
    p1.style.textAlign = 'center'
    p1.style.paddingTop = '64px'
    p1.style.fontSizeAdjust = '25px'
    container.style.background = 'green'
})
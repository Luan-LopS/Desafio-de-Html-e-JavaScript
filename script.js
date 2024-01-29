const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const form = document.getElementById('formValidar')
const button = document.querySelector('button')


input2.addEventListener('keyup',function(e){
    console.log(e.target.value)

    let valorInput1 = parseInt(input1.value)
    let valorInput2 = parseInt(e.target.value)
    let p = document.querySelectorAll('p')[1]
    let msgNegativa = `Número B tem que ser maior que o A`
    let msgPositiva = `Pode Enviar `

    if(valorInput1 < valorInput2){
        console.log('2 é maior')
        p.classList.add('numeroMenor')
        p.innerHTML = msgPositiva
        button.disabled = false
        form.style.display = 'none'
    } else{
        console.log('1 é maior')
        p.classList.add('numeroMaior')
        p.innerHTML =  msgNegativa
        button.disabled = true
    }
})

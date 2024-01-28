const input1 = parseInt(document.getElementById('input1'))
const input2 = parseInt(document.getElementById('input2'))
const form = document.getElementById('formValidar')

form.addEventListener('submit', function(e){
    e.preventDefault()
})


input2.addEventListener('keyup', function(e){
    console.log(e.target.value)
    let inputMenor = input1.value
    let inputMaior = input2.value

    let erro = document.querySelector('.numeroMaior')

    if(inputMaior > inputMenor){
        console.log('certo')
        erro.classList.add('numeroMaior')
    }else{
        console.log('errados')

    }

})
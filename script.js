const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const form = document.getElementById('formValidar')



form.addEventListener('submit', function(e){
    e.preventDefault()

})

input2.addEventListener('keyup',function(e){
    console.log(e.target.value)

    let valorInput1 = parseInt(input1.value)
    let valorInput2 = parseInt(e.target.value)
    let p = document.querySelectorAll('p')[1]
    p.innerHTML = `Número B tem que ser maior que o A`


    if(inputMaior > inputMenor){
        console.log('certo')
        erro.classList.add('numeroMaior')
    }else{
        console.log('errados')
    }
})
const input = document.querySelector('#cpf')

input.addEventListener('#cpf', () => {
    let inputlength = input.value.length
        if(inputlength === 3 || inputlength === 7){
        input.value += '.';
        }else if(inputlength === 11){
            input.value += "-";
        }
})

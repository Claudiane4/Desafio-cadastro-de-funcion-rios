const cpfinput = document.querySelector('#CPF')

input.addEventListener('keypress', () =>{
    let inputlength = cpfinput.ValueMax.length

    console.log(inputlength);
        if(inputlength === 3 || inputlength === 7){
        cpfinput.value += '.';
        }  
        else if(inputlength === 11){
        cpfinput.value += "-";
    }
})

const rginput = document.querySelector('#RG')

    input.addEventListener('keypress', () =>{
        let inputlength = rginput.ValueMax.length

        console.log(inputlength);
        if(inputlength === 8){
        input.value += '-';
    }
    
})
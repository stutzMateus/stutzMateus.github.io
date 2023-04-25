//Numero 1
const soma1 = document.getElementById("soma1");
const soma2 = document.getElementById("soma2");
const calc = document.getElementById("somar");
const result1 = document.getElementById("resp1");

function somador(){
    return parseFloat(soma1.value) + parseFloat(    soma2.value);
}

calc.addEventListener("click", () => {
    result1.textContent = "A soma dos dois numeros resulta em: " + somador();
});

//Numero 2
const maior1 = document.getElementById("maior1");
const maior2 = document.getElementById("maior2");
const retornaMaior = document.getElementById("retornaMaior");
const result2 = document.getElementById("resp2");

retornaMaior.addEventListener("click", () => {
    const valorMaior1 = parseFloat(maior1.value);
    const valorMaior2 = parseFloat(maior2.value);
    if(valorMaior1 > valorMaior2){
        result2.textContent = "O maior número é: " + valorMaior1;
    }else if(valorMaior1 < valorMaior2){
        result2.textContent = "O maior número é: " + valorMaior2;
    }else{
        result2.textContent = "Os números possuem o mesmo valor";
    }
});

//Numero3
document.getElementById("verificaPrimo").addEventListener("click",()=>{
    const trueprimo = document.getElementById("numero");
    const result3 = document.getElementById ("resp3");
    result3.innerHTML = primo(parseFloat(trueprimo.value));
})

const primo =(valor)=>{
    if( valor <= 1){
    return 'Não é primo';
    }
    for(let i=2; i <valor; i++){
        if(valor % i == 0){
            return 'O numero não é primo';
        }
    }
    return'O numero é primo';
}

//Numero4
const cateto =(number5, number6) =>{
    let resultado = number5 * number5 + number6 * number6
    return resultado * resultado
}

document.getElementById("button3").addEventListener("click",()=>{
    const num15 = document.getElementById("tresnumero");
    const num16 = document.getElementById("quatronumero");
    const res4 = document.getElementById ("resposta4");
    res4.innerHTML = cateto(parseFloat(num15.value),parseFloat(num16.value));

});

//Numero5
const salario =(number7)=>{
    if( number7 < 0 ){
        return'o número é negativo';
    }
    let porcentagem;
    porcentagem = number7 * 0.10;
    return number7 + porcentagem;
}

document.getElementById("button5").addEventListener("click",()=>{
    const num17 = document.getElementById("cinconumero");
    const res5 = document.getElementById ("resposta5");
    res5.innerHTML = salario(parseFloat(num17.value));
});

//Numero6
const fahrenheit = document.getElementById("Fahrenheit");
const celsius = document.getElementById("Celsius");
const result6 = document.getElementById("resp6");

celsius.addEventListener("click", () => {
    const truecelsius = ((parseFloat(fahrenheit.value) - 32) / 1.8).toFixed(2);
    result6.textContent = truecelsius;
});

//Numero7
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const media = document.getElementById("media");
const result7 = document.getElementById("resp7");

media.addEventListener("click", () => {
    const trueMedia = parseFloat(((nota1.value * 2) + (nota2.value * 3) + (nota3.value * 5)) /10);
    result7.textContent = "Media: " + trueMedia;
});
function contarPalavras() {


    let texto = document.getElementById("texto").value;
    let result = document.getElementById("resp");

    let totalLetras = 0;
    for (let i =0;i < texto.length; i++){
        let caractere = texto.charAt(i);

        if ((caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z')) {
            totalLetras++;
          }
    }

    let palavras = texto.split(" ");
    let numPalavras = palavras.length;
		  result.textContent =  numPalavras + " palavras foram digitadas e " + totalLetras + " letras foram digitadas";

}
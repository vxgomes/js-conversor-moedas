function Converter(){
    //1 - pegar o valor que foi digitado no campo com id #valor
    let valorEmDolar = document.getElementById("valor").value
    //2 - converter o valor de dólar para real
    let valorConvertido = valorEmDolar * 5.3
    //3 - Mostrar o valor no h2 com id #valorConvertido
    document.getElementById("valorConvertido").innerText = "R$ " + valorConvertido.toFixed(2)
}
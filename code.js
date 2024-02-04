
const elementoResposta = document.querySelector("#resposta");

const inputPergunta = document.querySelector("#inputPergunta")

const buttonPerguntar = document.querySelector("#buttonPerguntar");

const respostas = [
    "São Paulo-SP.",
    "Ubatuba / Guarujá-SP.",
    "Porto Alegre-RS.",
    "Florianópolis-SC.",
    "Curitiba-PR.",
    "Belo Horizonte-MG.",
    "Vitória-ES.",
    "Angra dos Reis-RJ.",
    "Goiânia-GO.",
    "Recife-PE.",
    "Natal-RN.",
    "Maceió-AL.",
    "Fortaleza-CE.",
    "Porto de Galinhas-PE.",
    "São Miguel dos Milagres-AL.",
    "Maragogi-AL.",
    "Nova York-EUA.",
    "Buenos Aires-ARG.",
    "San Andreas-COL.",
    "Los Angeles-EUA.",
    "Atlanta-EUA.",
    "Miami-EUA.",
    "Londres-EUA.",
    "Tóquio-JP.",
    "Sidney-AUS.",
    "Milan-ITA",

]



function fazerPergunta(){

    if(inputPergunta.value ==""){
        alert ("Pergunte pelo seu destino!")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

        const pergunta = "<div>" + inputPergunta.value + "</div>" 

        const totalRespostas = respostas.length
        const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

        elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;
    
    setTimeout(function()  {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 5000)
}
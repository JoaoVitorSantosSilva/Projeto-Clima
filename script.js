let chave = "010e6d8d78db48b939933ad221521ca7"

function colocaNaTela (dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML =  + Math.floor(dados.main.temp) + "C°"
    document.querySelector(".descricao").innerHTML =  dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
   
 
}

async function BuscarCidade (cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" +  "&units=metric")
        .then ( resposta => resposta.json())

        colocaNaTela(dados)
}

function cliqueiNoBotao () {
let cidade = document.querySelector(".input-cidade").value
BuscarCidade(cidade)}
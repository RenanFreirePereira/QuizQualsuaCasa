start = window.document.getElementById("botaoStart")
respostas = window.document.querySelectorAll(".resposta")
let questao = window.document.getElementById("questao")
let contadorquestao = 0; 
let impressaoContador = window.document.getElementById("contador")
let questoes = ["Complete: seu amigo foi atacado pelo dementador, então você...", "Qual elogio você frequentemente ouve?", "Você fácilmente ama alguém?", "você senti vontade de fazer alguma vingança?", "Qual seria a sua abordagem ao enfrentar um desafio difícil?", "Como você prefere passar seu tempo livre?", "você mente facilmente?", "Se você terminasse com alguém, como ficaria?", "Se o seu melhor amigo se afastasse, como você ficaria?"] 
let respostas0 =  ["Apenas Corre", "Corre e procura por ajuda", "Fica com muito medo e foge", "Executa o patrono e luta"]
let respostas1 = ["Que sou bonito", "Que sou estudioso", "Que sou arrogante", "Que eu sou gentil"]
let respostas2 = ["Sim", "Razoavelmente sim", "Difícilmente", "Facilmente"]
let respostas3 = ["Sim, muito", "Sim, de forma inteligente", "Com um bom motivo, sim", "Não"]
let respostas4 = [" Estratégia cuidadosa", "Coragem e ação imediata.", "Me apoiaria em meus amigos ", " Confiança na intuição "]
let respostas5 = ["Lendo e estudando", "Explorando ideias", "Com meus amigos", "Pensando em como evoluir a mim mesmo"]
let respostas6 = ["As vezes", "Apenas quando preciso", "não me importo com mentir", "Evito, mas acabo mentindo"]
let respostas7 = ["Muito abalado", "De certo modo abalado", "Com o tempo bem", "museu que vive de passado"]
let respostas8 = ["Terrivelmente triste", "Triste e em pouco tempo bem", "Triste", "Arrasado (por causa de meu ego)"]
let telaQuestoes = window.document.getElementById("areaAsk")
let sonserina = 0
let ganhador = 0;
let grifinoria = 0
let lufa = 0
let corvinal = 0
start.addEventListener("click", () => {
    irParaQuestao("")
})

function irParaQuestao() {
    let telaBoaVinda =  window.document.getElementById("boasVindas")
    telaBoaVinda.style.display = "none"
    telaQuestoes.style.display = "flex"
    proximaQuestao("")
}

respostas.forEach(function(respostas) {
    respostas.addEventListener("click", function(){
        proximaQuestao(respostas.id)
    })
});


function processarPontuacao(resposta, contadorquestao){
    if(contadorquestao == 1){
        if(resposta == 1){
            sonserina++
        }
        else if(resposta == 2){
            lufa++
            sonserina++
            corvinal++
        }
        else if(resposta == 3){
            lufa++
        }
        else{
            grifinoria++
        }
    }
    else if(contadorquestao == 2){
        if(resposta == 1){
            sonserina++
        }
        else if(resposta == 2){
            corvinal++
        }
        else if(resposta == 3){
            corvinal++
        }
        else{
            lufa++
        }
    }
    else if(contadorquestao == 3){
        if(resposta == 1){
            lufa++
        }
        else if(resposta == 2){
            grifinoria++
        }
        else if(resposta == 3){
            corvinal++
        }
        else{
            sonserina++
        }
    }
    else if(contadorquestao == 4){
        if(resposta == 1){
            sonserina++
        }
        else if(resposta == 2){
           corvinal++ 
        }
        else if(resposta == 3){
            corvinal++
        }
        else{
            lufa++
            grifinoria++
        }
    }
    else if(contadorquestao == 5){
        if(resposta == 1){
            corvinal++
        }
        else if(resposta == 2){
           grifinoria++ 
        }
        else if(resposta == 3){
            lufa++
        }
        else{
            sonserina++
        }
    }
    else if(contadorquestao == 6){
        if(resposta == 1){
            corvinal++
        }
        else if(resposta == 2){
            grifinoria
        }
        else if(resposta == 3){
            lufa++
        }
        else{
            sonserina++
        }
    }
    else if(contadorquestao == 7){
        if(resposta == 1){
            corvinal++
        }
        else if(resposta == 2){
            grifinoria++
        }
        else if(resposta == 3){
            sonserina++
        }
        else{
            lufa++
        }
    }
    else if(contadorquestao == 8){
        if(resposta == 1){
            sonserina++
        }
        else if(resposta == 2){
            lufa++
            sonserina++
            corvinal++
        }
        else if(resposta == 3){
            lufa++
        }
        else{
            grifinoria++
        }
    }
    else if(contadorquestao == 9){
        if(resposta == 1){
            lufa++
        }
        else if(resposta == 2){
            grifinoria++

        }
        else if(resposta == 3){
            corvinal++
        }
        else{
            sonserina++
        }
    }
}


function proximaQuestao(respondido){
    processarPontuacao(respondido, contadorquestao)
    window.document.getElementById("questao").innerText = questoes[contadorquestao].toUpperCase()
    impressaoContador.innerText = contadorquestao + 1
    if(contadorquestao == 0){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas0[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 1){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas1[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 2){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas2[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 3){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas3[cont].toUpperCase()
        }
    }
    else if (contadorquestao == 4){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas4[cont].toUpperCase()
        }
        
    }
    else if (contadorquestao == 5){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas5[cont].toUpperCase();
        }
    }
    else if (contadorquestao == 6){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas6[cont].toUpperCase();
        }
    }
    else if(contadorquestao == 7){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas7[cont].toUpperCase();
        }
    }
    else if(contadorquestao == 8){
        for(let cont = 0; cont < 4; cont++){
            respostas[cont].value = respostas8[cont].toUpperCase();
            telaFinal()
        }
    }

    contadorquestao++;
}

function telaFinal() {
    let telaFinalInterface = window.document.getElementById("telaFinal");
    let telaQuestoes = window.document.getElementById("areaAsk"); 
    telaQuestoes.style.display = "none";
    telaFinalInterface.style.display = "flex";
    ganhador = encontraMaiorIndice(grifinoria, sonserina, corvinal, lufa)
    linksCasas = ["sonserina.png", "grifinoria.png", "lufa.png", "corvinal.webp"];
    nomeCasas = ["sonserina", "grifinória", "lufa-lufa", "corvinal"]
    let escritaNomeDaCasa =  window.document.getElementById("casaNome")
    escritaNomeDaCasa.innerText = nomeCasas[ganhador - 1].toUpperCase()
    let imagemDaCasa = window.document.getElementById("imagemCasa")
    imagemDaCasa.src = linksCasas[ganhador - 1]
    let textosSobreCasas = [
        ["Sonserina: Uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, conhecida por valorizar astúcia, ambição e determinação."],
        ["Grifinória: Casa em Hogwarts que preza coragem, bravura e lealdade, sendo lar de muitos bruxos notáveis, incluindo Harry Potter."],
        ["Lufa-Lufa: Uma das casas de Hogwarts, destacando-se pela valorização de características como paciência, bondade e trabalho árduo."],
        ["Corvinal: Casa em Hogwarts que valoriza a inteligência, a sabedoria e a criatividade, sendo conhecida por atrair bruxos dedicados ao aprendizado."]
    ]

    let escritaTextosSobreAsCasas = window.document.getElementById("textoSobreACasa").innerText = textosSobreCasas[ganhador - 1]


}

function encontraMaiorIndice(num1, num2, num3, num4) {
    const numeros = [num1, num2, num3, num4];
    const maiorNumero = Math.max(...numeros);
    const indices = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === maiorNumero) {
            indices.push(i + 1);
        }
    }

    const indiceEscolhido = indices[Math.floor(Math.random() * indices.length)];

    return indiceEscolhido;
}

console.log(encontraMaiorIndice(5, 6, 12, 12))



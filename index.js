var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    setadireita.style = "display:none"
    Bruna.style = "display:flex"
    setaesquerda.style = "display:flex; margin-top: 55px"

}
function RolarParaEsquerda() {
    Bruna.style = "display:none"
    setaesquerda.style = "display:none"
    Leonardo.style = "display:flex"
    setadireita.style = "display:flex; margin-top: 55px"
    
}
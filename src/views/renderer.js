/**
 * Processo de renderização
 * Tela principal
 */

console.log("Processo de renderização")

// Envio de uma mensagem para o main abrir a janela clinte
function client() {
    //console.log("teste do botão cliente")
    //uso da api(autorizada no preload.js)
    api.clientWindow()
}

// Envio de uma mensagem para o main abrir a janela os
function os() {
    //console.log("teste do botão os")
    //uso da api(autorizada no preload.js)
    api.osWindow()
}
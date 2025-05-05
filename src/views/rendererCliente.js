// ============================================================
// == Buscar CEP ==============================================
function buscarCEP() {
    //console.log("teste do evento blur")
    //armazenar o cep digitado na variável
    let cep = document.getElementById('inputCEPClient').value
    //console.log(cep) //teste de recebimento do CEP
    //"consumir" a API do ViaCEP
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
    //acessando o web service par abter os dados
    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            //extração dos dados
            document.getElementById('inputAddressClient').value = dados.logradouro
            document.getElementById('inputNeighborhoodClient').value = dados.bairro
            document.getElementById('inputCityClient').value = dados.localidade
            document.getElementById('inputUFClient').value = dados.uf
        })
        .catch(error => console.log(error))
}
// == Fim - buscar CEP ========================================
// ============================================================

// ============================================================
// == Validar CPF =============================================
function validarCPF() {

}
// == Fim - validar CPF =======================================
// ============================================================

// vetor global que será usado na manipulação dos dados
let arrayClient = []

// capturar o foco na busca pelo nome do cliente
// a constante foco obtem o elemento html (input) identificado como 'searchClient'
const foco = document.getElementById('searchClient')

// Iniciar a janela de clientes alterando as propriedades de alguns elementos
document.addEventListener('DOMContentLoaded', () => {
    // Desativar os botões
    btnUpdate.disabled = true
    btnDelete.disabled = true
    // Foco na busca do cliente
    foco.focus()
})

//captura dos dados dos inputs do formulário (Passo 1: Fluxo)
let frmClient = document.getElementById('frmClient')
let nameClient = document.getElementById('inputNameClient')
let PlacaClient = document.getElementById('inputPlacaClient')
let ModeloClient = document.getElementById('inputModeloClient')
let phoneClient = document.getElementById('inputPhoneClient')
let CorClient = document.getElementById('inputCorClient')
let TipoClient = document.getElementById('inputTipoClient')
let DanosClient = document.getElementById('inputDanosClient')
let CPFClient = document.getElementById('inputCPFClient')

// ============================================================
// == CRUD Create/Update ======================================

//Evento associado ao botão submit (uso das validações do html)
frmClient.addEventListener('submit', async (event) => {
    //evitar o comportamento padrão do submit que é enviar os dados do formulário e reiniciar o documento html
    event.preventDefault()
    // Teste importante (recebimento dos dados do formuláro - passo 1 do fluxo)
    console.log(nameClient.value, cpfClient.value, ModeloClient.value, phoneClient.value, PlacaClient.value, TipoClient.value, DanosClient.value)
    //Criar um objeto para armazenar os dados do cliente antes de enviar ao main
    const client = {
        nameCli: nameClient.value,
        cpfCli: cpfClient.value,
        ModeloCli: ModeloClient.value,
        phoneCli: phoneClient.value,
        PlacaCli: PlacaClient.value,
        TipoCli: TipoClient.value,
        DanosCli: DanosClient.value,
        CorCli: CorClient.value,
    }
    // Enviar ao main o objeto client - (Passo 2: fluxo)
    // uso do preload.js
    api.newClient(client)
})

// == Fim CRUD Create/Update ==================================
// ============================================================


// ============================================================
// == CRUD Read ===============================================

function buscarCliente() {
    //console.log("teste do botão buscar")
    // Passo 1: capturar o nome do cliente
    let name = document.getElementById('searchClient').value
    console.log(name) // teste do passo 1
    api.searchName(name) // Passo 2: envio do nome ao main
    // recebimento dos dados do cliente
    api.renderClient((event, dataClient) => {
        console.log(dataClient) // teste do passo 5
        // passo 6 renderizar os dados do cliente no formulário
        // - Criar um vetor global para manipulação dos dados
        // - criar uma constante para converter os dados recebidos (string) para o formato JASON (JSON.parse)
        // usar o laço forEach para percorre o vetor e setar os campos (caixas de texto) do formulário
        const dadosCliente = JSON.parse(dataClient)
        // atribuir ao vetor os dados do cliente
        arrayClient = dadosCliente
        // extrair os dados do cliente
        arrayClient.forEach((c) => {
            nameClient.value = c.nomeCliente,
                cpfClient.value = c.cpfCliente,
                ModeloClient.value = c.ModeloCliente,
                phoneClient.value = c.foneCliente,
                PlacaClient.value = c.PlacaCliente,
                TipoClient.value = c.TipoCliente,
                DanosClient.value = c.DanosCliente
                CorClient.value = c.CorCliente
        })
    })
}

// == Fim - CRUD Read =========================================
// ============================================================


// ============================================================
// == Reset form ==============================================
function resetForm() {
    // Limpar os campos e resetar o formulário com as configurações pré definidas
    location.reload()
}

// Recebimento do pedido do main para resetar o form
api.resetForm((args) => {
    resetForm()
})

// == Fim - reset form ========================================
// ============================================================
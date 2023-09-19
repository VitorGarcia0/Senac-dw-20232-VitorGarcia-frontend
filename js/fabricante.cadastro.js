async function CadastrarFabricante() {
   // buscarCEP();
    // fazer um post para cadastrar o Fabricante
    let options = {
        method: "POST",
        headers: { 'Content-type': "application/json" },
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            cnpj: document.getElementById("cnpj").value,
            cep: document.getElementById("cep").value,
            cidade: document.getElementById("cidade").value,
            uf: document.getElementById("uf").value,

        })
    }
   const registroFabricante = await fetch('localhost:8080/api/fabricante', options);
   const registrarFabricante = await registroFabricante.json();
}
// BUSCAR O CEP, com base no cep que o usuário digitou
async function buscarCep() {
    //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)
    var valorCep = document.getElementById('cep');
    var cepInformado = valorCep.value;

    // By ID = único, NAME pode se repetir
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resultado => resultado.json())
    .then(json => {
        if(json.erro){
            mostrarTelaErro();
        }else{
            preencherCamposComJson();
        }    
    })
       
}

// function limparCampos() {
//     document.getElementById("formulario__texto").innerHTML = "";
//     // document.getElementById("corpoTabela").innerHTML = ""; 
// }

function preencherCamposComJson(json) {
    // ESSA condição funciona em javascript, é o mesmo que
    //if(json.bairro != undefinde && json.bairro != '')
    if (json.localidade) {
        //Obter o componente pelo ID , funciona!! 
        cidade.value = json.localidade;
        if (json.uf) {
            uf.value = json.uf;
        }
    } else {
        alert("Erro ao preencher os campos cidade e UF");
    }
} 


function mostrarTelaErro() {
    alert('Preencher os campos');
}


// 
// 
// 

/////////   Versão 2: para chamar diretamente do HTML /////////
//O valor do cep digitado está no <input> com id "txtCep"
async function buscarCEP() {
    limpar();
    //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)
    var txtCep = document.getElementById('txtCep');
    var cepInformado = txtCep.value;

    // By ID = único, NAME pode se repetir
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resultado => resultado.json)
    .then(json => {
        if(json.erro){
            mostrarTelaErro();
        }else{
            preencherCamposComJson();
        }    
    })
    .catch(erro => {
        mostrarTelaErro();
    })      
}

//Preencher os dados do endereço obtido na página HTML
function preencherCamposComJson(json) {
    // ESSA condição funciona em javascript, é o mesmo que
    //if(json.bairro != undefinde && json.bairro != '')
    if (json.bairro) {
        //Obter o componente pelo ID , funciona!! 
        txtBairro.value = json.bairro;
    } else {
        txtBairro.disabled = false;
    }

    // VERSÃO 2:    // Tem esse dois jeitos de pegar um valor do JSON
    document.getElementById('txtUF').value = json.uf;
    txtCidade.value = json.localidade;

    document.getElementById('txtRua').value = json.rua;
    txtRua.value = json.logradouro;
}

function limpar() {
    divDadosEndereco.style = 'background-color: blue';
    txtBairro.value = '';
    txtCidade.value = '';
    txtUF.value = '';
    txtRua.value = '';

    txtBairro.disabled = true;
}

function mostrarTelaErro() {
    limpar();
    divDadosEndereco.style = 'background-color: red';
    alert('CEP informado não existe');
}

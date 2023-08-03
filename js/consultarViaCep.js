/////////   Versão 2: para chamar diretamente do HTML /////////
//O valor do cep digitado está no <input> com id "txtCep"
async function buscarCEP() {
    //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)

    var txtCep = document.getElementById('txtCep');
    var cepInformado = txtCep.value;

    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cepInformado}/json/`);

    //Retorno da Promise
    const json = await promiseConsultaCEP.json();

    if(json.erro) {
        mostrarTelaErro();
    } else {
        preencherCamposComJson();
    }


    //Preencher os dados do endereço obtido na página HTML
    //Obter o componente pelo ID , funciona!! 
    // ESSA condição funciona em javascript, é o mesmo que
    //if(json.bairro != undefinde && json.bairro != '')
    if (json.bairro) {
        txtBairro.value = json.bairro;
    } else {
        txtBairro.disabled = false;
    }

    // VERSÃO 2:    // Tem esse dois jeitos de pegar um valor do JSON
    document.getElementById('txtUF').value = json.uf;
    txtCidade.value = json.localidade;
}

function limpar() {

    txtBairro.value = '';
    txtCidade.value = '';
    txtUF.value = "";
    
    txtBairro.disabled = true;
}

function mostrarTelaErro() {
    limpar();
    // Complementar
    alert('CEP informado não existe')
}
///////////////////////////////////////////////////////////////
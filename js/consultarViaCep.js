/////////   Versão 2: para chamar diretamente do HTML /////////
//O valor do cep digitado está no <input> com id "txtCep"
async function buscarCEP() {

    limpar();
    //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)
    var txtCep = document.getElementById('txtCep');
    var cepInformado = txtCep.value;
    
    // By ID = único, NAME pode se repetir
    var fieldsetCep = document.getElementsByName('fieldset-consulta-cep');
    if (cepInformado.length == 8) {
        fieldsetCep.style = 'background-color: purple ';
    } else {
        fieldsetCep.style = 'background-color: orange';
    }

    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cepInformado}/json/`);

    //Retorno da Promise
    const json = await promiseConsultaCEP.json();

    if (json.erro) {
        mostrarTelaErro();
    } else {
        preencherCamposComJson();
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
}

function limpar() {

    txtBairro.value = '';
    txtCidade.value = '';
    txtUF.value = '';
    txtRua.value = '';

    txtBairro.disabled = true;
}

function mostrarTelaErro() {
    limpar();
    // Complementar
    alert('CEP informado não existe')
}

function salvarEndereco() {
    //TODO chamar no back end

}
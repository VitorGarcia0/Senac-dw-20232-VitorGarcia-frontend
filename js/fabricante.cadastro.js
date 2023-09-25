async function cadastrarFabricante() {
   // buscarCEP();
    // fazer um post para cadastrar o Fabricante
    let options = {
        nome: nome.value,
        cnpj: cnpj.value,
        cep: cep.value,
        cidade: cidade.value,
        uf: uf.value
    };
    fetch('http://localhost:8080/api/fabricante', {
        method: "POST",
        body: JSON.stringify(options),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => {
        if(response.status == 500){
            alert('Preencha todos os campos');
        }
        response.json();
    } ) 
    .then(json => {
        alert("Fabricante salvo com sucesso");
        limparCampos();
    });
   
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
        document.getElementById('cidade').value = json.localidade;
        document.getElementById('uf').value = json.uf;
    });
       
}

 function limparCampos() {
    nome.value = '';
    cnpj.value = '';
    cep.value = '';
    cidade.value = '';
    uf.value = '';
 }


// function preencherCamposComJson(json) {
//     // ESSA condição funciona em javascript, é o mesmo que
//     //if(json.bairro != undefinde && json.bairro != '')
//     if (json.localidade) {
//         //Obter o componente pelo ID , funciona!! 
//         cidade.value = json.localidade;
//         if (json.uf) {
//             uf.value = json.uf;
//         }
//     } else {
//         alert("Erro ao preencher os campos cidade e UF");
//     }
// } 


function mostrarTelaErro() {
    alert('Preencher os campos');
}


// 
// 
// 

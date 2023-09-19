async function buscarTodosFabricantes() { 
    fetch('http://localhost:8080/api/fabricante')
        .then(resultado => resultado.json())
        .then(json => {  // aerial function
            preencherTabela(json);
        });
}

function limparTabela() {
    document.getElementById("corpoTabela").innerHTML = ""; 
}

function preencherTabela(jsonFabricantes) {
    this.limparTabela();
    //  <tr>
    //      <td>1</td>
    //      <td>Café</td>
    //      <td>Ouro</td>
    //     <td>R$11,5</td>
    //      <td>0,5</td>
    //  </tr>
    var dadosTabelaProdutos = document.getElementById('corpoTabela');

    for (let i = 0; i < jsonFabricantes.length; i++) {
        let novaLinha = dadosTabelaProdutos.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonFabricantes[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonFabricantes[i].nome;

        let celulaFabricante = novaLinha.insertCell();
        celulaFabricante.innerText = jsonFabricantes[i].cnpj;

        let celulaValor = novaLinha.insertCell();
        celulaValor.innerText = jsonFabricantes[i].cep;
    }
}


buscarTodosProdutos();
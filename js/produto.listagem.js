async function buscarTodosProdutos(){
    fetch('http://localhost:8080/api/produtos')
    .then(resultado => resultado.json())
    .then(json => {  // aerial function
        preencherTabela(json);
    });
}

function preencherTabela(jsonProdutos){
    // <tr>
    //     <td>1</td>
    //     <td>Café</td>
    //     <td>Ouro</td>
    //     <td>R$11,5</td>
    //     <td>0,5</td>
    // </tr>
    var dadosTabelaProdutos = document.getElementById('corpoTabela');

    for(let i = 0; i < jsonProdutos.length; i++){
        let novaLinha = dadosTabelaProdutos.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonProdutos[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonProdutos[i].nome;

        let celulaFabricante = novaLinha.insertCell();
        celulaFabricante.innerText = jsonProdutos[i].fabricanteDoProduto.nome;

        let celulaValor = novaLinha.insertCell();
        celulaValor.innerText = 'R$' + jsonProdutos[i].valor;

        let celulaPeso = novaLinha.insertCell();
        celulaPeso.innerText = jsonProdutos[i].peso;
    }
}

buscarTodosProdutos();
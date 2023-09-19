async function buscarTodosProdutos() {
    // FUNÇÃO BUSCAR, ALTERAR A URL PRA /FILTROS
    // ALTERAR O FETCH PARA FAZER O POST, exemplo
    // PASSAR NO BODY OS SELETORES
    fetch('http://localhost:8080/api/produtos')
        .then(resultado => resultado.json())
        .then(json => {  // aerial function
            preencherTabela(json);
        });
}

async function pesquisar() {
    //POST: localhost:8080/api/produtos/filtros
    // PARAMETROS: produtoSeletor no formato JSON
    let options = {
        method: "POST",
        headers: { 'Content-type': "application/json" },
        body: JSON.stringify({
            valorMinimo: document.getElementById("valorMinimo").value,
            valorMaximo: document.getElementById("valorMaximo").value
    //           nome: document.getElementById("input-produto").value,
    //   fabricante: document.getElementById("input-fabricante").value,
    //   cnpjFabricante: document.getElementById("input-cnpj").value,
    //   valorMinimo: document.getElementById("input-valor-min").value,
    //   valorMaximo: document.getElementById("input-valor-max").value,
    //   pesoMinimo: document.getElementById("input-peso-min").value,
    //   pesoMaximo: document.getElementById("input-peso-max").value,
    //   dataCadastroInicial: document.getElementById("input-data-inicio").value,
    //   dataCadastroFinal: document.getElementById("input-data-fim").value,
        })
    };
    const pesquisaFiltros = await fetch('localhost:8080/api/produtos/filtros', options);
    const resultadoFiltros = await pesquisaFiltros.json();

    preencherTabela(resultadoFiltros);

}

function limparTabela() {
    document.getElementById("corpoTabela").innerHTML = ""; 
}

function preencherTabela(jsonProdutos) {
    this.limparTabela();
    //  <tr>
    //      <td>1</td>
    //      <td>Café</td>
    //      <td>Ouro</td>
    //     <td>R$11,5</td>
    //      <td>0,5</td>
    //  </tr>
    var dadosTabelaProdutos = document.getElementById('corpoTabela');

    for (let i = 0; i < jsonProdutos.length; i++) {
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
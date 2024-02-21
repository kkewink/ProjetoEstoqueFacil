const data =[]

const pnome = document.getElementById("pnome");

const btnSubmit = document.getElementById("btn");

const pmarca = document.getElementById("pmarca");

const pnumero = document.getElementById("pnumero"); 

const pvalor = document.getElementById("pvalor");

const pquantidade = document.getElementById("pquantidade");

const tipo = document.getElementById("tipo");

const pproduto = document.getElementById("pproduto");

btnSubmit.addEventListener('click', function(event){
    event.preventDefault();
    console.log(pnome.value);
    console.log(pmarca.value);
    console.log(pnumero.value);
    console.log(pvalor.value);
    console.log(pquantidade.value);
    console.log(tipo.value);
    console.log(pproduto.value);

    const pedidos = {
        Nome: pnome.value,
        Marca: pmarca.value,
        Numero: pnumero.value,
        valor: pvalor.value,
        Quantidade: pquantidade.value,
        Tipo: tipo.value,
        Descrição: pproduto.value
    }
    data.push(pedidos);
    console.log(pedidos);
})
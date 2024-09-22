// função que ativa o ONCLICK gtabu do html
function gerarTabela() {
    // var num que recebe o conteúdo do id number do HTML
    let num = document.getElementById("number");
    // var tab que recebe o conteúdo do id tabela do HTML
    let tab = document.getElementById("tabela");
    // se o valor de num for igual a 0
    if (num.value.length === 0) {
      //alerta = msg
        alert(`Por favor, digite um número!`);
      // senão
    } else {
      // var n recebe valor da var NUM em número
        let n = Number(num.value);
      // var c recebe 1
        let c = 1;
      // limpa o conteúdo do select
        tab.innerHTML = ``;
      // enquanto c for menor ou igual a 10
        while (c <= 10) {
        // var item cria um elemento option
        let item = document.createElement("option");
        //o elemento option recebe o valor de N x C = (N * C)
        item.text = `${n} * ${c} = ${n * c}`;
        //tab o elemento filho ITEM
        tab.appendChild(item);
        //C recebe mais um
        c++;
        }
    }
}

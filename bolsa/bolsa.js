document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
    defineCompraVenda();

    document.querySelector('#btn-adicionar').addEventListener('click', adicionaCotacao)
}

function adicionaCotacao(){
    const tabela = document.querySelector('.table tbody');

    //get last index of table
    let list_index=[]
    tabela.querySelectorAll('th').forEach(item => {
            list_index.push(item.textContent)
        });
    
    const form = document.querySelector('.form-cotacao');
    const empresa_ = form.empresa.value;
    const cotacao_ = form.valor.value;

    const row = document.createElement('tr');
        const id_col = document.createElement('th')
        const empresa_col = document.createElement('td');
        const cotacao_col = document.createElement('td');
        const compravenda_col = document.createElement('td');

    row.classList.add('cotacao')
        id_col.textContent = parseInt(list_index.pop())+1;
        empresa_col.textContent = empresa_;
        empresa_col.classList.add('nome');
        cotacao_col.textContent = cotacao_;
        cotacao_col.classList.add('valor');
        compravenda_col.classList.add('compra-venda')

    row.appendChild(id_col);
    row.appendChild(empresa_col);
    row.appendChild(cotacao_col);
    row.appendChild(compravenda_col);

    tabela.append(row)

    //clear input
    document.querySelectorAll('.form-group input').forEach(item => {
        item.value = '';
    })

    defineCompraVenda();

}

function defineCompraVenda(){
    const rows = document.querySelectorAll('.cotacao')
    rows.forEach(row => {
        let result = '';
        let cotacao = parseFloat(row.querySelector('.valor').textContent.replace(',', '.'));
        let compravenda = row.querySelector('.compra-venda');
        
        if (cotacao > 50){
            result = 'Vender';
            compravenda.classList.add('cotacao-vender');
        }
            
        else if(cotacao < 50){
            result = 'Comprar';
            compravenda.classList.add('cotacao-comprar')
        }
            
        else if(cotacao == 50){
            result = 'Manter';
            compravenda.classList.add('cotacao-manter')
        }

        compravenda.textContent = result;

    })
}


function getClientes(){
    const cli = [
        {id: 1, nome: "Universidade Positivo", cnpj: "12345678910", datafundacao: "01/02/2000"},
        {id: 2, nome: "Universidade Estadual de Londrina", cnpj: "12345678999", datafundacao: "17/12/1984"},
        {id: 3, nome: "Universidade Federal do Paraná", cnpj: "1234567263437", datafundacao: "19/06/1994"},
        {id: 4, nome: "Universidade de Campinas", cnpj: "1234567777", datafundacao: "15/08/1977"},
    ];

    return cli;
}

function insertCliente(idInformado, nomeInformado, cnpjInformado, datafundacaoInformado){
    if(idInformado && nomeInformado && cnpjInformado && datafundacaoInformado){ //testa se algum dado não está nulo
        const novoCliente = {
            id: idInformado,
            nome: nomeInformado,
            cnpj: cnpjInformado,
            datafundacao: datafundacaoInformado
        }
        console.log("Cliente inserido!", novoCliente);
        return true;
    }
    console.error("Falha ao inserir cliente, faltou algum valor");
    return false;
};

module.exports = {getClientes, insertCliente};
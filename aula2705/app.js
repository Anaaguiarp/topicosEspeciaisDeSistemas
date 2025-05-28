const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log("URL: ", url);

    const metodo = req.method;
    console.log("Método: ", metodo);

    // req pegar dado do cliente
    // res resposta em string pro cliente
    if(metodo === "GET" && url === "/"){
        res.end("Bem vindos ao sistema XPTO");
    }else if(metodo === "GET" && url === "/clientes"){
        res.end("Lista de Clientes");
    }else if(metodo === "POST" && url == "/clientes"){
        res.end("Inserindo cliente");
    }else if(metodo === "GET" && url === "/fornecedores"){
        res.end("Lista de Fornecedores");
    }else if(metodo === "PUT" && url == "/fornecedores"){
        res.end("Editando fornecedor");
    }else if(metodo === "GET" && url === "/carrinho"){
        res.end("Carrinho de compras");
    }else{
        res.end("Pagina nao encontrada!");
    }
});

//Portas normalmente utilizadas: 3000 ou 8080 
server.listen(3000, 'localhost', () => {
    console.log("Server on-line");
});
import express from 'express'
const app = express()
const port = 3000
var produtos = []
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send(`<html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>FarmaFipp</title>
                    <style>
                        body{
                           background: linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%);
                        }
                            h1{
                                text-align: center;
                                margin-top: 20px;
                                color: white;
                            }
                    </style>
                </head>
                <body>
                  <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">FarmaFipp</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cadastro
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/CadProdutos">Produtos</a></li>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="logout">Sair</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <h1>Bem vindo ao FarmaFipp!</h1>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>
        `)
})
app.get('/CadProdutos',(req,res)=>{
    res.send(
        `<html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>FarmaFipp</title>
                    <style>
                     body{
                            background: linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%);
                        }
                        form{
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                            margin: 20px;
                            justify-content: center;
                            align-items: center;
                            background-color: #e6ececff;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        #btns{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 10px;
                        }
                            h1{
                                text-align: center;
                                margin-top: 20px;
                                color: white;
                            }
                    </style>
                </head>
                <body>
                    <h1>Cadastro de Produtos</h1>
                    <form method="POST" action="/add">
                        <div class="col-md-4">
                            <label for="txt" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome do produto" required>
                            <div class="invalid-feedback">
                           Por favor, insira o nome do produto.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="txt" class="form-label">Codigo</label>
                            <input type="number" class="form-control" id="cod" name="cod" placeholder="Codigo do produto" required>
                            <div class="invalid-feedback">
                            Por favor, insira o codigo do produto.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="txt" class="form-label">Preco</label>
                            <input type="number" class="form-control" id="preco" name="preco" placeholder="Preco do produto" required>
                            <div class="invalid-feedback">
                            Por favor, insira o preco do produto.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="txt" class="form-label">Quantidade</label>
                            <input type="number" class="form-control" id="quantidade" name="quantidade" placeholder="Quantidade do produto" required>
                            <div class="invalid-feedback">
                            Por favor, insira a quantidade do produto.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="txt" class="form-label">Data de validade</label>
                            <input type="date" class="form-control" id="dataValidade" name="dataValidade" required>
                            <div class="invalid-feedback">
                            Por favor, insira a data de validade do produto.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="txt" class="form-label">Marca</label>
                            <input type="text" class="form-control" id="marca" name="marca" placeholder="Marca do produto" required>
                            <div class="invalid-feedback">
                            Por favor, insira a marca do produto.
                            </div>
                        </div>
                        <div class="col-12" id="btns">
                            <button class="btn btn-outline-primary" type="submit">enviar</button>
                            <a href="/" class="btn btn-outline-danger" > voltar</a>
                        </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>
        `
    )
})
app.post('/add',(req,res)=>{
    const nome = req.body.nome
    const cod = req.body.cod
    const preco = req.body.preco
    const quant = req.body.quantidade
    const validade = req.body.dataValidade
    const marca = req.body.marca
    produtos.push({nome,cod,preco,quant,validade,marca})
    res.redirect('/listaProdutos')
})
app.get('/listaProdutos',(req,res)=>{
     var conteudo = `
        <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Minha Primeira Página</title>
                    <style>

                     body{
                           background: linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%);
                           color: white;
                        }
                    </style>
                </head>
                <body>
                <h1>Lista de Produtos cadastrados</h1>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Codigo</th>
                            <th>Preco</th>
                            <th>Quantidade</th>
                            <th>Validade</th>
                            <th>Marca</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    for(let i=0; i<produtos.length; i++){
        conteudo += `
            <tr>
                <td>${produtos[i].nome}</td>
                <td>${produtos[i].cod}</td>
                <td>${produtos[i].preco}</td>
                <td>${produtos[i].quant}</td>
                <td>${produtos[i].validade}</td>
                <td>${produtos[i].marca}</td>
            </tr>
        `;
    }
    conteudo += `
                    </tbody>
                </table>
                </div>
                <a class="btn btn-outline-danger" href="/CadProdutos">Voltar</a>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            </body>
        </html>
    `;
    res.send(conteudo);
})
app.listen(port,()=>{
    console.log(`Servidor Online na porta: ${port}`)
})
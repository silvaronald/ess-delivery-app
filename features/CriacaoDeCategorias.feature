Feature: Criação de categorias de itens
    As a usuário do sistema
    I want criar categorias de itens
    So that categorizar os itens do meu restaurante

    Scenario: Acessar página de categorias de itens
        Given eu sou um usuário do sistema
        And estou na página do meu perfil
        When clico em "Categorias de itens"
        Then vejo a página "Categorias de itens"
        And vejo o botão "Criar categoria"

    Scenario: Criar categoria de itens
        Given eu sou um usuário do sistema
        And estou na página "Categorias de itens"
        And não vejo a categoria "Pizzas"
        When clico em "Criar categoria"
        Then vejo a janela "Criar categoria"
        And vejo o campo "Nome" e o botão "Criar"
        When preencho o campo "Nome" com "Pizzas"
        And clico em "Criar"
        Then vejo a página "Categorias de itens"
        And vejo a categoria "Pizzas"
        And vejo os botões "Remover categoria" 

    Scenario: Criar categoria de itens com nome já existente
        Given eu sou um usuário do sistema
        And a categoria "Pizzas" já existe
        And estou na página "Categorias de itens"
        When clico em "Criar categoria"
        Then vejo a janela "Criar categoria"
        And vejo o campo "Nome" e o botão "Criar"
        When preencho o campo "Nome" com "Pizzas"
        And clico em "Criar"
        Then vejo a janela "Criar categoria"
        And vejo a mensagem "Nome já está em uso" ao lado do botão "Criar"

    Scenario: Criar categoria de itens com nome vazio
        Given eu sou um usuário do sistema
        And estou na página "Categorias de itens"
        When clico em "Criar categoria"
        Then vejo a janela "Criar categoria"
        And vejo o campo "Nome" e o botão "Criar"
        When clico em "Criar"
        Then vejo a janela "Criar categoria"
        And vejo a mensagem "Nome não pode ficar em branco" ao lado do botão "Criar"
    
    Scenario: Remover categoria de itens
        Given eu sou um usuário do sistema
        And estou na página "Categorias de itens"
        And vejo as categorias "Pizzas", "Bebidas" e "Sobremesas"
        When clico em "Remover categoria" da categoria "Pizzas"
        Then vejo a página "Categorias de itens"
        And vejo as categorias "Bebidas" e "Sobremesas"
        And não vejo a categoria "Pizzas"
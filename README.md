<h1 align="center">MyContacts</h1>

Uma API Node.js para criar e categorizar contatos, com Express e Postgres(Docker). Desenvolvido como projeto de estudo na Formação Fullstack, da plataforma JStack.

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)

## :hammer_and_wrench: Tecnologias
Ferramentas usadas na construção do projeto:
- [Node.js (v22.12.0)](<https://nodejs.org/en/>)
- [npm (v10.9.2)](https://www.npmjs.com/)
- [Express (v4.21.2)](https://expressjs.com/)
- [Docker (v27.4.0)](https://www.docker.com/)

Ferramentas usadas no desenvolvimento do projeto:
- [VSCode (v1.96.3)](https://code.visualstudio.com/)
- [Insomnia(v10.3.0)](https://insomnia.rest/)
- [Yarn (v1.22.21)](https://classic.yarnpkg.com/lang/en/)
- [Nodemon (v3.1.9)](https://www.npmjs.com/package/nodemon)
- ESLint
- EditorConfig

## :computer: Funcionalidades e Demonstração da Aplicação

Controllers:

- `index()`: método para listar registros existentes

- `show()`: método para buscar registro por parâmetros(IDs, email, nome)

- `store()`: método para criar novo registro

- `update()`: método para atualizar um registro

- `delete()`: método para apagar um registro

Repositories:

- `findAll()`: Lista todos os contatos/categorias cadastrados

- `findById()`: Retorna um contato/categoria com ID correspondente

- `findByEmail()`: Retorna um contato com email correspondente

- `findByName()`: Retorna uma categoria com nome correspondente

- `create()`: Cria um novo contato/categoria

- `update()`: Atualiza dados de um contato/categoria existente

- `delete()`: Deleta contato/categoria com ID correspondente

## :open_file_folder: Acesso ao Projeto
```
#Baixar arquivos manualmente ou clonar repositório
$ git clone [url_projeto]
```

## :gear: Executar
```
# Instalar o Docker, baixar img do Postgres, criar container e deixar executando
# Estruturar banco de dados conforme schema.sql
# Abrir projeto e executar aplicação no terminal do VSCode
$ yarn init
$ yarn dev
```

No Insomina testar as rotas GET, POST, PUT e DELETE com a seguintes URLs:
- http://localhost:3000/contacts
- http://localhost:3000/categories

## Pessoas Desenvolvedoras do Projeto

Stephanie de França

## Licenses
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

# Projeto React - Sistema de Login com Firebase

Projeto desenvolvido em React com o objetivo de implementar um sistema de cadastro e autenticação de usuários utilizando Firebase Authentication e Cloud Firestore.

## Funcionalidades

A aplicação possui três páginas principais:

- Login
- Cadastro
- Principal

### Cadastro

Na página de cadastro, o usuário deve informar:

- E-mail
- Senha
- Confirmação da senha
- Nome
- Sobrenome
- Data de nascimento

Todos os campos são obrigatórios.

Antes de realizar o cadastro, a aplicação verifica se a senha e a confirmação da senha são iguais.

O usuário é criado utilizando o Firebase Authentication.

Após a criação da conta, os dados do usuário são armazenados no Cloud Firestore utilizando o UID gerado pelo Firebase.

### Login

O usuário pode realizar o login utilizando:

- E-mail
- Senha

A autenticação é realizada através do Firebase Authentication.

Caso os dados estejam corretos, o usuário é direcionado para a Página Principal.

Caso o e-mail ou a senha estejam incorretos, a aplicação apresenta uma mensagem de erro.

A sessão de autenticação é mantida somente durante a sessão do navegador.

### Página Principal

Após realizar o login, a aplicação utiliza o UID do usuário autenticado para buscar seus dados no Firestore.

A página apresenta uma mensagem de boas-vindas e os dados cadastrados:

- Nome
- Sobrenome
- Data de nascimento

A página Principal possui proteção de acesso, impedindo que usuários não autenticados acessem seu conteúdo.

Também existe a opção de logout através do botão **Sair**.

## Navegação

A navegação entre as páginas é realizada utilizando React Router DOM.

As rotas da aplicação estão organizadas em um arquivo separado.

Fluxo principal:

```text
Login
  |
  |-- Cadastre-se
  v
Cadastro
  |
  |-- Firebase Authentication
  |-- Cloud Firestore
  |
  v
Login
  |
  |-- Autenticação
  v
Página Principal
  |
  |-- Sair
  v
Login
```

## Firebase

O projeto utiliza dois serviços do Firebase:

### Firebase Authentication

Responsável pelo cadastro e autenticação dos usuários através de e-mail e senha.

### Cloud Firestore

Responsável pelo armazenamento dos dados adicionais do usuário.

Os documentos são armazenados utilizando o UID do usuário:

```text
usuarios
   |
   └── UID
        ├── email
        ├── nome
        ├── sobrenome
        └── dataNascimento
```

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- Firebase Authentication
- Cloud Firestore
- Git
- GitHub

## Estrutura principal do projeto

```text
src/
├── firebase/
│   └── firebaseConfig.js
│
├── pages/
│   ├── Cadastro.jsx
│   ├── Login.jsx
│   └── Principal.jsx
│
├── routes/
│   └── Routes.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Executando o projeto

Clone o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd tela-login
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Depois, acesse o endereço informado pelo Vite no terminal.

## Objetivo

O objetivo deste projeto é praticar o desenvolvimento de uma aplicação React utilizando rotas, formulários, autenticação de usuários, armazenamento de dados e integração com Firebase.
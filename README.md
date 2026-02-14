🧪 Teste Técnico QA – Automação de Login
📌 Objetivo

Este projeto tem como objetivo validar o fluxo de login do Portal RDV utilizando testes automatizados com Cypress, cobrindo cenários de:

✅ Login válido

❌ Login inválido

A automação foi desenvolvida utilizando o padrão Page Object Model (POM) para melhor organização e manutenção do código.

🚀 Tecnologias Utilizadas

Node.js

Cypress

JavaScript

Page Object Model (POM)

📂 Estrutura do Projeto
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   ├── pages/
│   │   └── LoginPage.js
├── cypress.config.js
├── package.json
└── README.md

🔎 Cenários Automatizados
1️⃣ Login válido

Acessa a página de login

Preenche empresa, usuário e senha válidos

Clica em entrar

Valida redirecionamento para dashboard

2️⃣ Login inválido

Acessa a página de login

Preenche senha incorreta

Valida mensagem de erro: "Falha no login!"

⚙️ Como Executar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/ronald1134/qa-automation.git

2️⃣ Instalar as dependências
npm install

3️⃣ Executar o Cypress

Modo interface:

npx cypress open


Modo headless:

npx cypress run

🧠 Boas Práticas Aplicadas

Separação de responsabilidades com Page Object

Testes independentes

Validações claras e objetivas

Código organizado para fácil manutenção

👨‍💻 Autor

Ronald Oliveira
Teste Técnico – QA

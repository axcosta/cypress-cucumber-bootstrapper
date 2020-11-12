# Bootstrap para projeto de automação de testes com Cypress & Cucumber

Starter de projeto (do zero!) de automação de testes com Cypress & Cucumber. Para instalar esses componentes em um projeto já existente, copiar arquivo `cypress.json`, verificar pacotes no arquivo `package.json` e replicar mesma estrutura de pastas.

## Pré-requisitos

* [Git](https://git-scm.com) e
* [Node.js LTS & npm](https://www.npmjs.com/get-npm).

## Clonar projeto para repositório local

* Via HTTPS

`git clone https://github.com/axcosta/cypress-cucumber-bootstrapper.git`

* Via SSH

`git clone git@github.com:axcosta/cypress-cucumber-bootstrapper.git`

## Atualizar projeto

`npm install`

## Organização

Abaixo a configuração de localização dos arquivos de teste. Pode ser alterada no arquivo `cypress.json`.

| **Conteúdo** | **Pasta** |
| -------- | ----- |
| Funcionalidades (arquivos `*.feature` do Cucumber) | `test/acceptance` |
| Scripts (arquivos `*.js`) com testes de aceitação | `test/acceptance/<nome-do-arquivo-de-feature-sem-extensão>` |
| Fixtures (dados e configurações utilizados para os testes) | `test/fixtures` |
| Scripts compartilhados entre testes | `test/common` |
| Script (arquivo `commands.js`) com funções de ações comumente usadas nos testes | `test/support` |
| Script (arquivo `index.js`) de instalação de plugins p/ Cypress | `test/plugins` |
| Script (arquivo `index.js`) de configuração complementar do Cypress | `test/support` |
| Evidências em vídeo de testes | `test/videos` |
| Capturas de telas de testes | `test/screenshots` |

# Form Frontend

Objetivo deste teste é avaliar seus conhecimentos em organização, estilo, boas práticas e habilidades em frontend. Não basta apenas funcionar.

## Estrutura do projeto

`/client`

Esta é a pasta onde deve ficar o projeto *client*. Ela possui um `package.json` padrão, instale as dependências que achar necessário. Caso utilize o *create-react-app*, apague antes esta pasta e crie o projeto com o mesmo nome (*client*).

`/server`

Esta pasta contém a API necessária para o desenvolvimento do projeto. Para subir a API, entre na pasta e instale as dependências com `npm install` e depois `npm start`. Você terá as informações necessárias para interação com a API em `http://localhost:9004/`.

## Requisitos

- HTML (deixe o mais semântico possível)
- CSS (pré-processador opcional)
- Responsivo
- Testar as principais funcionalidades

## Proposta

- Montar dois formulários (*request* e *user*) com todas informações disponíveis.
- Montar um *menu* para alternar entre os dois formulários.
- Validar os formulários.
- Clicando em Submeter, montar painel lateral com os dados submetidos (não fazer POST).
- Clicando em Limpar, limpar painel lateral.
- Criar um README explicando como utilizar seu projeto [(Sugestão)](https://github.com/wearehive/project-guidelines/blob/master/README.sample.md).

## Bônus

Você tem liberdade para implementar da forma que quiser, mas alguns caminhos podem render mais pontos (abaixo). Caso você tenha uma idéia mais elaborada além das listadas abaixo, também poderá render mais pontos.

- Criar um SPA.
- Somente habilitar o campo seguinte após preencher o campo atual corretamente.
- Fazer o registro dos dados ao submeter criando uma lista de registros, podendo clicar em um registro e carregá-lo no painel.
- Fazer um CRUD completo dos registros (adicionar update e delete).

## O que apreciamos

- Feedbacks visuais
- HTML semântico
- CSS Grid e Flexbox
- Metodologias como BEM, SMACSS e outras
- ES6+
- Testes unitários e/ou de integração
- Código limpo e bem organizado

## Dados

O formulário *request* terá os seguintes campos:

- Qual será o serviço? (lista de opções)
- Para quem será o serviço? (lista de opções)
- O serviço será para quantas pessoas? (lista de opções)
- Para quando você precisa deste serviço? (lista de opções)
- Informações Adicionais (texto)

O formulário *user* terá os seguintes campos:

- name
- email
- phone
- cep

Ambos os formulários terão os seguintes elementos:

- Botão Submeter
- Botão Limpar
- Painel de submissão (mostra os dados submetidos)

## Dicas

- Exibir a mensagem "este campo é requerido" para os campos marcados como `required: true`.
- Não é preciso enviar os dados para o backend ao submeter (não precisa guardá-los).

## Guia de Estilo

O guia fornece uma sugestão de design mas não deve limitar a criatividade. O importante é que sua solução como um todo tenha um estilo coerente e moderno.

- [Clear Blue](https://xd.adobe.com/view/e48de5b3-6f33-4175-7c03-5f8668d892b3-92bc/)

## Desenvolvimento

Clone este repositório em sua máquina de desenvolvimento. Faça commits relevantes. Vamos analisar as mensagens usadas nos *commits* assim como o conteúdo de cada *commit*. A idéia é que cada *commit* seja tratado como se fosse um *Pull Request* (PR). Os *commits* não podem ser muito grandes e nem ter código não relacionado com a mensagem.

Para submeter sua solução, compacte a pasta raiz e nos envie por e-mail. Caso prefira, você pode subir sua solução em um repositório privado e convidar o avaliador para visualizar (neste caso, nos pergunte qual o endereço de e-mail do avaliador).

Não exponha publicamente sua solução na internet.

## Copyright

Este teste foi elaborado com base nos seguintes testes:  
[YapayPagamentos/frontend-challenge](https://github.com/YapayPagamentos/frontend-challenge)  
[getninjas/frontend-challenge](https://github.com/getninjas/frontend-challenge)

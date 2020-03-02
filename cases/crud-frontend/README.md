# CRUD Frontend

Objetivo deste teste é avaliar seus conhecimentos em organização, estilo, boas práticas e habilidades em frontend. Não basta apenas funcionar.

## Estrutura do projeto

`/client`

Esta é a pasta onde deve ficar o projeto *client*. Ela possui um `package.json` padrão, instale as dependências que achar necessário. Caso utilize o *create-react-app*, apague antes esta pasta e crie o projeto com o mesmo nome (*client*).

`/server`

Esta pasta contém a API necessária para o desenvolvimento do projeto. Para subir a API, entre na pasta e instale as dependências com `npm install` e depois `npm start`. Você terá as informações necessárias para interação com a API em `http://localhost:9004/`.

## Requisitos

- HTML (deixe o mais semântico possível)
- CSS (pré-processador opcional)
- JS (React + Redux ou Mobx)
- Responsivo
- Testar as principais funcionalidades

## Proposta

- Listar os usuários com todas informações disponíveis.
- Permitir a criação de novo usuário.
- Permitir a atualização de um usuário.
- Permitir a exclusão de um usuário.
- Criar um README explicando como utilizar seu projeto [(Sugestão)](https://github.com/wearehive/project-guidelines/blob/master/README.sample.md).

## Bônus

Você tem liberdade para implementar da forma que quiser, mas alguns caminhos podem render mais pontos (abaixo). Caso você tenha uma idéia mais elaborada além das listadas abaixo, também poderá render mais pontos.

- Criar um SPA.
- Realizar todas as ações do CRUD inline, na listagem.
- Usar Collapse/Accordion na listagem de usuários.

## O que apreciamos

- Feedbacks visuais
- HTML semântico
- CSS Grid e Flexbox
- Metodologias como BEM, SMACSS e outras
- ES6+
- Testes unitários e/ou de integração
- Código limpo e bem organizado

## Dados

Os usuários terão as seguites informações:

- name
- username
- email
- phone
- avatar/gender (*gender* para definição do avatar)

## Dicas

- Ao criar um novo usuário, deve-se pedir o gênero (*men* ou *women*) e gerar um número aleatório entre 0 e 99 para formar a URL do Avatar. O padrão da URL é <https://randomuser.me/api/portraits/women/14.jpg>.

## Guia de Estilo

O guia fornece uma sugestão de design mas não deve limitar a criatividade. O importante é que sua solução como um todo tenha um estilo coerente e moderno.

- [Clear Blue](https://xd.adobe.com/view/e48de5b3-6f33-4175-7c03-5f8668d892b3-92bc/)

## Desenvolvimento

Faça um fork deste repositório. Faça commits relevantes. Vamos analisar as mensagens usadas nos *commits* assim como o conteúdo de cada *commit*. A idéia é que cada *commit* seja tratado como se fosse um *Pull Request* (PR). PRs (*commits*) não podem ser muito grandes e nem ter código não relacionado com a mensagem.

## Copyright

Este teste foi elaborado com base no seguinte teste:  
[YapayPagamentos/frontend-challenge](https://github.com/YapayPagamentos/frontend-challenge)

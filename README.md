<p align="center">
  <img src="https://user-images.githubusercontent.com/15306309/44069354-b2428516-9f54-11e8-9e43-96d65ce32d0b.gif">
</p>

<h1 align="center">CEP Callback</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/cep-callback">
    <img src="https://img.shields.io/npm/dm/cep-callback.svg">
  </a>
  <a href="https://www.npmjs.com/package/cep-callback">
    <img src="https://badge.fury.io/js/cep-callback.svg">
  </a>
  <a href="https://snyk.io/test/github/otaviopace/cep-callback">
    <img src="https://snyk.io/test/github/otaviopace/cep-callback/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/otaviopace/cep-callback" style="max-width:100%;">
  </a>
</p>

<p align="center">
  Busca por CEP usando o melhor do JavaScript, callbacks
</p>

Todos sabem que hoje as Promises dominam o mundo do JavaScript. O que faz com que a utilização de callbacks seja algo do passado. Porém o **oldschool** é sempre mais legal, portanto essa biblioteca mostra como callbacks ainda podem ser utilizados e como você pode se sentir um **hipster** ao utilizá-las em 2018.

## Features

 * Interface com callbacks seguindo o padrão da biblioteca padrão do `Node.js`
 * Possui a mesma interface tanto nos erros como nas respostas do projeto [cep-promise](https://github.com/filipedeschamps/cep-promise)
 * O projeto utiliza de `var` que é o jeito **da massa** de se criar variáveis em JavaScript, sim isso é uma feature


## Como utilizar

### Realizando uma consulta

Por ser multifornecedor, a biblioteca irá chamar o callback com o fornecedor que **mais rápido** lhe responder.

``` js
var cep = require('cep-callback')

cep('05010000', (err, cepData) => {
  console.log(cepData)
})

  // {
  //   "cep":  "05010000",
  //   "state":  "SP",
  //   "city":  "São Paulo",
  //   "street":  "Rua Caiubí",
  //   "neighborhood":  "Perdizes",
  // }
```


### Você também poderá passar o CEP como Inteiro

Em muitos sistemas o CEP é utilizado erroneamente como um Inteiro (e com isto cortando todos os zeros à esquerda). Caso este seja o seu caso, não há problema, pois a biblioteca irá preencher os caracteres faltantes na String, por exemplo:

``` js
var cep = require('cep-callback')

// enviando sem ter um zero à esquerda do CEP "05010000"
cep(5010000, (err, cepData) => {
  console.log(cepData)
})

  // {
  //   "cep":  "05010000",
  //   "state":  "SP",
  //   "city":  "São Paulo",
  //   "street":  "Rua Caiubí",
  //   "neighborhood":  "Perdizes",
  // }
```

### Quando o CEP não é encontrado

Neste caso será retornado um `"service_error"` e por ser multifornecedor, a biblioteca irá retornar um erro no callback apenas quando tiver a resposta negativa de todos os fornecedores.

``` js
var cep = require('cep-callback')

cep('99999999', (err, cepData) => {
  console.log(err)
})

  // {
  //     name: 'CepPromiseError',
  //     message: 'Todos os serviços de CEP retornaram erro.',
  //     type: 'service_error',
  //     errors: [{
  //       message: 'CEP NAO ENCONTRADO',
  //       service: 'correios'
  //     }, {
  //       message: 'CEP não encontrado na base do ViaCEP.',
  //       service: 'viacep'
  //     }, {
  //       message: 'CEP não encontrado na base do Cep Aberto.',
  //       service: 'cepaberto'
  //     }]
  // }

```

### Quando o CEP possui um formato inválido

Neste caso será retornado um `"validation_error"` e a biblioteca irá retornar um erro no callback, sem chegar a consultar nenhum fornecedor.

``` js
var cep = require('cep-callback')

cep('123456789123456789', (err, cepData) => {
  console.log(err)
})

  // {
  //     name: 'CepPromiseError',
  //     message: 'CEP deve conter exatamente 8 caracteres.',
  //     type: 'validation_error',
  //     errors: [{
  //       message: 'CEP informado possui mais do que 8 caracteres.',
  //       service: 'cep_validation'
  //     }]
  // }
```


### Instalação

#### Browser usando CDN
```
<script src="https://cdn.jsdelivr.net/npm/cep-callback/src/index.js"></script>
```

#### npm

```
$ npm install --save cep-callback
```

#### Bower

```
$ bower install --save cep-callback
```

#### Angular 2

``` ts
import * as cep from 'cep-callback'

cep('05010000', (err, cepData) => {
  console.log(cepData)
})
```

## Como contribuir

Leia nosso guia de contribuição [aqui](CONTRIBUTING.md)

## Contribuidores

Ainda não temos, venha contribuir! :)


## Autor

| [<img src="https://avatars1.githubusercontent.com/u/15306309?&v=3&s=115"><br><sub>@otaviopace</sub>](https://github.com/otaviopace) |
| :---: |

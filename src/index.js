var callbackify = require('callbackify')
var cepPromise = require('cep-promise')

module.exports = callbackify((cep) => cepPromise(cep))

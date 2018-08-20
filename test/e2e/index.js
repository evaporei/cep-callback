var test = require('ava')
var cep = require('../../src')

test.cb('should return correct address with "05010000" string', function (t) {
  cep('05010000', function (err, cepData) {
    t.is(err, null)

    t.deepEqual(cepData, {
      cep: '05010000',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Perdizes',
      street: 'Rua Caiubi'
    })

    t.end()
  })
})

test.cb('should return correct address with a valid 5010000 number', function (t) {
  cep(5010000, function (err, cepData) {
    t.is(err, null)

    t.deepEqual(cepData, {
      cep: '05010000',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Perdizes',
      street: 'Rua Caiubi'
    })

    t.end()
  })
})

test.cb('should return error with an inexistent "99999999" CEP', function (t) {
  cep('99999999', function (err, cepData) {
    t.is(err.name, 'CepPromiseError')
    t.is(err.message, 'Todos os serviços de CEP retornaram erro.')
    t.is(err.type, 'service_error')

    t.is(cepData, undefined)

    t.end()
  })
})

test.cb('should return validation error when invoked with an invalid "123456789" CEP', function (t) {
  cep('123456789', function (err, cepData) {
    t.is(err.name, 'CepPromiseError')
    t.is(err.message, 'CEP deve conter exatamente 8 caracteres.')
    t.is(err.type, 'validation_error')

    t.is(cepData, undefined)

    t.end()
  })
})

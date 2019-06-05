/* global test, expect */

const correct = {
  Rein: 'rrr-eye-n',
  Wouter: 'V-out-uhr',
  Arien: 'Ah-r-ee-ehn'
}

const pronouncer = require('./index.js')

function isTruthy () {
  expect(pronouncer).toBeTruthy()
}

test('it creates something that is truthy', isTruthy)

function exposesNames () {
  expect(pronouncer.names).toHaveLength(3)
  expect(pronouncer.names).toContain('Rein')
  expect(pronouncer.names).toContain('Wouter')
  expect(pronouncer.names).toContain('Arien')
}

test('it exposes the names of the teachers', exposesNames)

function pronouncesName (name) {
  return function () {
    const pronunciation = pronouncer.pronounce(name)

    const correctPronunciation = correct[name]

    expect(pronunciation).toEqual(correctPronunciation)
  }
}

const pronouncesReinsName = pronouncesName('Rein')
test("it tells you how to pronounce Rein's name", pronouncesReinsName)

test("it tells you how to pronounce Wouter's name", pronouncesName('Wouter'))
test("it tells you how to pronounce Arien's name", pronouncesName('Arien'))

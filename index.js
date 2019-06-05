const pronunciations = {
  Rein: 'rrr-eye-n',
  Wouter: 'V-out-uhr',
  Arien: 'Ah-r-ee-ehn'
}

const pronouncer = {
  names: ['Rein', 'Wouter', 'Arien'],

  pronounce (name) {
    return pronunciations[name]
  }
}

module.exports = pronouncer

class AreaGeografica {
  static options() {
    return ([
      {value: 1, text: 'Identificador do sujeito local (L)'},
      {value: 2, text:  'Identificador da área, região ou distrito (A)'},
      {value: 3, text:  'Identificador do estado, província ou território (E)'},
      {value: 4, text:  'Identificador nacional (N)'}
    ])
  }
}

export default AreaGeografica
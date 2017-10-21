class AreaGeografica {
  static options() {
    return ([
      {codigo: 1, label: 'Identificador do sujeito local', codigoAlternativo: 'L'},
      {codigo: 2, label:  'Identificador da área, região ou distrito', codigoAlternativo:  'A'},
      {codigo: 3, label:  'Identificador do estado, província ou território', codigoAlternativo:  'E'},
      {codigo: 4, label:  'Identificador nacional', codigoAlternativo: 'N'}
    ])
  }
}

class AreaGeografica {
  constructor(codigo, descricao, codigoAlternativo) {
    Object.assign(this, {
      codigo,
      descricao,
      codigoAlternativo
    })
  }

  static areas() {
    return ([
      new AreaGeografica(1, 'Identificador do sujeito local', 'L'),
      new AreaGeografica(2, 'Identificador da área, região ou distrito', 'A'),
      new AreaGeografica(3, 'Identificador do estado, província ou território', 'E'),
      new AreaGeografica(4, 'Identificador nacional', 'N'),
    ])
  }
}

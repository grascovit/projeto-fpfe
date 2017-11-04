class CodigoContatoEletronico {
  static options() {
    return ([
      {value: 1, text: 'Comercial',                      codigoAlternativo: 'B'},
      {value: 2, text: 'Pessoal',                        codigoAlternativo: 'P'},
      {value: 3, text: 'Tanto comercial quanto pessoal', codigoAlternativo: 'A'}
    ])
  }
}

export default CodigoContatoEletronico

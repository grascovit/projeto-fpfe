class CodigoContatoEletronico {
  static options() {
    return ([
      {codigo: 1, label: 'Comercial', codigoAlternativo: 'B'},
      {codigo: 2, label: 'Pessoal', codigoAlternativo: 'P'},
      {codigo: 3, label: 'Tanto comercial quanto pessoal', codigoAlternativo: 'A'}
    ])
  }
}
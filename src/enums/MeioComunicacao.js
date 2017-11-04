class MeioComunicacao {
  static options() {
    return ([
      {value: 1, text:  'Telefone',           codigoAlternativo: 'T'},
      {value: 2, text:  'Celular',            codigoAlternativo: 'C'},
      {value: 3, text:  'Fax',                codigoAlternativo: 'F'},
      {value: 4, text:  'Pager',              codigoAlternativo: 'P'},
      {value: 5, text:  'Correio eletrônico', codigoAlternativo: 'E'},
      {value: 6, text:  'URL',                codigoAlternativo: 'U'},
      {value: 7, text:  'Outro',              codigoAlternativo: 'O'},
    ])
  }
}

export default MeioComunicacao

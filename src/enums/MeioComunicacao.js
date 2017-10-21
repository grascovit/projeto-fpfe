class MeioComunicacao {
  static options() {
    return ([
      {codigo: 1, label: 'Telefone', codigoAlternativo: 'T'},
      {codigo: 2, label:  'Celular', codigoAlternativo:  'C'},
      {codigo: 3, label:  'Fax', codigoAlternativo:  'F'},
      {codigo: 4, label:  'Pager', codigoAlternativo: 'P'},
      {codigo: 5, label:  'Correio eletrônico', codigoAlternativo: 'E'},
      {codigo: 6, label:  'URL', codigoAlternativo: 'U'},
      {codigo: 8, label:  'Outro', codigoAlternativo: 'O'},
    ])
  }
}
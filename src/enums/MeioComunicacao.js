class MeioComunicacao {
  static options() {
    return ([
      {value: 1, text:  'Telefone (T)'},
      {value: 2, text:  'Celular (C)'},
      {value: 3, text:  'Fax (F)'},
      {value: 4, text:  'Pager (P)'},
      {value: 5, text:  'Correio eletrônico (E)'},
      {value: 6, text:  'URL (U)'},
      {value: 7, text:  'Outro (O)'}
    ])
  }
}

export default MeioComunicacao

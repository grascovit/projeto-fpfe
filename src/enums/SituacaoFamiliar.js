class SituacaoFamiliar {
  static options() {
    return ([
      {value: 1, text: 'Companheiro(a) e filho(s)'},
      {value: 2, text: 'Companheiro(a) com laços conjugais e sem filhos'},
      {value: 3, text: 'Companheiro(a), com filho(s) e/ou outro(s) familiar(es)'},
      {value: 4, text: 'Familiar(es) sem companheiro(a)'},
      {value: 5, text: 'Outra(s) pessoa(s) sem laços consanguíneos e/ou laços conjugais'},
      {value: 6, text: 'Vive só'}
    ])
  }
}

export default SituacaoFamiliar
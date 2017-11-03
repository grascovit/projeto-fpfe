class PluralidadeNascimento {
  static options() {
    return ([
      {value: 1, text: 'Único'},
      {value: 2, text: 'Gêmeos'},
      {value: 3, text: 'Trigêmeos'},
      {value: 4, text: 'Quádruplos'},
      {value: 5, text: 'Quíntuplos'},
      {value: 6, text: 'Sêxtuplos'},
      {value: 7, text: 'Outros'},
      {value: 8, text: 'Não declarado'},
    ])
  }
}

export default PluralidadeNascimento
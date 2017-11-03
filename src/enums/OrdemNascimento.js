class OrdemNascimento {
  static options() {
    return ([
      {value: 1, text: 'Único ou primeiro'},
      {value: 2, text: 'Segundo'},
      {value: 3, text: 'Terceiro'},
      {value: 4, text: 'Quarto'},
      {value: 5, text: 'Quinto'},
      {value: 6, text: 'Sexto'},
      {value: 7, text: 'Outros'},
      {value: 8, text: 'Não declarado'},
    ])
  }
}

export default OrdemNascimento
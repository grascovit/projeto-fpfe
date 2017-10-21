class UsoNome{
  constructor(codigo, descricao, codigoAlternativo) {
    Object.assign(this, {
      codigo,
      descricao,
      codigoAlternativo
    })
  }

  static usoNomes() {
    return ([
      new UsoNome(1, 'Relatorio', 'R'),
      new UsoNome(2, 'Nome de recém-nascido', 'N'),
      new UsoNome(3, 'Nome profissional ou comercial', 'C'),
      new UsoNome(4, 'Nome de solteiro', 'S'),
      new UsoNome(5, 'Nome registrado', 'L'),
      new UsoNome(8, 'Outro Nome', 'O')
    ])
  }
}
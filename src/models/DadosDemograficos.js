class DadosDemograficos {
  constructor(dataNascimento, acuraciaDiaNascimento, acuraciaMesNascimento, acuraciaAnoNascimento,
    indicadorSeguimentoNascimento, dataObito, acuraciaDiaObito, acuraciaMesObito, acuraciaAnoObito, 
    fonteNotificacaoObito, sexo, nomeMae, nomePai, situacaoFamiliar, raca, nacionalidade, municipioNascimento, 
    estadoNascimento, paisNascimento, dataEntradaPais, pluralidadeNascimento, ordemNascimento, comentario) {
      Object.assign(this, {
        dataNascimento,
        acuraciaDiaNascimento,
        acuraciaMesNascimento,
        acuraciaAnoNascimento,
        indicadorSeguimentoNascimento,
        dataObito,
        indicadorAcuraciaObito,
        fonteNotificacaoObito,
        sexo,
        nomeMae,
        nomePai,
        situacaoFamiliar,
        raca,
        nacionalidade,
        municipioNascimento,
        estadoNascimento,
        paisNascimento,
        dataEntradaPais,
        pluralidadeNascimento,        
        ordemNascimento,
        comentario
      })
  }
}

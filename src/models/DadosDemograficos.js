class DadosDemograficos {
  constructor(props) {
      Object.assign(this, {
        dataNascimento: props.dataNascimento,
        acuraciaDiaNascimento: props.acuraciaDiaNascimento,
        acuraciaMesNascimento: props.acuraciaMesNascimento,
        acuraciaAnoNascimento: props.acuraciaAnoNascimento,
        indicadorSeguimentoNascimento: props.indicadorSeguimentoNascimento,
        dataObito: props.dataObito,
        acuraciaDiaObito: props.acuraciaDiaObito,
        acuraciaMesObito: props.acuraciaMesObito,
        acuraciaAnoObito: props.acuraciaAnoObito,
        fonteNotificacaoObito: props.fonteNotificacaoObito,
        sexo: props.sexo,
        nomeMae: props.nomeMae,
        nomePai: props.nomePai,
        situacaoFamiliar: props.situacaoFamiliar,
        raca: props.raca,
        nacionalidade: props.nacionalidade,
        municipioNascimento: props.municipioNascimento,
        estadoNascimento: props.estadoNascimento,
        paisNascimento: props.paisNascimento,
        dataEntradaPais: props.dataEntradaPais,
        pluralidadeNascimento: props.pluralidadeNascimento,  
        ordemNascimento: props.ordemNascimento,
        comentario: props.comentario
      })
  }
}

export default DadosDemograficos
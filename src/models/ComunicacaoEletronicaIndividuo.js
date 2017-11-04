class ComunicacaoEletronicaIndividuo {
  constructor(props) {
      Object.assign(this, {
        meioComunicacao: props.meioComunicacao, // Meio de comunicação eletrônica, conforme o código, descrição e código alternativo
        codigoPreferenciaContato: props.codigoPreferenciaContato, // Código de preferência do contato eletrônico. Uso preferido do contato fornecido
        detalhes: props.detalhes, // Detalhes da comunicação eletrônica
        codigoUtilizacaoContato: props.codigoUtilizacaoContato // Código de utilização do contato eletrônico
      })
  }
}

export default ComunicacaoEletronicaIndividuo
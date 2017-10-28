class ComunicacaoEletronicaIndividuo {
  constructor(meioComunicacao, codigoPreferenciaContato, detalhes, codigoUtilizacaoContato) {
      Object.assign(this, {
        meioComunicacao, // Meio de comunicação eletrônica, conforme o código, descrição e código alternativo
        codigoPreferenciaContato, // Código de preferência do contato eletrônico. Uso preferido do contato fornecido
        detalhes, // Detalhes da comunicação eletrônica
        codigoUtilizacaoContato // Código de utilização do contato eletrônico
      })
  }
}

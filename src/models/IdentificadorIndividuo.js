class IdentificadorIndividuo {
  constructor(identificador, areaGeografica, emissor, dataDeEmissao, tipoIdentificador) {
    Object.assign(this, {
      identificador, // Número ou código atribuído a uma pessoa por uma organização. Não pode ser nulo ou vazio
      areaGeografica, // Código que representa a área geográfica na qual o identificador é utilizado
      emissor, // Organização que aloca uma designação do identificador de um indivíduo
      dataDeEmissao, // A data na qual foi emitido o documento de identificação do indivíduo. Tipo: data
      tipoIdentificador // Código que identifica o tipo de identificador. Tipo: texto. Exemplo: carteira de trabalho e certidão de nascimento
    })
  }
}

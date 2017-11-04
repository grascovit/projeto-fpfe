class IdentificadorIndividuo {
  constructor(props) {
    Object.assign(this, {
      identificador: props.identificador, // Número ou código atribuído a uma pessoa por uma organização. Não pode ser nulo ou vazio
      areaGeografica: props.areaGeografica, // Código que representa a área geográfica na qual o identificador é utilizado
      emissor: props.emissor, // Organização que aloca uma designação do identificador de um indivíduo
      dataDeEmissao: props.dataDeEmissao, // A data na qual foi emitido o documento de identificação do indivíduo. Tipo: data
      tipoIdentificador: props.tipoIdentificador, // Código que identifica o tipo de identificador. Tipo: texto. Exemplo: carteira de trabalho e certidão de nascimento
      atributosAdicionaisTipoIdentificador: props.atributosAdicionaisTipoIdentificador // 3.1.2 Componentes opcionais - Vai ser tratado na view e salvo como atributos adicionais
    })
  }
}

export default IdentificadorIndividuo
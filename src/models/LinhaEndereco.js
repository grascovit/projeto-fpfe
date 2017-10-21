class LinhaEndereco {
  constructor(abreviacaoSubunidade, numeroSubunidade, nomePropriedade, numeroAndar, 
    tipoAndar, complemento, numeroPropriedade, numeroSecaoLote, nomeLogradouro, 
    codigoLogradouro, codigoSufixoLogradouro, setorCensitario) {
      Object.assign(this, {
        abreviacaoSubunidade, // Abreviação do tipo de subunidade do edifício/complexo
        numeroSubunidade: 1, // Número da subunidade do edifício/complexo
        nomePropriedade, // Nome do edifício/propriedade
        numeroAndar, // Número do andar/nível
        tipoAndar, // Tipo de andar/nível
        complemento, // Complemento
        numeroPropriedade, // Número da propriedade
        numeroSecaoLote, // Número da seção do lote
        nomeLogradouro, // Nome do logradouro
        codigoLogradouro, // Código do tipo de logradouro
        codigoSufixoLogradouro, // Código do sufixo do logradouro
        setorCensitario // Setor censitário
      })
  }
}
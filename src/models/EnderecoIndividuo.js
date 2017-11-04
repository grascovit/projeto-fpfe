class EnderecoIndividuo {
  constructor(props) {
      Object.assign(this, {
        linhaEndereco: props.linhaEndereco, // Linha de endereço
        bairro: props.bairro, // Bairro
        municipio: props.municipio, // Município
        codigoMunicipio: props.codigoMunicipio, // Código do município
        estado: props.estado, // Estado
        codigoPostal: props.codigoPostal, // Código postal
        caixaPostal: props.caixaPostal, // Caixa postal 
        identificadorPais: props.identificadorPais, // Identificador do país
        tipoEndereco: props.tipoEndereco // Tipo do endereço
      })
  }
}

export default EnderecoIndividuo
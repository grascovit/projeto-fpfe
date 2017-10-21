class EnderecoIndividuo {
  constructor(linhaEndereco, bairro, municipio, codigoMunicipio, estado, 
    codigoPostal, caixaPostal, identificadorPais, tipoEndereco) {
      Object.assign(this, {
        linhaEndereco, // Linha de endereço
        bairro, // Bairro
        municipio, // Município
        codigoMunicipio, // Código do município
        estado, // Estado
        codigoPostal, // Código postal
        caixaPostal, // Caixa postal 
        identificadorPais, // Identificador do país
        tipoEndereco // Tipo do endereço
      })
  }
}

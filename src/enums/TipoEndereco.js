class TipoEndereco {
  static options() {
    return ([
      {value: 1, text: 'Comercial'},
      {value: 2, text: 'Correio ou postal'},
      {value: 3, text: 'Acomodação temporária'},
      {value: 4, text: 'Residencial'},
      {value: 8, text: 'Sem endereço fixo'},
      {value: 9, text: 'Desconhecido/não declarado/inadequadamente descrito'}
    ])
  }
}

export default TipoEndereco

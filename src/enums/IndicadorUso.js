//O indicador de uso opcional não é obrigatório. 
//Se definido, então o valor é um de 6 códigos 
//possíveis documentados abaixo.
class IndicadorUso{
  static options() {
    return ([
      { value: 1, text: 'Informação não confiável' },
      { value: 2, text: 'Nome com erro de digitação'},
      { value: 3, text: 'Nome não é para ser usado'},
      { value: 4, text: 'Vínculo do nome proibido por lei'},
      { value: 6, text: 'Requisito especial de privacidade/segurança'},
      { value: 9, text: 'Nome temporário'},
      ])
  }
}

export default IndicadorUso
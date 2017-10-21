//O indicador de uso opcional não é obrigatório. 
//Se definido, então o valor é um de 6 códigos 
//possíveis documentados abaixo.
class IndicadorNome{
  static options() {
    return ([
      { codigo: 1, label: 'Informação não confiável' },
      { codigo: 2, label: 'Nome com erro de digitação'},
      { codigo: 3, label: 'Nome não é para ser usado'},
      { codigo: 4, label: 'Vínculo do nome proibido por lei'},
      { codigo: 6, label: 'Requisito especial de privacidade/segurança'},
      { codigo: 9, label: 'Nome temporário'},
      ])
  }
}
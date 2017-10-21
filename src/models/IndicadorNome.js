//O indicador de uso opcional não é obrigatório. 
//Se definido, então o valor é um de 6 códigos 
//possíveis documentados abaixo.
class IndicadorNome{
  constructor(codigo, descricao){
    Object.assign(this, {
      codigo,
      descricao
    })
  }
  static indicadores() {
    return ([
      new IndicadorNome(1, 'Informação não confiável'),
      new IndicadorNome(2, 'Nome com erro de digitação'),
      new IndicadorNome(3, 'Nome não é para ser usado'),
      new IndicadorNome(4, 'Vínculo do nome proibido por lei'),
      new IndicadorNome(6, 'Requisito especial de privacidade/segurança'),
      new IndicadorNome(9, 'Nome temporário')
    ])
  }
}
// Um indivíduo pode possuir vários nomes. Cada nome registrado deve ter pelo menos 
// um grupo de utilização associado.  Se o indivíduo possuir um único nome registrado,
// então esse deve ser empregado para todo e qualquer propósito. 
class GrupoUtilizacao{
  constructor(usoNome, idUso, dataInicio, dataFim){
    Object.assign(this, {
      usoNome, // uso do nome, UsoNome.js
      idUso, // identificador para uso
      dataInicio, // data de início do uso
      dataFim// data final do uso
    })
  }
}
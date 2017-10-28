class VinculoIndividuo {
  constructor(identificador, relacionamento, dataDeInicio, dataDeFim) {
    Object.assign(this, {
      identificador, // Identificador do vínculo do indivíduo. Tipo: ID único, exemplo: 1234587ABCM
      relacionamento, // Relacionamento do vínculo do indivíduo. Tipo: texto, exemplo: M
      dataDeInicio, // Data inicial do vínculo. Tipo: data
      dataDeFim // Data final do vínculo. Tipo: data
    })
  }
}

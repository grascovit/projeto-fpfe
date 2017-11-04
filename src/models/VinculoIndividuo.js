class VinculoIndividuo {
  constructor(identificadorVinculo, relacionamentoVinculo, dataDeInicioVinculo, dataDeFimVinculo) {
    Object.assign(this, {
      identificadorVinculo, // Identificador do vínculo do indivíduo. Tipo: ID único, exemplo: 1234587ABCM
      relacionamentoVinculo, // Relacionamento do vínculo do indivíduo. Tipo: texto, exemplo: M
      dataDeInicioVinculo, // Data inicial do vínculo. Tipo: data
      dataDeFimVinculo // Data final do vínculo. Tipo: data
    })
  }
}

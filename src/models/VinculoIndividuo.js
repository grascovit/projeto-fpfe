class VinculoIndividuo {
  constructor(props) {
    Object.assign(this, {
      identificadorVinculo: props.identificadorVinculo, // Identificador do vínculo do indivíduo. Tipo: ID único, exemplo: 1234587ABCM
      relacionamentoVinculo: props.relacionamentoVinculo, // Relacionamento do vínculo do indivíduo. Tipo: texto, exemplo: M
      dataDeInicioVinculo: props.dataDeInicioVinculo, // Data inicial do vínculo. Tipo: data
      dataDeFimVinculo: props.dataDeFimVinculo // Data final do vínculo. Tipo: data
    })
  }
}

export default VinculoIndividuo
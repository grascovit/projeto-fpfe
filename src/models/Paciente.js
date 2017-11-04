class Paciente {
  constructor(identificadores, nome, dadosDemograficos, enderecos, comunicacoesEletronicas, vinculos) {
    Object.assign(this, {
      identificadores, // Instâncias de 'IdentificadorIndividuo'
      nome, // Instâncias de 'NomeIndividuo'
      dadosDemograficos, // Instâncias de 'DadosDemograficos'
      enderecos, // Instâncias de 'EnderecoIndividuo'
      comunicacoesEletronicas, // Instâncias de 'ComunicacaoEletronicaIndividuo'
      vinculos // Instâncias de 'VinculoIndividuo'
    })
  }
}

export default Paciente

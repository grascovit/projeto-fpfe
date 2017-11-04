class NomeIndividuo{
  constructor(props) {
    Object.assign(this, {
      titulos: props.titulos, //titulos do individuo, EX.: Prof., Dr.. Não obrigatório
      nome: props.nome, //nome do individuo, Não obrigatório
      nomeAlternativo: props.nomeAlternativo,//Estabelece a representação de um nome quando a representação alfabética não é aquela usada na comunidade.
      indicadorUso: props.indicadorUso, //indicador de uso opcional para nome, Indicador, Não obrigatório
      sobrenome: props.sobrenome, //Sobrenome do individuo, Obrigatório
      sufixos: props.sufixos
    })
  }
}

export default NomeIndividuo
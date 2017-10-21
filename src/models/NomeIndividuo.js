class NomeIndividuo{
  constructor(titulos, nome, indicador, sufixos, tipoIndentificador) {
    Object.assign(this, {
      titulos, //titulos do individuo, EX.: Prof., Dr.. Não obrigatório
      nome, //nome do individuo, Não obrigatório
      indicadorUso, //indicador de uso opcional para nome, Indicador, Não obrigatório
      sobrenome, //Sobrenome do individuo, Obrigatório
      sufixos
    })
  }
}



import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'

class Paciente extends Component {
  render() {
    const paciente = this.props.paciente
    const identificador = paciente.identificadorIndividuo
    const nome = paciente.nomeIndividuo
    const dadosDemograficos = paciente.dadosDemograficos
    const endereco = paciente.endereco
    const comunicacaoEletronica = paciente.comunicacaoEletronica
    const vinculos = paciente.vinculos

    return (
      <div>
        <h4>Identificadores</h4>
        <p>Designação: {identificador.identificador}</p>
        <p>Área geográfica: {identificador.areaGeografica}</p>
        <p>Emissor: {identificador.emissor}</p>
        <p>Data de emissão: {identificador.dataDeEmissao}</p>
        <p>Tipo de identificador: {identificador.tipoIdentificador}</p>

        <h4>Nome</h4>
        <p>Títulos: {nome.titulos}</p>
        <p>Nome: {nome.nome}</p>
        <p>Nome alternativo: {nome.nomeAlternativo}</p>
        <p>Indicador de uso: {nome.indicadorUso}</p>
        <p>Sobrenome: {nome.sobrenome}</p>
        <p>Sufixos: {nome.sufixos}</p>

        <h4>Dados demográficos</h4>
        <p>Data de nascimento: {dadosDemograficos.dataNascimento}</p>
        <p>Acurácia do dia de nascimento: {dadosDemograficos.acuraciaDiaNascimento}</p>
        <p>Acurácia do mês de nascimento: {dadosDemograficos.acuraciaMesNascimento}</p>
        <p>Acurácia do ano de nascimento: {dadosDemograficos.acuraciaAnoNascimento}</p>
        <p>Indicador do seguimento do nascimento: {dadosDemograficos.indicadorSeguimentoNascimento}</p>
        <p>Data de óbito: {dadosDemograficos.dataObito}</p>
        <p>Acurácia do dia do óbito: {dadosDemograficos.acuraciaDiaObito}</p>
        <p>Acurácia do mês do óbito: {dadosDemograficos.acuraciaMesObito}</p>
        <p>Acurácia do ano do óbito: {dadosDemograficos.acuraciaAnoObito}</p>
        <p>Fonte de notificação do óbito: {dadosDemograficos.fonteNotificacaoObito}</p>
        <p>Sexo: {dadosDemograficos.sexo}</p>
        <p>Nome da mãe: {dadosDemograficos.nomeMae}</p>
        <p>Nome do pai: {dadosDemograficos.nomePai}</p>
        <p>Situação familiar: {dadosDemograficos.situacaoFamiliar}</p>
        <p>Raça/cor: {dadosDemograficos.raca}</p>
        <p>Nacionalidade: {dadosDemograficos.nacionalidade}</p>
        <p>Município de nascimento: {dadosDemograficos.municipioNascimento}</p>
        <p>Estado de nascimento: {dadosDemograficos.estadoNascimento}</p>
        <p>País de nascimento: {dadosDemograficos.paisNascimento}</p>
        <p>Data de entrada no país: {dadosDemograficos.dataEntradaPais}</p>
        <p>Pluralidade do nascimento: {dadosDemograficos.pluralidadeNascimento}</p>
        <p>Ordem do nascimento: {dadosDemograficos.ordemNascimento}</p>
        <p>Comentário: {dadosDemograficos.comentario}</p>

        <h4>Endereço</h4>
        <p>Tipo de endereço: {endereco.tipoEndereco}</p>
        <p>Bairro: {endereco.bairro}</p>
        <p>Município: {endereco.municipio}</p>
        <p>Código do município: {endereco.codigoMunicipio}</p>
        <p>Estado: {endereco.estado}</p>
        <p>Código postal: {endereco.codigoPostal}</p>
        <p>Caixa postal: {endereco.caixaPostal}</p>
        <p>Identificador do país: {endereco.identificadorPais}</p>

        <h4>Comunicação eletrônica</h4>
        <p>Meio de comunicação: {comunicacaoEletronica.meioComunicacao}</p>
        <p>Código de preferência do contato: {comunicacaoEletronica.codigoPreferenciaContato}</p>
        <p>Detalhes: {comunicacaoEletronica.detalhes}</p>
        <p>Código de utilização do contato: {comunicacaoEletronica.codigoUtilizacaoContato}</p>

        <h4>Vínculos</h4>
        <p>Identificador único do vínculo: {vinculos.identificadorVinculo}</p>
        <p>Relacionamento do indivíduo: {vinculos.relacionamentoVinculo}</p>
        <p>Data de início do vínculo: {vinculos.dataDeInicioVinculo}</p>
        <p>Data de fim do vínculo: {vinculos.dataDeFimVinculo}</p>
        <Divider />
      </div>
    )
  }
}

export default Paciente

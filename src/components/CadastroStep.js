import React, { Component } from 'react'
import { Icon, Step } from 'semantic-ui-react'

class CadastroStep extends Component {
  stepOption = () => {
    return ({
      identificadorIndividuo: { icon: 'id card outline', title: 'Identificadores', description: 'Identificadores do paciente' },
      nomeIndividuo: { icon: 'folder outline', title: 'Nome', description: 'Identificação nominal do paciente' },
      dadosDemograficos: { icon: 'browser', title: 'Dados Demográficos', description: 'Dados demográficos adicionais' },
      endereco: { icon: 'map', title: 'Endereço', description: 'Endereço do paciente' },
      comunicacaoEletronica: { icon: 'mail outline', title: 'Comunicação eletrônica', description: 'Dados de contatos eletrônicos' },
      vinculos: { icon: 'group', title: 'Vínculos', description: 'Vínculos do paciente' },
      persistencia: { icon: 'save', title: 'Persistência', description: 'Salvar dados' }
    })
  }

  handleStepClick = (e) => {
    e.preventDefault()
    this.props.stepChangeCallback(this.props.step.option)
  }

  render() {
    const option = this.stepOption()[this.props.step.option]

    return (
      <Step link active={this.props.step.isActive} completed={this.props.step.isCompleted} onClick={this.handleStepClick}>
        <Icon name={option.icon} color='teal'/>
        <Step.Content>
          <Step.Title>{option.title}</Step.Title>
          <Step.Description>{option.description}</Step.Description>
        </Step.Content>
      </Step>
    )
  }
}

export default CadastroStep

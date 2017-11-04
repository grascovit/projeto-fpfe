import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { Grid, Step, Segment, Button, Icon } from 'semantic-ui-react'
import Layout from '../components/layout/Layout'
import CadastroStep from '../components/CadastroStep'
import IdentificadorIndividuo  from '../models/IdentificadorIndividuo'
import NomeIndividuo from '../models/NomeIndividuo'
import DadosDemograficos from '../models/DadosDemograficos'
import EnderecoIndividuo from '../models/EnderecoIndividuo'
import ComunicacaoEletronicaIndividuo from '../models/ComunicacaoEletronicaIndividuo'
import VinculoIndividuo from '../models/VinculoIndividuo'
import FormIdentificadorIndividuo from '../components/forms/FormIdentificadorIndividuo'
import FormNomeIndividuo from '../components/forms/FormNomeIndividuo'
import FormDadosDemograficos from '../components/forms/FormDadosDemograficos'
import FormEndereco from '../components/forms/FormEndereco'
import FormComunicacaoEletronica from '../components/forms/FormComunicacaoEletronica'
import FormVinculos from '../components/forms/FormVinculos'
import FormPersistencia from '../components/forms/FormPersistencia'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      steps: {
        identificadorIndividuo: { isActive: true, isCompleted: false, option: 'identificadorIndividuo', form: FormIdentificadorIndividuo },
        nomeIndividuo: { isActive: false, isCompleted: false, option: 'nomeIndividuo', form: FormNomeIndividuo },
        dadosDemograficos: { isActive: false, isCompleted: false, option: 'dadosDemograficos', form: FormDadosDemograficos },
        endereco: { isActive: false, isCompleted: false, option: 'endereco', form: FormEndereco },
        comunicacaoEletronica: { isActive: false, isCompleted: false, option: 'comunicacaoEletronica', form: FormComunicacaoEletronica },
        vinculos: { isActive: false, isCompleted: false, option: 'vinculos', form: FormVinculos },
        persistencia: { isActive: false, isCompleted: false, option: 'persistencia', form: FormPersistencia }
      },
      identificadorIndividuo: {},
      nomeIndividuo: {},
      dadosDemograficos: {},
      endereco: {},
      comunicacaoEletronica: {},
      vinculos: {}
    }
  }

  handleStepChange = (targetStep) => {
    if(this.state.steps[targetStep] === 'active') return null

    // Copia o estado atual
    const steps = {...this.state.steps}

    // Modifica o estado
    _.find(steps, ['isActive', true]).isActive = false
    steps[targetStep].isActive = true

    // Seta o novo estado
    this.setState({ steps })
  }

  handleInputChange = (event) => {
    const activeStep = _.find(this.state.steps, ['isActive', true]).option
    const property = event.target.name
    const value = event.target.value
    let object = this.state[activeStep]
    object[property] = value

    this.setState({[activeStep]: object})
  }

  handleSelectChange = (property, value) => {
    const activeStep = _.find(this.state.steps, ['isActive', true]).option
    let object = this.state[activeStep]
    object[property] = value

    this.setState({[activeStep]: object})
  }

  handleSave = (event, data) => {
    let activeStep = _.find(this.state.steps, ['isActive', true]).option
    let patients = JSON.parse(sessionStorage.getItem('patients'))
    let patient = {}
    let identificador = new IdentificadorIndividuo({...this.state.identificadorIndividuo})
    let nome = new NomeIndividuo({...this.state.nomeIndividuo})
    let dadosDemograficos = new DadosDemograficos({...this.state.dadosDemograficos})
    let endereco = new EnderecoIndividuo({...this.state.endereco})
    let comunicacaoEletronica = new ComunicacaoEletronicaIndividuo({...this.state.comunicacaoEletronica})
    let vinculos = new VinculoIndividuo({...this.state.vinculos})

    patient['identificadorIndividuo'] = identificador
    patient['nomeIndividuo'] = nome
    patient['dadosDemograficos'] = dadosDemograficos
    patient['endereco'] = endereco
    patient['comunicacaoEletronica'] = comunicacaoEletronica    
    patient['vinculos'] = vinculos

    if (patients === null) {
      patients = []
      patients.push(patient)
    } else {
      patients.push(patient)
    }

    sessionStorage.setItem('patients', JSON.stringify(patients))
  }

  renderCadastroStep = (key) => {
    return (
      <CadastroStep
        key={key}
        step={this.state.steps[key]}
        stepChangeCallback={this.handleStepChange}
      />
    )
  }

  render() {
    // eslint-disable-next-line react/jsx-pascal-case
    const $ActiveStepForm = _.find(this.state.steps, ['isActive', true]).form

    return (
      <Layout router={this.props.history} icon='home' header='Home' subheader='Cadastro de identificador de paciente.'>
        <Grid columns={16} stackable padded='vertically'>
          <Grid.Row>
            <Grid.Column width={5}>
              <Step.Group stackable='tablet' size='small' vertical>
                {Object.keys(this.state.steps).map(this.renderCadastroStep)}
              </Step.Group>
            </Grid.Column>

            <Grid.Column width={11} stretched>
              <Segment color='teal'>
                <$ActiveStepForm
                  formObject={this.state[_.find(this.state.steps, ['isActive', true]).option]}
                  handleInputChange={this.handleInputChange}
                  handleSelectChange={this.handleSelectChange}
                  handleSave={this.handleSave} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(Home);

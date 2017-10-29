import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Grid, Step, Segment } from 'semantic-ui-react'
import Layout from '../components/layout/Layout'
import CadastroStep from '../components/CadastroStep'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      steps: {
        identificadorIndividuo: 'active',
        nomeIndividuo: 'pending',
        dadosDemograficos: 'pending',
        endereco: 'pending',
        comunicacaoEletronica: 'pending',
        vinculos: 'pending'
      }
    }
  }

  renderCadastroStep = (key) => {
    return (
      <CadastroStep
        key={key}
        step={key}
        active={this.state.steps[key]}
      />
    )
  }

  render() {
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
                Formulários específicos de cada passo
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Paciente from '../components/Paciente'

class Repositorio extends Component {
  render() {
    let pacientes = JSON.parse(sessionStorage.getItem('patients'))

    return (
      <Layout router={this.props.history} icon='database' header='Repositório' subheader='Repositório de pacientes.'>
        {
          pacientes && pacientes.map((paciente, index) => {
            return <Paciente key={index} paciente={paciente} />
          })
        }
      </Layout>
    )
  }
}

Repositorio.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(Repositorio);

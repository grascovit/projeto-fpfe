import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'

class Repositorio extends Component {
  render() {
    return (
      <Layout router={this.props.history} icon='database' header='Repositório' subheader='Repositório de pacientes.'>
        <p>Conteúdo...</p>
      </Layout>
    )
  }
}

Repositorio.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(Repositorio);

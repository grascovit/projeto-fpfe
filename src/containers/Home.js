import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'

class Home extends Component {
  render() {
    return (
      <Layout router={this.props.history} icon='home' header='Home' subheader='Cadastro de identificador de paciente.'>
        <p>Conteúdo...</p>
      </Layout>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(Home);

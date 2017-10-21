import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'

class Repositorio extends Component {
  render() {
    return (
      <Layout router={this.props.history}>
        <p>Repositório</p>
      </Layout>
    )
  }
}

Repositorio.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(Repositorio);

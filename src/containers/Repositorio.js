import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Repositorio extends Component {
  render() {
    return (
      <div>
        <p>Repositório</p>
      </div>
    )
  }
}

Repositorio.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(Repositorio);

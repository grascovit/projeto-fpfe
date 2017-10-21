import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'

class Home extends Component {
  render() {
    return (
      <Layout router={this.props.history}>
        <p>Home</p>
      </Layout>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(Home);

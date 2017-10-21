import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Navbar from './Navbar'

class Layout extends Component {
  render() {
    return (
      <Container>
        <Navbar router={this.props.router}/>

        <Grid columns={12} stackable padded='vertically'>
          <Grid.Row>
            <Grid.Column width={12}>
              {this.props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Layout

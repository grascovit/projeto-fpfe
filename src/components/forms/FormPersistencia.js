import React, { Component } from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react'

class FormPersistencia extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { formObject } = this.props

    return (
      <div>
        <Grid.Row textAlign='center'>
          <Grid.Column width={11} floated='right'>
            <Button color='teal' animated='vertical' fluid onClick={this.props.handleSave}>
              <Button.Content visible><Icon name='save' /></Button.Content>
              <Button.Content hidden>
                Salvar
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </div>
    )
  }
}

export default FormPersistencia

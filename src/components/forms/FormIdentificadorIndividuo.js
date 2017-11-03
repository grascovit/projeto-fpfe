import React, { Component } from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
import AreaGeografica from '../../enums/AreaGeografica'

class FormIdentificadorIndividuo extends Component {
  constructor(props) {
    super(props)

    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange(event, data) {
    this.props.handleSelectChange(data.name, data.value)
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field required>
            <label>Designação</label>
            <Input name='identificador' onChange={this.props.handleInputChange} placeholder='Número ou código atribuído a uma pessoa por uma organização' />
          </Form.Field>
          <Form.Field required>
            <label>Área geográfica</label>
            <Select name='areaGeografica' onChange={this.handleSelectChange} placeholder='Código que representa a área geográfica' options={AreaGeografica.options()} />
          </Form.Field>
          <Form.Field required>
            <label>Emissor</label>
            <Input name='emissor' onChange={this.props.handleInputChange} placeholder='Organização que aloca uma designação do identificador' />
          </Form.Field>
          <Form.Field required>
            <label>Data da emissão</label>
            <Input name='dataDeEmissao' onChange={this.props.handleInputChange} placeholder='Data na qual foi emitido o documento de identificação' />
          </Form.Field>
          <Form.Field required>
            <label>Tipo do identificador</label>
            <Input name='tipoIdentificador' onChange={this.props.handleInputChange} placeholder='Código que identifica o tipo de identificador' />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default FormIdentificadorIndividuo

import React, { Component } from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
import RelacionamentoVinculo from '../../enums/RelacionamentoVinculoIndividuo'

class FormVinculos extends Component {
  constructor(props) {
    super(props)

    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange(event, data) {
    this.props.handleSelectChange(data.name, data.value)
  }

  render() {
    const { formObject } = this.props

    return (
      <div>
        <Form>
          <Form.Field required>
            <label>Identificador único do vínculo</label>
            <Input name='identificadorVinculo' defaultValue={formObject.identificadorVinculo} onChange={this.props.handleInputChange} placeholder='Identificador do vínculo do indivíduo (ex: 1234587ABCM)' />
          </Form.Field>
          <Form.Field required>
            <label>Relacionamento do indivíduo</label>
            <Select name='relacionamentoVinculo' defaultValue={formObject.relacionamentoVinculo} onChange={this.handleSelectChange} placeholder='Indicador de uso opcional para o nome' options={RelacionamentoVinculo.options()} />
          </Form.Field>
          <Form.Field required>
            <label>Data de início do vínculo</label>
            <Input name='dataDeInicioVinculo' defaultValue={formObject.dataDeInicioVinculo} onChange={this.props.handleInputChange} placeholder='Data inicial do vínculo (ex: 01/01/2017)' />
          </Form.Field>
          <Form.Field>
            <label>Data do fim do vínculo</label>
            <Input name='dataDeFimVinculo' defaultValue={formObject.dataDeFimVinculo} onChange={this.props.handleInputChange} placeholder='Data final do vínculo (ex: 01/01/2020)' />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default FormVinculos

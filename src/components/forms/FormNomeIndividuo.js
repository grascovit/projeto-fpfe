import React, { Component } from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
import IndicadorUso from '../../enums/IndicadorUso'

class FormNomeIndividuo extends Component {
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
          <Form.Field>
            <label>Títulos</label>
            <Input name='titulos' defaultValue={formObject.titulos} onChange={this.props.handleInputChange} placeholder='Títulos (Dr., Prof., etc.)' />
          </Form.Field>
          <Form.Field>
            <label>Nome</label>
            <Input name='nome' defaultValue={formObject.nome} onChange={this.props.handleInputChange} placeholder='Nome do indivíduo' />
          </Form.Field>
          <Form.Field>
            <label>Nome alternativo</label>
            <Input name='nomeAlternativo' defaultValue={formObject.nomeAlternativo} onChange={this.props.handleInputChange} placeholder='Nome alternativo do indivíduo' />
          </Form.Field>
          <Form.Field>
            <label>Indicador de uso</label>
            <Select name='indicadorUso' defaultValue={formObject.indicadorUso} onChange={this.handleSelectChange} placeholder='Indicador de uso opcional para o nome' options={IndicadorUso.options()} />
          </Form.Field>
          <Form.Field required>
            <label>Sobrenome</label>
            <Input name='sobrenome' defaultValue={formObject.sobrenome} onChange={this.props.handleInputChange} placeholder='Sobrenome do indivíduo' />
          </Form.Field>
          <Form.Field>
            <label>Sufixos</label>
            <Input name='sufixos' defaultValue={formObject.sufixos} onChange={this.props.handleInputChange} placeholder='Sufixos' />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default FormNomeIndividuo

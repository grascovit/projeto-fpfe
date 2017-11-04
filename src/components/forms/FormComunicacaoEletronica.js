import React, { Component } from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
import MeioComunicacao from '../../enums/MeioComunicacao'
import CodigoContatoEletronico from '../../enums/CodigoContatoEletronico'
import CodigoPrefComunicacao from '../../enums/CodigoPrefComunicacao'

class FormComunicacaoEletronica extends Component {
  handleSelectChange = (event, data) => {
    this.props.handleSelectChange(data.name, data.value)
  }

  render() {
    const { formObject } = this.props

    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Meio de comunicação</label>
              <Select name='meioComunicacao' defaultValue={formObject.meioComunicacao} onChange={this.handleSelectChange} placeholder='Meio de comunicação eletrônica' options={MeioComunicacao.options()} />
            </Form.Field>
            <Form.Field required>
              <label>Utilização da comunicação</label>
              <Select name='utilizacaoComunicacao' defaultValue={formObject.utilizacaoComunicacao} onChange={this.handleSelectChange} placeholder='Utilização do contato eletrônico.' options={CodigoContatoEletronico.options()} />
            </Form.Field>
          </Form.Group>
          <Form.Field required>
            <label>Detalhe da comunicação</label>
            <Input name='detalheComunicacao' defaultValue={formObject.detalheComunicacao} onChange={this.props.handleInputChange} placeholder='Número do telefone, e-mail, URL, etc. (de acordo com seleção anterior)' />
          </Form.Field>
          <Form.Field required>
            <label>Preferência de contato</label>
            <Select name='preferenciaComunicacao' defaultValue={formObject.preferenciaComunicacao} onChange={this.handleSelectChange} placeholder='Preferência do contato eletrônico.' options={CodigoPrefComunicacao.options()} />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default FormComunicacaoEletronica

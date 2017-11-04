import React, { Component } from 'react'
import { Form, Input, Radio, Select } from 'semantic-ui-react'
import TipoEndereco from '../../enums/TipoEndereco'
import Estados from '../../enums/Estados'

class FormEndereco extends Component {
  handleSelectChange = (event, data) => {
    this.props.handleSelectChange(data.name, data.value)
  }

  handleRadioChange = (event, data) => {
    this.props.handleSelectChange(data.name, data.value)
  }

  render() {
    const { formObject } = this.props

    return (
      <div>
        <Form>
          <Form.Field required>
            <label>Tipo de endereço</label>
            <Select name='tipoEndereco' defaultValue={formObject.tipoEndereco} onChange={this.handleSelectChange} placeholder='Tipo do endereço' options={TipoEndereco.options()} />
          </Form.Field>
          <Form.Field required>
            <label>Data de início da ocupação</label>
            <Input name='dataInicio' defaultValue={formObject.dataInicio} onChange={this.props.handleInputChange} placeholder='Data de início de ocupação do endereço (ex: 01/01/1999)' />
          </Form.Field>
          <Form.Group inline>
            <label>Acurácia da data de início</label>
            <Form.Field name='acuraciaDataInicio' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaDataInicio === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDataInicio' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaDataInicio === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDataInicio' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaDataInicio === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Field required>
            <label>Data de fim da ocupação</label>
            <Input name='dataFim' defaultValue={formObject.dataFim} onChange={this.props.handleInputChange} placeholder='Data de fim de ocupação do endereço (ex: 01/01/1999)' />
          </Form.Field>
          <Form.Group inline>
            <label>Acurácia da data de fim</label>
            <Form.Field name='acuraciaDataFim' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaDataFim === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDataFim' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaDataFim === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDataFim' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaDataFim === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Group>
            <Form.Field width={6} required>
              <label>Estado</label>
              <Select name='estado' defaultValue={formObject.estado} onChange={this.handleSelectChange} placeholder='Selecione o estado...' options={Estados.options()} />
            </Form.Field>
            <Form.Field width={10} required>
              <label>Município</label>
              <Input name='municipio' defaultValue={formObject.municipio} onChange={this.props.handleInputChange} placeholder='Informe o município' />
            </Form.Field>
          </Form.Group>
          <Form.Field required>
            <label>Endereço</label>
            <Input name='endereco' defaultValue={formObject.endereco} onChange={this.props.handleInputChange} placeholder='Endereço do paciente' />
          </Form.Field>
          <Form.Field required>
            <label>Complemento</label>
            <Input name='complemento' defaultValue={formObject.complemento} onChange={this.props.handleInputChange} placeholder='Complemento' />
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Field required>
              <label>Bairro</label>
              <Input name='bairro' defaultValue={formObject.bairro} onChange={this.props.handleInputChange} placeholder='Bairro' />
            </Form.Field>
            <Form.Field required>
              <label>Número</label>
              <Input name='numero' defaultValue={formObject.numero} onChange={this.props.handleInputChange} placeholder='Número' />
            </Form.Field>
            <Form.Field required>
              <label>CEP</label>
              <Input name='cep' defaultValue={formObject.cep} onChange={this.props.handleInputChange} placeholder='CEP (ex: 74220-190)' />
            </Form.Field>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default FormEndereco

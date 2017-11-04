import React, { Component } from 'react'
import { Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import PluralidadeNascimento from '../../enums/PluralidadeNascimento'
import OrdemNascimento from '../../enums/OrdemNascimento'
import SituacaoFamiliar from '../../enums/SituacaoFamiliar'

class FormDadosDemograficos extends Component {
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
            <label>Data de nascimento</label>
            <Input name='dataNascimento' defaultValue={formObject.dataNascimento} onChange={this.props.handleInputChange} placeholder='Data de nascimento do indivíduo (ex: 01/01/1999)' />
          </Form.Field>
          <Form.Group inline>
            <label>Acurácia do dia do nascimento</label>
            <Form.Field name='acuraciaDiaNascimento' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaDiaNascimento === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDiaNascimento' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaDiaNascimento === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDiaNascimento' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaDiaNascimento === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Group inline>
            <label>Acurácia do mês do nascimento</label>
            <Form.Field name='acuraciaMesNascimento' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaMesNascimento === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaMesNascimento' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaMesNascimento === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaMesNascimento' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaMesNascimento === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Group inline>
            <label>Acurácia do ano do nascimento</label>
            <Form.Field name='acuraciaAnoNascimento' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaAnoNascimento === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaAnoNascimento' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaAnoNascimento === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaAnoNascimento' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaAnoNascimento === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Group inline>
            <label>Seguimento</label>
            <Form.Field name='indicadorSeguimentoNascimento' control={Checkbox} label='Data precisa de seguimento' />
          </Form.Group>
          <Form.Field required>
            <label>Data de óbito</label>
            <Input name='dataObito' defaultValue={formObject.dataObito} onChange={this.props.handleInputChange} placeholder='Data de óbito (ex: 01/01/1999)' />
          </Form.Field>
          <Form.Group inline>
            <label>Acurácia do dia do óbito</label>
            <Form.Field name='acuraciaDiaObito' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaDiaObito === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDiaObito' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaDiaObito === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaDiaObito' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaDiaObito === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Group inline>
            <label>Acurácia do mês do óbito</label>
            <Form.Field name='acuraciaMesObito' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaMesObito === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaMesObito' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaMesObito === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaMesObito' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaMesObito === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Group inline>
            <label>Acurácia do ano do óbito</label>
            <Form.Field name='acuraciaAnoObito' control={Radio} label='Acurado' value='1' checked={formObject.acuraciaAnoObito === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaAnoObito' control={Radio} label='Estimado' value='2' checked={formObject.acuraciaAnoObito === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='acuraciaAnoObito' control={Radio} label='Desconhecido' value='3' checked={formObject.acuraciaAnoObito === '3'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Field>
            <label>Fonte de notificação do óbito</label>
            <Input name='fonteNotificacaoObito' defaultValue={formObject.fonteNotificacaoObito} onChange={this.props.handleInputChange} placeholder='Fonte de notificação do óbito (cartório, parente, etc)' />
          </Form.Field>
          <Form.Group required inline>
            <label>Sexo</label>
            <Form.Field name='sexo' control={Radio} label='Masculino' value='1' checked={formObject.sexo === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='sexo' control={Radio} label='Feminino' value='2' checked={formObject.sexo === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='sexo' control={Radio} label='Intersexo ou indeterminado' value='3' checked={formObject.sexo === '3'} onChange={this.handleRadioChange} />
            <Form.Field name='sexo' control={Radio} label='Não declarado' value='4' checked={formObject.sexo === '4'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Field>
            <label>Nome da mãe</label>
            <Input name='nomeMae' defaultValue={formObject.nomeMae} onChange={this.props.handleInputChange} placeholder='Nome da mãe' />
          </Form.Field>
          <Form.Field>
            <label>Nome do pai</label>
            <Input name='nomePai' defaultValue={formObject.nomePai} onChange={this.props.handleInputChange} placeholder='Nome do pai' />
          </Form.Field>
          <Form.Field>
            <label>Situação familiar</label>
            <Select name='situacaoFamiliar' defaultValue={formObject.situacaoFamiliar} onChange={this.handleSelectChange} placeholder='Situação familiar' options={SituacaoFamiliar.options()} />
          </Form.Field>
          <Form.Group inline>
            <label>Raça/cor</label>
            <Form.Field name='raca' control={Radio} label='Branca' value='1' checked={formObject.raca === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='raca' control={Radio} label='Preta' value='2' checked={formObject.raca === '2'} onChange={this.handleRadioChange} />
            <Form.Field name='raca' control={Radio} label='Parda' value='3' checked={formObject.raca === '3'} onChange={this.handleRadioChange} />
            <Form.Field name='raca' control={Radio} label='Amarela' value='4' checked={formObject.raca === '4'} onChange={this.handleRadioChange} />
            <Form.Field name='raca' control={Radio} label='Indígena' value='5' checked={formObject.raca === '5'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Group inline>
            <label>Nacionalidade</label>
            <Form.Field name='nacionalidade' control={Radio} label='Brasileiro' value='1' checked={formObject.nacionalidade === '1'} onChange={this.handleRadioChange} />
            <Form.Field name='nacionalidade' control={Radio} label='Estrangeiro' value='2' checked={formObject.nacionalidade === '2'} onChange={this.handleRadioChange} />
          </Form.Group>
          <Form.Field>
            <label>Município de nascimento</label>
            <Input name='municipioNascimento' defaultValue={formObject.municipioNascimento} onChange={this.props.handleInputChange} placeholder='Município de nascimento' />
          </Form.Field>
          <Form.Field>
            <label>Estado de nascimento</label>
            <Input name='estadoNascimento' defaultValue={formObject.estadoNascimento} onChange={this.props.handleInputChange} placeholder='Estado de nascimento' />
          </Form.Field>
          <Form.Field>
            <label>País de nascimento</label>
            <Input name='paisNascimento' defaultValue={formObject.paisNascimento} onChange={this.props.handleInputChange} placeholder='País de nascimento' />
          </Form.Field>
          <Form.Field>
            <label>Data de entrada no país</label>
            <Input name='dataEntradaPais' defaultValue={formObject.dataEntradaPais} onChange={this.props.handleInputChange} placeholder='Data de entrada no país (ex: 01/01/1999)' />
          </Form.Field>
          <Form.Field>
            <label>Pluralidade de nascimento</label>
            <Select name='pluralidadeNascimento' defaultValue={formObject.pluralidadeNascimento} onChange={this.handleSelectChange} placeholder='Pluralidade de nascimento' options={PluralidadeNascimento.options()} />
          </Form.Field>
          <Form.Field>
            <label>Ordem de nascimento</label>
            <Select name='ordemNascimento' defaultValue={formObject.ordemNascimento} onChange={this.handleSelectChange} placeholder='Ordem de nascimento' options={OrdemNascimento.options()} />
          </Form.Field>
          <Form.Field>
            <label>Comentário</label>
            <TextArea name='comentario' defaultValue={formObject.comentario} onChange={this.props.handleInputChange} placeholder='Comentário da identificação' />
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default FormDadosDemograficos

class CodigoPrefComunicacao {
  static options() {
    return ([
      {value: 'B', text: 'Horário comercial'},
      {value: 'D', text: 'Durante o dia'},
      {value: 'W', text: 'Finais de semana'},
      {value: 'A', text: 'Qualquer hora'},
      {value: 'E', text: 'Periodo noturno'}
    ])
  }
}

export default CodigoPrefComunicacao

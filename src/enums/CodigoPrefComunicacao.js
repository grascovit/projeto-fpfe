class CodigoPrefComunicacao {
  static options() {
    return ([
      {value: 'B', text: 'Horário comercial (B)'},
      {value: 'D', text: 'Durante o dia (D)'},
      {value: 'W', text: 'Finais de semana (W)'},
      {value: 'A', text: 'Qualquer hora (A)'},
      {value: 'E', text: 'Periodo noturno (E)'}
    ])
  }
}

export default CodigoPrefComunicacao

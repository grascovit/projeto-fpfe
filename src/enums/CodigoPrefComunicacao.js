class CodigoPrefComunicacao {
  static options() {
    return ([
      {codigo: 'B', label: 'Horário comercial'},
      {codigo: 'D', label: 'Durante o dia'},
      {codigo: 'W', label: 'Finais de semana'},
      {codigo: 'A', label: 'Qualquer hora'},
      {codigo: 'E', label: 'Periodo noturno'}
    ])
  }
}
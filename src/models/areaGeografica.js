const areaGeografica = () => {
	return ([
		{
			codigo: 1,
			descricao: 'Identificador do sujeito local.',
			codigoAlternativo: 'L'
		},
		{
			codigo: 2,
			descricao: 'Identificador da área, região ou distrito.',
			codigoAlternativo: 'A'
		},
		{
			codigo: 3,
			descricao: 'Identificador do estado, província ou território.',
			codigoAlternativo: 'E'
		},
		{
			codigo: 4,
			descricao: 'Identificador nacional.',
			codigoAlternativo: 'N'
		}
	])
}

export default areaGeografica
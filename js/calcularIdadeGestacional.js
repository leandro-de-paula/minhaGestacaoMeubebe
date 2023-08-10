function calcularIdadeGestacional() {

	// Obtém a data da DUM do campo de entrada
	const dumInput = document.getElementById('dumDate');
	const dumValue = dumInput.value;

	// Faça aqui o cálculo desejado com a data da DUM
	// Por exemplo, a data estimada para o próximo período

	/*
	 * Função que calcula a quantidade de semanas
	 * Idade gestacional em semanas = (Data atual - DUM) / 7
	 */
	let dataDUM = new Date(dumValue);
	let dataAtual = new Date();

	let diffTime = Math.abs(dataAtual - dataDUM);
	let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	let result = Math.floor(diffDays / 7);

	if (result >= 28) {
		  var text = '<h4 class="lead">Orientações para gravidez:</h4>' +
					 '<p><b>Terceiro Trimestre (Da semana 28 até o parto):</b></p>'+
					 '<ul>' +
						  '<li>Exames regulares: Continue com as consultas médicas regulares para acompanhar a saúde da gestante e do bebê.</li>' +
						  '<li>Repouso adequado: Descanse e evite posições desconfortáveis.</li>' +
						  '<li>Sinais de trabalho de parto: Esteja atenta aos sinais de trabalho de parto e saiba quando procurar assistência médica.</li>' +
						  '<li>Hidratação: Continue bebendo bastante água.</li>' +
						  '<li>Respiração e relaxamento: Pratique técnicas de respiração e relaxamento para o momento do parto.</li>' +
					  '</ul>' +
					  '<small>É importante lembrar que cada gestação é única, e é fundamental seguir as orientações do médico, que acompanhará de perto a saúde da gestante e do bebê ao longo de toda a gravidez.</small>'
	  } else if (result >= 13 && result <= 27){
		  var text = '<h4 class="lead">Orientações para gravidez:</h4>' +
					 '<p><b>Segundo Trimestre (Da semana 13 a 27):</b></p>'+
					 '<ul>' +
						  '<li>Atividade física: Pratique exercícios leves e adequados para gestantes, como caminhadas ou natação.</li>' +
						  '<li>Roupas confortáveis: Use roupas confortáveis e que não restrinjam o crescimento da barriga.</li>' +
						  '<li>Monitoramento do ganho de peso: Mantenha um ganho de peso saudável, de acordo com as recomendações médicas.</li>' +
						  '<li>Cuidados com a pele: Hidrate a pele para prevenir estrias.</li>' +
						  '<li>Preparação para o parto: Considere frequentar aulas de preparação para o parto.</li>' +
					  '</ul>' +
					  '<small>É importante lembrar que cada gestação é única, e é fundamental seguir as orientações do médico, que acompanhará de perto a saúde da gestante e do bebê ao longo de toda a gravidez.</small>'

	} else if (result <= 12) {
		  var text = '<h4 class="lead">Orientações para gravidez:</h4>' +
					 '<p><b>Primeiro Trimestre (Da semana 1 a 12):</b></p>'+
					 '<ul>' +
						  '<li>Consulta médica: Realize um exame pré-natal completo e siga todas as orientações do médico.</li>' +
						  '<li>Suplementação: Tome ácido fólico e outros suplementos recomendados pelo médico.</li>' +
						  '<li>Alimentação: Mantenha uma dieta equilibrada e evite alimentos não seguros para gestantes, como peixes com alto teor de mercúrio.</li>' +
						  '<li>Hidratação: Beba bastante água para evitar a desidratação.</li>' +
						  '<li>Descanso: Priorize o descanso e evite atividades extenuantes.</li>' +
						  '<li>Evite fumo e álcool: Elimine completamente o consumo de tabaco e álcool.</li>' +
					  '</ul>' +
					  '<small>É importante lembrar que cada gestação é única, e é fundamental seguir as orientações do médico, que acompanhará de perto a saúde da gestante e do bebê ao longo de toda a gravidez.</small>'
	}


	// Exibe o resultado no elemento de resultado
	const resultadoElement = document.getElementById('resultado');
	resultadoElement.innerHTML = `<h3 class="display-5">Total de Semanas: ${result}</h3><hr>${text}`;

  }
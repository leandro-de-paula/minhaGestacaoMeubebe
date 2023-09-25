console.log("Em construcao --> controleGlicemico");

function controleGlicemia() {
    const age = document.getElementById('age').value;
    const rightHanded = document.getElementById('rightHanded').value;
    const fast = document.getElementById('fast').value;

    console.log(age);
    console.log(rightHanded);
    console.log(fast);

    // fast = null;
    if (fast == '1') {
        // Controle de glicemia pré-prandial (jejum)
        alert('fast = 1')
        if (age < 12) {
            // Crianças abaixo de 12 anos
            if (rightHanded > 126) {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pré-prandial alta para crianças</h3><hr>' + 
                           '<h5> Orientações:</h5>' + 
                           '<p>A glicemia pré-prandial alta em crianças refere-se a níveis elevados de açúcar no sangue antes das refeições. Isso pode indicar um desequilíbrio no controle do açúcar no sangue e, em alguns casos, pode ser um sinal de pré-diabetes ou diabetes.</p>' +
                           '<p>É importante monitorar regularmente os níveis de glicose em crianças, especialmente antes das refeições, para garantir que estejam dentro de faixas saudáveis. Manter um estilo de vida saudável, com uma dieta equilibrada e atividade física regular, é essencial para controlar a glicemia em crianças.</p>' + 
                           '<small><strong>Se os níveis de glicose pré-prandial permanecerem consistentemente altos, é aconselhável consultar um médico para avaliação e orientação adequada.</strong></small>';
            } else if (rightHanded >= 70 && rightHanded <= 126) {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pré-prandial normal para crianças</h3><hr>' + 
                           '<h5> Orientações:</h5>' + 
                           '<p>A glicemia pré-prandial normal em crianças refere-se a níveis saudáveis de açúcar no sangue antes das refeições. Geralmente, para crianças, os níveis de glicose no sangue em jejum ou pré-prandiais devem estar dentro da faixa de referência que é considerada saudável.</p>' +
                           '<p>Essa faixa pode variar um pouco dependendo da idade da criança e das diretrizes médicas, mas geralmente situa-se entre 70 mg/dL e 100 mg/dL (3.9 mmol/L a 5.6 mmol/L).</p>' + 
                           '<small><strong>Em caso de dúvidas ou preocupações sobre os níveis de glicose de uma criança, é sempre recomendável consultar um médico ou profissional de saúde para orientação adequada. Além disso, manter um estilo de vida saudável com alimentação balanceada e atividade física regular é fundamental para manter os níveis de glicose dentro da faixa normal.</strong></small>';
            } else {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pré-prandial baixa para crianças</h3><hr>' + 
                           '<h5> Orientações:</h5>' + 
                           '<p>A glicemia pré-prandial baixa em crianças se refere a níveis de açúcar no sangue que estão abaixo do intervalo considerado saudável antes das refeições. Geralmente, valores abaixo de 70 mg/dL (3.9 mmol/L) são considerados baixos. No entanto, é importante considerar fatores como a idade da criança e a individualidade metabólica.</p>' +
                           '<p>Níveis baixos de glicemia pré-prandial em crianças podem ser preocupantes e indicativos de hipoglicemia. A hipoglicemia pode ser causada por diversos fatores, como pular refeições, excesso de atividade física sem consumo adequado de alimentos, administração inadequada de insulina (no caso de crianças com diabetes tipo 1) ou outros problemas de saúde.</p>' +
                           '<p>Caso uma criança apresente níveis de glicemia pré-prandial baixos, é importante agir de forma adequada para corrigir essa situação. Oferecer alimentos ricos em carboidratos de rápida absorção, como suco de frutas ou algum lanche, pode ajudar a elevar os níveis de glicose no sangue.</p>' + 
                           '<small><strong>No entanto, se a criança frequentemente apresenta níveis baixos de glicemia pré-prandial, é fundamental consultar um médico para investigar a causa subjacente e determinar o tratamento apropriado. O acompanhamento médico é essencial para garantir a saúde e o bem-estar da criança.</strong></small>';
            }
        } else {
            // Adultos
            if (rightHanded > 100) {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pré-prandial alta para adultos</h3><hr>' + 
                           '<h5> Orientações:</h5>' + 
                           '<p>A glicemia pré-prandial alta em adultos se refere a níveis elevados de açúcar no sangue antes das refeições. Geralmente, valores de glicose no sangue superiores a 100 mg/dL (5.6 mmol/L) em jejum são considerados elevados. No entanto, esses números podem variar um pouco de acordo com as diretrizes médicas.</p>' +
                           '<p>Níveis elevados de glicemia pré-prandial em adultos podem indicar problemas no controle do açúcar no sangue, como a resistência à insulina (um precursor do diabetes tipo 2) ou o próprio diabetes tipo 2. A resistência à insulina ocorre quando as células do corpo não respondem de forma eficaz à insulina, resultando em níveis elevados de glicose no sangue.</p>' +
                           '<p>É importante notar que a glicemia pré-prandial alta pode ser um sinal de alerta para um possível problema de saúde subjacente. Consultar um médico é fundamental para investigar a causa, realizar exames e determinar um plano de tratamento adequado. Isso pode incluir mudanças na dieta, aumento da atividade física, perda de peso (se necessário) e, em alguns casos, medicação para ajudar a controlar a glicemia.</p>' + 
                           '<small><strong>É fundamental consultar um médico para investigar a causa subjacente e determinar o tratamento apropriado. O acompanhamento regular com um profissional de saúde é essencial para monitorar os níveis de glicemia, prevenir complicações e manter a saúde metabólica.</strong></small>';
            } else if (rightHanded >= 70 && rightHanded <= 100) {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pré-prandial normal para adultos</h3><hr>' +
                           '<h5> Orientações:</h5>' +
                           '<p>A glicemia pré-prandial normal para adultos, ou seja, o nível normal de açúcar no sangue antes das refeições, é geralmente considerado entre 70 mg/dL (3.9 mmol/L) e 100 mg/dL (5.6 mmol/L).</p>' +
                           '<p>Esses valores podem variar ligeiramente de acordo com diferentes referências médicas e laboratórios, mas essa faixa é amplamente aceita como um intervalo saudável para adultos.</p>' +
                           '<p>É importante lembrar que os níveis de glicose no sangue podem ser influenciados por diversos fatores, como a dieta, a atividade física, o estresse e a saúde geral.</p>' +
                           '<small><strong>Caso você esteja monitorando seus níveis de glicemia, é sempre recomendável consultar um profissional de saúde para uma avaliação adequada e interpretação dos resultados.</strong></small>';
            } else {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pré-prandial baixa para adultos</h3><hr>' +
                           '<h5>Orientações:</h5>' +
                           '<p>A glicemia pré-prandial baixa para adultos é quando os níveis de açúcar no sangue antes das refeições estão abaixo do limite considerado normal. Geralmente, um valor abaixo de 70 mg/dL (3.9 mmol/L) é considerado hipoglicemia, o que significa que os níveis de glicose estão abaixo do ideal.</p>' +
                           '<p>A hipoglicemia pode ter várias causas, incluindo:</p>' +
                           '<ul>' +
                             '<li>Jejum prolongado.</li>' +
                             '<li>Excesso de exercício físico sem consumo adequado de carboidratos.</li>' +
                             '<li>Uso excessivo de medicamentos para diabetes.</li>' +
                             '<li>Refeições insuficientes ou inadequadas.</li>' +
                             '<li>Consumo excessivo de álcool, especialmente sem ingestão de alimentos</li>' +
                           '</ul>' +
                           '<p>A hipoglicemia pode causar sintomas como tontura, tremores, sudorese, confusão e até mesmo desmaio. Se você estiver experimentando sintomas de hipoglicemia, é importante ingerir rapidamente alimentos ou bebidas ricos em carboidratos, como suco de frutas, leite ou barras energéticas.</p>' +
                           '<small><strong>Se você tiver hipoglicemia frequentemente, é essencial procurar orientação médica para identificar as causas subjacentes e determinar a melhor abordagem para evitar episódios futuros. Nunca deixe de seguir as orientações médicas e ajustar os medicamentos conforme indicado pelo profissional de saúde.</strong></small>';
            }
        }
    } else {
        // Controle de glicemia pós-prandial
        if (age < 12) {
            // Crianças abaixo de 12 anos
            if (rightHanded > 200) {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pós-prandial alta para crianças</h3><hr>' + 
                           '<h5> Orientações:</h5>' + 
                           '<p>A glicemia pós-prandial alta em crianças refere-se a níveis elevados de açúcar no sangue após uma refeição. Isso pode indicar um desequilíbrio no controle do açúcar no sangue e, em alguns casos, pode ser um sinal de pré-diabetes ou diabetes.</p>' +
                           '<p>É importante monitorar regularmente os níveis de glicose em crianças, especialmente após as refeições, para garantir que estejam dentro de faixas saudáveis.  Estilos de vida saudáveis, como uma dieta equilibrada e atividade física regular, são fundamentais para manter a glicemia sob controle em crianças.</p>' + 
                           '<small><strong> Se os níveis de glicose pós-prandial permanecerem consistentemente altos, é aconselhável consultar um médico para avaliação e orientação adequada.</strong></small>';
            } else if (rightHanded >= 140 && rightHanded <= 200) {
                var text = '<h4 class="lead">Resultado:</h4>' +
                           '<h3 class="display-5">Glicemia pós-prandial normal para crianças</h3><hr>' +
                           '<h5>Orientações:</h5>' +
                           '<p>A glicemia pós-prandial normal para crianças varia de acordo com a idade e os critérios de referência. Geralmente, em crianças saudáveis, os níveis de glicose no sangue após as refeições tendem a aumentar temporariamente e depois retornar aos níveis normais dentro de algumas horas.</p>' +
                           '<p>Os níveis normais de glicemia pós-prandial podem variar, mas geralmente são considerados adequados quando se situam abaixo de 140 mg/dL (7.8 mmol/L) cerca de duas horas após uma refeição.</p>' +
                           '<p>No entanto, é importante notar que os valores de referência podem ser diferentes em diferentes faixas etárias e podem ser ajustados por um profissional de saúde de acordo com a situação clínica específica da criança.</p>' +
                           '<small><strong>Mantenha em mente que a monitorização da glicemia e a interpretação dos resultados devem ser feitas por um médico ou profissional de saúde qualificado, especialmente no caso de crianças. Se você estiver preocupado com os níveis de glicose no sangue de uma criança, é recomendável procurar orientação médica para avaliação e aconselhamento adequados.</strong></small>';
            } else {
                var text =  '<h4 class="lead">Resultado:</h4>' +
                '<h3 class="display-5">Glicemia pós-prandial baixa para crianças</h3><hr>' +
                '<h5>Orientações:</h5>' +
                '<p>A glicemia pós-prandial baixa em crianças ocorre quando os níveis de glicose no sangue de uma criança estão abaixo do intervalo considerado saudável após uma refeição. Normalmente, isso é medido algumas horas após a ingestão de alimentos. Baixos níveis de glicose pós-prandial em crianças podem ter várias causas, incluindo:</p>' +
                '<ul>' +
                  '<li>Excesso de atividade física: A criança pode ter queimado mais glicose do que a quantidade consumida na refeição.</li>' +
                  '<li>Falta de ingestão adequada de carboidratos: Se a criança não ingerir uma quantidade suficiente de carboidratos durante a refeição, isso pode resultar em baixos níveis de glicose no sangue após a digestão.</li>' +
                  '<li>Administração inadequada de insulina (em casos de diabetes): Se a criança tem diabetes e recebeu uma dose excessiva de insulina, isso pode levar a níveis baixos de glicose após a refeição.</li>' +
                  '<li>Outros distúrbios metabólicos: Algumas condições médicas podem afetar o metabolismo da glicose em crianças e levar a níveis baixos de glicose pós-prandial.</li>' +
                '</ul>' +
                '<p>É importante monitorar e tratar adequadamente os baixos níveis de glicose pós-prandial em crianças, pois isso pode causar sintomas como tontura, fraqueza, sudorese excessiva e, em casos graves, até desmaio.</p>' +
                '<small><strong>Se você estiver preocupado com os níveis de glicose do seu filho, é essencial consultar um profissional de saúde para avaliação e orientação adequada.</strong></small>';
            }
        } else {
            // Adultos
            if (rightHanded > 140) {
                var text =  '<h4 class="lead">Resultado:</h4>' +
                '<h3 class="display-5">Glicemia pós-prandial alta para adultos</h3><hr>' +
                '<h5>Orientações:</h5>' +
                '<p>A glicemia pós-prandial alta em adultos ocorre quando os níveis de glicose no sangue aumentam significativamente após uma refeição.</p>' +
                '<p>Isso geralmente é medido algumas horas após a ingestão de alimentos. Uma glicemia pós-prandial alta pode ser indicativa de resistência à insulina, pré-diabetes ou diabetes.</p>' +
                '<ul>' +
                  '<li><strong>Resistência à insulina:</strong> Pessoas com resistência à insulina têm dificuldade em usar eficazmente a insulina, o hormônio responsável por controlar os níveis de glicose no sangue. Como resultado, após a ingestão de alimentos, os níveis de glicose no sangue tendem a permanecer elevados por mais tempo.</li>' +
                  '<li><strong>Pré-diabetes:</strong> Níveis elevados de glicose pós-prandial podem ser um sinal de pré-diabetes. Isso significa que a pessoa está em risco aumentado de desenvolver diabetes tipo 2 no futuro, mas ainda não atingiu o diagnóstico completo da doença.</li>' +
                  '<li><strong>Diabetes:</strong> Em pessoas com diabetes, a glicemia pós-prandial alta é comum, especialmente se a doença não estiver bem controlada. Isso ocorre porque o corpo não produz insulina suficiente ou não a utiliza adequadamente para regular os níveis de glicose no sangue após as refeições.</li>' +
                '</ul>' +
                '<p>É importante que as pessoas com glicemia pós-prandial alta trabalhem em estreita colaboração com seus profissionais de saúde para controlar e gerenciar seus níveis de glicose no sangue. Isso geralmente envolve modificações na dieta, aumento da atividade física, medicamentos (se necessário) e monitoramento frequente dos níveis de glicose. O tratamento visa manter os níveis de glicose no sangue dentro de faixas saudáveis para evitar complicações relacionadas ao diabetes.</p>' +
                '<small><strong>Consultar um médico é fundamental para um diagnóstico preciso e um plano de tratamento adequado.</strong></small>';
            } else if (rightHanded >= 70 && rightHanded <= 140) {
                var text =  '<h4 class="lead">Resultado:</h4>' +
                '<h3 class="display-5">Glicemia pós-prandial normal para adultos</h3><hr>' +
                '<h5>Orientações:</h5>' +
                '<p>A glicemia pós-prandial normal para adultos, ou seja, os níveis normais de glicose no sangue após uma refeição, geralmente devem ficar dentro de uma faixa específica para garantir a saúde metabólica.</p>' +
                '<p>Os valores normais de glicose pós-prandial podem variar um pouco entre diferentes fontes e laboratórios, mas, em geral, a seguinte faixa é considerada saudável:</p>' +
                '<ul>' +
                  '<li>Glicose Capilar (obtida através de um medidor de glicose): 1 a 2 horas após uma refeição: Menos de 140 mg/dL (7,8 mmol/L)</li>' +
                  '<li>Glicose Venosa (obtida a partir de exames de sangue em laboratório): 2 horas após uma refeição: Menos de 140 mg/dL (7,8 mmol/L)</li>' +
                '</ul>' +
                '<p>Lembre-se de que esses valores são gerais e podem variar de acordo com as diretrizes médicas e as condições individuais de saúde. Portanto, é importante consultar um médico ou profissional de saúde para uma avaliação completa e discussão sobre os seus resultados de glicemia.</p>' +
                '<small><strong>Se você tiver preocupações com relação à sua glicemia ou diabetes, um médico será capaz de fornecer orientações específicas com base no seu histórico médico e necessidades individuais.</strong></small>';
            } else {
                var text =  "Glicemia pós-prandial baixa para adultos";
            }
        }
    }
    // Exibe o resultado no elemento de resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `${text}`;
}


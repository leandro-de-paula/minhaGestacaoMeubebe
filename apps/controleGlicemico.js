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
                var text =  "Glicemia pré-prandial normal para adultos";
            } else {
                var text =  "Glicemia pré-prandial baixa para adultos";
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
                var text =  "Glicemia pós-prandial normal para crianças";
            } else {
                var text =  "Glicemia pós-prandial baixa para crianças";
            }
        } else {
            // Adultos
            if (rightHanded > 140) {
                var text =  "Glicemia pós-prandial alta para adultos";
            } else if (rightHanded >= 70 && rightHanded <= 140) {
                var text =  "Glicemia pós-prandial normal para adultos";
            } else {
                var text =  "Glicemia pós-prandial baixa para adultos";
            }
        }
    }
    // Exibe o resultado no elemento de resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `${text}`;
}


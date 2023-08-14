// Função para carregar e exibir o conteúdo de uma página
function carregarConteudo(elementId, url) {
    // fetch(url)
    fetch(`${BASE_PATH}${url}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
  // Carregar os diferentes conteúdos nas áreas apropriadas
  carregarConteudo('header', 'pages/bodyHeader.html');
  carregarConteudo('footer', 'pages/bodyFooter.html');
  
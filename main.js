// Função para carregar e exibir o conteúdo de uma página
function loadContent(elementId, url) {
    // fetch(url)
    console.log(`${BASE_PATH}${url}` + ' --> main.js')
    fetch(`${BASE_PATH}${url}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .then(() => {
        // Carregar e executar o JavaScript da página inserida
        var scriptElement = document.createElement('script');
        scriptElement.src =  PAGE ? 'page.js':'pages/page.js'; // Substitua pelo caminho correto
        document.body.appendChild(scriptElement);
    })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
      
  }
  
  // Carregar os diferentes conteúdos nas áreas apropriadas
  loadContent('header', 'pages/bodyHeader.html');
  loadContent('footer', 'pages/bodyFooter.html');
  


  console.log(`${BASE_PATH}` + ' --> BASE_PATH')
  console.log(`${PAGE}` + ' --> PAGE')



  // Suponha que isAdmin seja uma variável que determine se o usuário é um administrador
  // var isAdmin = false;

  // Obtenha a referência do elemento de link
  // var linkElement = document.getElementById('index');
  // console.log(linkElement.href);

  // Use um operador ternário para definir o atributo href com base na variável isAdmin
  // linkElement.href = isAdmin ? 'admin.html' : 'user.html';
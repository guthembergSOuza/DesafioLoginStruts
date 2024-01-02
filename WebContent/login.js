/**
 * 
 */
function loginAuthenticate() {
            var name = document.getElementById("name").value;
            var pwd = document.getElementById("pwd").value;

            // Realize a lógica de chamada AJAX aqui, por exemplo usando fetch
            fetch('login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name, pwd: pwd }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta do servidor:', data);
                if (data === 'SUCCESS') {
                    // Redirecione para home.html
                    window.location.href = 'home.html';
                } else {
                    // Lide com outros casos de sucesso conforme necessário
                }
            })
            .catch(error => {
                console.error('Erro na chamada AJAX:', error);
            });
        }

function performLogin() {
           
			try{
				$.ajax({
                    type: "POST",
                    url: "login",
                    contentType: "application/json",
   					data: JSON.stringify({ name: document.getElementById("name").value, pwd: document.getElementById("pwd").value }),
                    success: function (response) {
                        console.log("Resposta do servidor:", response);
                        if (response === "SUCCESS") {
                            // Redirecione para home.html
                            window.location.href = "home.html";
                        } else {
                            // Lide com outros casos de sucesso conforme necessário
                        }
                    },
                    error: function (error) {
                        $("#error-message").text("Usuário ou senha inválidos");

                    }
                });
			} catch(error) {
				console.error("Erro na chamada AJAX:", error);
			}
        }
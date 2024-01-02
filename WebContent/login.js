/**
 * 
 */

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
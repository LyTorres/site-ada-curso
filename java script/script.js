document.getElementById("botaoEnviar").addEventListener("click", function(event) {
  event.preventDefault(); // evita o envio automático do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome !== "" && email !== "") {
    alert("Prontinho! Você receberá as novidades por e-mail!");
    console.log("Dados enviados:", nome, email);
  } else {
    alert("Por favor, preencha os campos obrigatórios.");
  }
});




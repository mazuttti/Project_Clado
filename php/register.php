<?php
  if(empty($_GET["pag"])){
    header("location: ../index.php?pag=inicio");
  }
?>

<div id="div_form">

  <h1>Criar conta</h1>
  <form method="post" name="formCad" id="form_cadastro" onsubmit="return false">

    <input type="text"      name="reg_name"
      class="form_input form_inputText" placeholder="Nome" required autofocus>

    <div id="div_confirmEmail">
      <input type="email"     name="reg_email"
        class="form_input form_inputText" placeholder="E-mail" required>
    </div>

    <input type="password"  name="reg_password"
      class="form_input form_inputText" placeholder="Senha" required>

		<div id="div_confirmPassword">
	     <input type="password"  name="reg_confirmPassword"
	       class="form_input form_inputText" placeholder="Confirmação de senha" required>
		</div>

    <input type="submit"  id="form_inputButton" class="form_input" value="Criar conta" onclick="submitCad()">
  </form>
</div>

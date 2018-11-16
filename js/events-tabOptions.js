function dotNode_onmouseup(buttonPressed, varThis, user_logged, creator_cladogram){
  if(buttonPressed.which == 3){
    $("#div_tabOptions").css({display: "inline", left: buttonPressed.clientX, top: buttonPressed.clientY});

    if(buttonPressed.target.__data__.name == "Vida"){
      $("#li_removeFilo").css("display", "none");
      $("#li_editFilo").css("display", "none");
      $("#li_infoFilo").css("display", "none");

    } else{
      $("#li_removeFilo").removeAttr("style");
      $("#li_editFilo").removeAttr("style");
      $("#li_infoFilo").removeAttr("style");

    }

    if(user_logged != creator_cladogram){
      if(buttonPressed.target.__data__.creator != user_logged){
        $("#li_removeFilo").css("display", "none");

      } else{
        $("#li_removeFilo").removeAttr("style");

      }
    }

    $("#title_tabOptions").text(varThis[0].textContent);
  }

  inputText_onfocusout($("#input_text").val());

}

function dotNode_onmousedown(buttonPressed){
  if (buttonPressed.which == 1) {
      return true; //permitira arrastar um node
  } else {
      return false; //nao permitira arrastar um node
  }
}

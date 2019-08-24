function code(event) {
  event.preventDefault();
  const text= document.getElementById("text").value;
  const number= +document.getElementById("number").value;
  const radio = document.getElementById("radioOne").checked;
  let resultado; 

  if (radio === true) {
    resultado = window.cipher.encode(number, text);
  }
  else { 
    resultado = window.cipher.decode(number, text);
        
  }
  document.getElementById("answer").innerHTML = resultado;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", code);

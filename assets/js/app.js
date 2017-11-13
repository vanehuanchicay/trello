
function add(){
  var startButton= document.getElementById("inicio"); //llamo a mi boton inicial
  var principalConteiner = document.getElementById("contenedor"); // llamo a mi contenedor principal

  var secondConteiner = document.createElement("div"); // creo un contenedor que tendrá el input y el btn
  	secondConteiner.className ="box"; // clase al div

  var input = document.createElement("input"); // creo el input
  	input.setAttribute("type", "text"); // le digo a mi input que será de tipo texto
  	input.setAttribute("placeholder", "Añadir una lista"); // le agrego un placeholder al input
    input.className="entrada";

  var saveButton = document.createElement("button"); // creo botón guardar
  	saveButton.textContent = "Guardar"; // le agrego la palabra guardar al btn
    saveButton.className="savebutton";
  
  secondConteiner.appendChild(input); //agrego el input al contenedor
  secondConteiner.appendChild(saveButton); //agrego mi btn al contenedor
  principalConteiner.appendChild(secondConteiner); // agrego mi contenedor input al contenedor principal

  saveButton.addEventListener("click", function(){ // creo un evento a mi boton guardar
  	var tittle = document.createElement("h1"); // creo un h1 para donde irá guardado lo q pongo en el input
  		tittle.textContent = input.value; // retengo el valor del input
  	secondConteiner.removeChild(input); //remuevo el input
  	secondConteiner.removeChild(saveButton); // remuevo el boton


 	principalConteiner.appendChild(tittle); // agrego mi h1 algo contenedor principal
  	var addAcardButton = document.createElement("button"); // agrego un boton
      addAcardButton.className="addbutton";
  		addAcardButton.textContent="añadir una tarjeta"; // le agrego un titulo al boton
 	principalConteiner.appendChild(addAcardButton); //  agrego mi boton al contenedor principal

  	addAcardButton.addEventListener("click",function(){ // agrego un evento a mi boton añadir una tarjeta
  		var txt = document.createElement("textArea"); // creo un textArea 
        txt.className="texto";
  		var put = document.createElement("button"); // creo el boton añadir
  			put.textContent="añadir"; //  coloco un nombre 
        put.className="putbutton";
  		principalConteiner.removeChild(addAcardButton); // remuevo mi boton añadir tarjeta
  		principalConteiner.appendChild(txt); // agrego mi texarea al contenedor principal
  		principalConteiner.appendChild(put); // agrego el boton al contenedor principal


  	put.addEventListener("click", function(){ // creo un evento a mi boton añadir
  		var paragraph = document.createElement("p"); // creo un elemento parrafo
  		paragraph.textContent= txt.value;  // rescato el valor
  		txt.value = ""; // limpio
  		principalConteiner.appendChild(paragraph); // agrego mi parrafo a mi contenedor principal
  		principalConteiner.insertBefore(paragraph,txt); // 


  	})

  })
  })
}



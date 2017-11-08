
function add(){
  var startButton= document.getElementById("inicio"); //llamo a mi boton inicial
  var principalConteiner = document.getElementById("contenedor"); // llamo a mi contenedor principal

  var secondConteiner = document.createElement("div"); // creo un contenedor que tendrá el input y el btn
  	secondConteiner.className ="box"; // clase al div

  var input = document.createElement("input"); // creo el input
  	input.setAttribute("type", "text"); // le digo a mi input que será de tipo texto
  	input.setAttribute("placeholder", "Añadir una lista"); // le agrego un placeholder al input

  var saveButton = document.createElement("button"); // creo botón guardar
  	saveButton.textContent = "guardar"; // le agrego la palabra guardar al btn
  
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
  		addAcardButton.textContent="añadir una tarjeta"; // le agrego un titulo al boton
 	principalConteiner.appendChild(addAcardButton); //  agrego mi boton al contenedor principal

  	addAcardButton.addEventListener("click",function(){ // agrego un evento a mi boton añadir una tarjeta
  		var txt = document.createElement("textArea"); // creo un textArea 
  		var put = document.createElement("button"); // creo el boton añadir
  			put.textContent="añadir"; //  coloco un nombre 
  		principalConteiner.removeChild(addAcardButton);
  		principalConteiner.appendChild(txt);
  		principalConteiner.appendChild(put);


  	put.addEventListener("click", function(){
  		var paragraph = document.createElement("p");
  		paragraph.textContent= txt.value;
  		txt.value = "";
  		principalConteiner.appendChild(paragraph);
  		principalConteiner.insertBefore(paragraph,txt);


  	})

  })
  })
}



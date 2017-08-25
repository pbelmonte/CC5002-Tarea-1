var foto = 2;

function agregarFotos() {
	if (foto <= 5) {
	    var input = document.createElement('input');
	    input.type = "file";
	    var nombre = "foto-juguete[" + foto + "]";
	    input.name = "nombre";
	    foto += 1;
	    var linebreak = document.createElement("br");
	    document.getElementById('fotos').appendChild(linebreak);
	    document.getElementById('fotos').appendChild(input);
	    document.getElementById('fotos').appendChild(linebreak);
	} else {
		window.alert("No puede agregar más de 5 fotografías");
	}
}
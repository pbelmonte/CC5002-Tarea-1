var div = document.getElementById('nuevo-comentario');
var btn = document.getElementById('agregar-comentario');

function agregarComentario() {
	btn.style.display = 'none';
	div.style.display = 'block';
}

function agregar() {
	div.style.display = 'none';
	btn.style.display = 'block';
	alert("Comentario agregado!");
}

function cancelar() {
	div.style.display = 'none';
	btn.style.display = 'block';
	alert("Comentario cancelado");
}
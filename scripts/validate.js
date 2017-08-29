function validateForm() {
	var error = "";
	if (!validate_name()) {
		error += "Nombre Inválido\n";
	}
	if (!validate_file()) {
		error += "Adjunte una foto\n";
	}
	if (!validate_region()) {
		error += "Seleccione una región\n";
	}
	if (!validate_comuna()) {
		error += "Seleccione una comuna\n";
	}
	if (!validate_direccion()) {
		error += "Dirección Inválida\n";
	}
	if (!validate_contact_name()) {
		error += "Nombre de Contacto Inválido\n";
	}
	if (!validate_email()) {
		error += "Email Inválido\n";
	}
	if (!validate_phone()) {
		error += "Teléfono Inválido\n";
	}
	if (error != "") {
		alert(error);
		return false;
	}
	return true;
}

function validate_name() {
	var regex = /^[\w\-\s]+$/;
	var name = document.getElementById("nombre-juguete");
	if (regex.test(name.value)) {
		return true;
	}
	return false;
}

function validate_file() {
	var file = document.getElementById("foto-juguete[1]");
	return file.value;
}

function validate_region() {
	var sel = document.getElementById("regiones");
	return sel.value != "sin-region";
}

function validate_comuna() {
	var sel = document.getElementById("comunas");
	return sel.value != "sin-comuna";
}

function validate_direccion() {
	var regex = /(^[\w\-\s\u00E0-\u00FC]+) ([0-9]+)$/;
	var dir = document.getElementById("calle-numero");
	if (regex.test(dir.value)) {
		return true;
	}
	return false;
}

function validate_contact_name() {
	var regex = /^[a-zA-z\s]+$/;
	var name = document.getElementById("nombre-contacto");
	if (regex.test(name.value)) {
		return true;
	}
	return false;
}

function validate_email() {
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = document.getElementById("email-contacto");
	if (regex.test(email.value)) {
		return true;
	}
	return false;
}

function validate_phone() {
	var regex = /^[\+]?([0-9]{3})?\.?([0-9]{8,15})+$/;
	var phone = document.getElementById("fono-contacto");
	if (regex.test(phone.value) || phone.value == "") {
		return true;
	}
	return false;
}
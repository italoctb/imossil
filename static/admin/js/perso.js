preparaDoc();

function preparaDoc() {
	var tam = document.getElementById("tbl").rows.length;
	for(var j = 1; j<tam; j++){
		makeForm(document.getElementById("defaultCheck"+j));
	}
	$('#control_button_02').hide();
	$('#control_button_03').hide();
	$('#control_button_04').hide();
	$('#control_button_05').hide();
}

function makeForm(element) {
	var ref = element.value;
	if(element.checked){
		document.getElementById("checkInput"+ref).value = document.getElementById("tbl").rows[ref].cells[2].innerHTML;
		console.log("Field"+ref+" = "+document.getElementById("checkInput"+ref).value);
	}else {
		document.getElementById("checkInput" + ref).value = "";
		console.log("Field" + ref + " = " + document.getElementById("checkInput" + ref).value);
	}
}

function next_step_1() {
	$('#control_button_01').fadeOut('slow');
	$('#control_button_02').delay(650).fadeIn('slow');
	$('#control_button_03').delay(650).fadeIn('slow');
	$('#tbl').fadeOut('slow');
	$('#sec-2').delay(500).fadeIn('slow');

}function back_step_1() {
	$('#control_button_02').fadeOut('slow');
	$('#control_button_03').fadeOut('slow');
	$('#control_button_01').delay(700).fadeIn('slow');
	$('#sec-2').fadeOut('slow');
	$('#tbl').delay(500).fadeIn('slow');
}function next_step_2() {
	$('#control_button_02').fadeOut('slow');
	$('#control_button_03').fadeOut('slow');
	$('#control_button_04').delay(650).fadeIn('slow');
	$('#control_button_05').delay(650).fadeIn('slow');
	$('#sec-2').fadeOut('slow');
	$('#sec-3').delay(500).fadeIn('slow');
}function back_step_2() {
	// $('#tbl').fadeIn('slow');
	$('#control_button_02').fadeIn('fast');
	$('#control_button_03').fadeIn('fast');
	$('#control_button_04').hide();
	$('#control_button_05').hide();
}


function selectTemp(doc) {
	doc.style.border = "2px solid #ED8036";
	document.getElementById("email_temp").value = doc.children[0].value;
	console.log(document.getElementById("email_temp").value);
}

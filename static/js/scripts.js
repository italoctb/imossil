$(document).ready(function() {
	$('select').niceSelect();
});

var btn_act = 0;
function select_gar(element){
	if(btn_act == 0){
		element.classList.add("active");
		$("#hav_gar_input").val("Sim");
		btn_act = 1;
	}else{
		btn_act = 0;
		$("#hav_gar_input").val("Não");
		element.classList.remove("active")
	}

}

var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

var parallax = function() {

	if ( !isMobile.any() ) {
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false,
			responsive: true

		});
	}
};

function formatar(mascara, documento){
	var i = documento.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(i);
	if(i == 0){
		documento.value += "(";
	}else{
		if(i > 14) {
			documento.value = documento.value.substring(0, i-1);
		}else{
			if (texto.substring(0,1) != saida){
				documento.value += texto.substring(0,1);
			}
		}
	}

}

function calcular_iva() {
	var precio=document.getElementById('precio').value;
	var resultado=precio*0.19;
	var span_resultado=document.getElementById('resultado_iva');
	span_resultado.textContent=resultado;
	// body...
}


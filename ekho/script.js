function carregar(){
	pResultado = document.getElementById("pResultado");
	spanResultado = document.getElementById("spanResultado");
	spanUltimoResultado = document.getElementById("spanUltimoResultado");
	reconhecendo = document.getElementById("reconhecendo");
	micImg = document.getElementById("micImg");
	msgdiv = document.getElementById("msg");
	errormsgdiv = document.getElementById("errormsg");
	$("#msg, #errormsg").click(function(){
		$(this).animate({opacity: 0},"fast",function(){
			$(this).slideUp("fast", function(){
				$(this).css({opacity:1});
				$(this).html("null");
			});
		});
	});
}

function getResp(mensagem){
	fileref=document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src", "http://bot.insite.com.br/cgi-bin/bot_gateway.cgi?server=127.0.0.1:8088&js=1&rnd=0.31415926535897932&msg="+mensagem);
	fileref.setAttribute("onload", "javascript:respReady()")
	document.getElementsByTagName("head")[0].appendChild(fileref);
	$(fileref).remove();
}

function respReady(){
	window.speechSynthesis.cancel();
	$("#pResposta").html(resp);
	$("#pResposta").fadeIn("fast");
	seteVoz = new SpeechSynthesisUtterance(resp);
	seteVoz.lang = "pt-BR";
	if(falar){
		window.speechSynthesis.speak(seteVoz);
	}
}

var falar = true;
var removerResultado = true;
var state = "off";
var speech = new webkitSpeechRecognition();

speech.lang = "pt-BR";
speech.maxAlternatives = 3;
speech.continuous = true;
speech.interimResults = true;

function ativar() {
	console.log("Ativando reconhecimento");
	micImg.src = "mic_inativo.png";
	speech.start();
}

function desativar(){
	console.log("Desativando reconhecimento");
	speech.stop();
}

function micClick(){
	if(state == "off"){
		ativar();
	}
	else{
		desativar();
	}
}

function msg(texto, tipo){
	if(tipo == "erro"){
		campo = "#errormsg";
	}
	else{
		campo = "#msg";
	}

	if(texto != $(campo).html()){
		$(campo).fadeOut("fast");
		$(campo).html(texto);
		$(campo).fadeIn("fast");
	}


	console.log(texto);
}

speech.onstart = function(){
	msg("Reconhecimento de voz ativado");
	micImg.src = "mic_on.png";
	state = "on";
}

speech.onresult = function(event){

	var resultados = event.results[event.resultIndex];
	transcricao = resultados[0]["transcript"];
	
	console.log("%cIndex: " + event.resultIndex + " %c'" + transcricao + "' %c(" + Math.round(resultados[0]["confidence"]*100) + "%)", "color:#ff5500", "color: #000", "color: #0055ff");

	ultimoEvento = event;

	if(event["results"][event.resultIndex]["isFinal"]){
		resultadoFinal = spanResultado.innerHTML + transcricao;
		$("#pResposta").fadeOut("fast",function(){
			$("#spanResultado").fadeOut("fast",function(){
				getResp(transcricao);
				$("#reconhecendo").html("").show();
				$("#spanUltimoResultado").hide().html(transcricao).textEffect({possibleChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", fps:10, repeat: 10}).on("texteffectend",function(){
					$("#spanUltimoResultado").html("");
					$("#spanResultado").show();
					spanResultado.innerHTML = transcricao;
				});
			});
		});
		console.log("Index finalizada");
		console.log(event);
	}
	else{
		//reconhecendo.innerHTML = transcricao;
	}
	
}

speech.onend = function(){
	msg("O Reconhecimento foi desativado");
	spanResultado.innerHTML = spanResultado.innerHTML + " ";
	micImg.src = "mic_off.png";
	state = "off";
}

speech.onerror = function(event){
	switch(event.error){
		case "no-speech":
			msg("Nenhuma voz foi detectada", "erro");
			break;
		case "aborted":
			msg("O reconhecimento de voz foi interrompido", "erro");
			break;
		case "audio-capture":
			msg("Houve uma falha na captura de áudio", "erro");
			break;
		case "network":
			msg("Houve uma falha na comunicação de rede durante o processo de reconhecimento", "erro");
			break;
		case "not-allowed":
			msg("Seu navegador não está permitindo a captura de áudio por motivos de segurança, privacidade ou preferência do usuário", "erro");
			break;
		case "service-not-allowed":
			msg("Seu navegador não permite este serviço de captura de áudio", "erro");
			break;
		case "bad-grammar":
			msg("Ocorreu um erro semântico ou gramatical", "erro");
			break;
		case "language-not-supported":
			msg("Este idioma não é suportado por este serviço", "erro");
			break;
	}
}


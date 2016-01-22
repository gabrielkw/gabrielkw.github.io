function raiz_quadrada_cinco_vezes(numero) {
    for (j = 0; j < 5; j++) {
         numero = Math.sqrt(numero)
    }
    return numero
}

function seis_numeros_depois_da_virgula(numero){
    hash = numero.toString()
    hash = hash.replace(/0/g, "").substr(hash.lastIndexOf(".") + 1, 6)
    return hash
}

function ordenar_hash(numero){
    hash = hash.toString()
    hash = numero.split("").sort().join("")
    return hash
}

function calcular(numero,senha) {
    hash = numero
    if(senha > 1){
        hash *= senha
    }
    hash = raiz_quadrada_cinco_vezes(hash)
    hash = seis_numeros_depois_da_virgula(hash)
    hash = ordenar_hash(hash)
    
    if (hash == "") hash = "0"
   
    return hash
}

function imprimir_resultado(){
    numero_input = document.getElementById("numero")
    numero = numero_input.value
    numero_input.value = ""
    
    senha = 0
    senha_input = document.getElementById("senha")
    if(senha_input != ""){
        senha = senha_input.value
    }
    
    hash = calcular(numero,senha)
    
    resultado = document.getElementById("resultado")
    resultado.innerHTML = "A hash do número " + numero + " é: </br>" + hash
    
    numero_input.focus()
}
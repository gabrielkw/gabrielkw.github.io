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

function calcular() {
    numero_input = document.getElementById("numero")
    numero = numero_input.value
    numero_input.value = ""
    
    hash = numero
    hash = raiz_quadrada_cinco_vezes(hash)
    hash = seis_numeros_depois_da_virgula(hash)
    hash = ordenar_hash(hash)
    
    if (hash == "") hash = "0"
    resultado = document.getElementById("resultado")
    resultado.innerHTML = "A hash do número " + numero + " é: </br>" + hash
    
    numero_input.focus()
}
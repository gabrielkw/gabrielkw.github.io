function calcular() {
    hash_ordenada = true
    i = document.getElementById("numero").value
    document.getElementById("numero").value = ""
    hash = i
    for (j = 0; j < 5; j++) {
        hash = Math.sqrt(hash)
    }
    hash = hash.toString()
    hash = hash.replace(/0/g, "")
    hash = hash.substr(hash.lastIndexOf(".") + 1, 6)
    if (hash_ordenada) hash = hash.split("").sort().join("")
    if (hash == "") hash = "0"
    resultado = document.getElementById("resultado")
    resultado.innerHTML = "A hash do número " + i + " é: </br>" + hash
}
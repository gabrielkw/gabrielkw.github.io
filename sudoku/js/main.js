function preencher(str) {
    var cells = document.getElementsByTagName("td");
    var cell;
    for (var i = 0; i < cells.length; i++) {
        cell = cells[i];
        if (str.charAt(i) != '.') {
            cell.contentEditable = "false";
            cell.textContent = str.charAt(i);
            cell.style.fontWeight = "bold";
        } else {
            cell.style.fontWeight = "normal";
            cell.contentEditable = "true";
            cell.textContent = ""
        }
    }
}

function gerar(num) {
    puzzle = sudoku.generate(num);
    resposta = sudoku.solve(puzzle);
    preencher(puzzle);
}

function gerar_original() {
    puzzle = puzzle_original;
    resposta = sudoku.solve(puzzle);
    preencher(puzzle);
}

function getEstado() {
    var cells = document.getElementsByTagName("td");
    var str = "";
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent != "") {
            str += cells[i].textContent;

        } else {
            str += ".";
        }
    }
    return str;
}

function validar() {
    if (getEstado() == sudoku.solve(puzzle)) {
        return true;
    } else {
        return false;
    }
}

function checar_resposta() {
    if (getEstado() == puzzle) {
        alert("Você ainda não começou a resolver o quebra-cabeça. Clique em uma célula vazia e preencha usando o teclado.");
    } else {
        if (validar()) {
            alert("Parabéns! Você conseguiu completar um dos jogos mais difíceis de Sudoku que existem e tudo o que você ganhou foi este pop-up idiota.");
        } else {
            alert("Esta não é a resposta certa. Continue tentando.");
        }
    }
}

var puzzle_original = "8..........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4.."
var puzzle = puzzle_original;
var resposta = sudoku.solve(puzzle);

preencher(puzzle);
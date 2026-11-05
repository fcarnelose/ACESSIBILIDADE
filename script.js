let botaoAjuda = document.querySelector(".btn-help");
let botaoFechar = document.querySelector(".btn-close");
let janelaDeAjuda = document.querySelector(".modal-fundo");


botaoAjuda.addEventListener("click", abrirModal);
botaoFechar.addEventListener("click", fecharModal);

function abrirModal(){
    janelaDeAjuda.style.display = "block";
}

function fecharModal(){
    janelaDeAjuda.style.display = "none"; 
}


//TAMANHO DA FONTE
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;

let btnAumentaFonte = document.getElementById("btnAumentaTexto")
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto")

btnAumentaFonte.addEventListener("click",aumentaFonte)
btnDiminuiFonte.addEventListener("click",diminuiFonte)


function aumentaFonte(){
    tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

function diminuiFonte(){
    tamanhoFonteAtual = tamanhoFonteAtual - valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}



// LEITURA DE TELA
let lendo = false;
const btnLeitura = document.getElementById("btnVoz");

btnLeitura.addEventListener("click", lerEmVozAlta);

function lerEmVozAlta(){
// Se já estiver lendo, PARAR TOTALMENTE
if (lendo === true){
speechSynthesis.cancel(); // Cancela o áudio imediatamente
lendo = false;
return;
}

// Se não estiver lendo, INICIAR a leitura do começo
let conteudo = document.querySelector("main");
let texto = conteudo.innerText;

let fala = new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";
fala.onend = finalizarLeitura;
fala.onerror = finalizarLeitura;

speechSynthesis.cancel();
speechSynthesis.speak(fala);

lendo = true;
}

function finalizarLeitura(){
lendo = false;
}

let nome = document.getElementById("nome")
let email = document.getElementById("email")
let sugestao = document.getElementById("sugestion")
let nomeOk = false
let emailOk = false
let sugestaoOk = false

/*Função para validar nome */
function validaNome() {

    let txtNome = document.getElementById("txtNome")
    if (nome.value.length < 3) {
        txtNome.style.color = 'red'
        txtNome.innerHTML = "nome invalido"
    } else {
        txtNome.style.color = 'green'
        txtNome.innerHTML = "nome válido"
        nomeOk = true
    }

}

/*Função para validar email */
function validaEmail() {
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.style.color = 'red'
        txtEmail.innerHTML = "Insira um Email válido"
    }else{
        txtEmail.style.color = 'green'
        txtEmail.innerHTML = "Email válido"
        emailOk = true
    }
}

function validaSugestao() {
    
    if (sugestao.value.length >= 100) {
        txtChar.style.color = 'red'
        txtChar.innerHTML = "Número de caracteres excedidos"
    } else {
        txtChar.style.color = "green"
        txtChar.innerHTML = "Ok"
        sugestaoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && sugestaoOk == true){
        alert(nome.value + ", sua sugestão foi enviada. Muito obrigado")
    }else{
        alert("Formulário incompleto")
    }
}
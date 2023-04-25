function login(){
    location.href = "../login/login.html"
}
function registrar(){
    location.href = "../registrar/registrar.html"
}

/* Criar objeto que seja um posto qual a pessoa possa inserir e excluir.*/

function Comentario () {
    var postagem = document.getElementById("texto")
    var postar = new String(postagem)
    alert(`${postar}`)
}


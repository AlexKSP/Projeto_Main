function login(){
    location.href = "../login/login.html"
}
function registrar(){
    location.href = "../registrar/registrar.html"
}

/* Criar objeto que seja um posto qual a pessoa possa inserir e excluir.*/

function Comentario () {
    let postagem = document.getElementById('texto')
    let postar = String(postagem.value)
    if (postar != "" && postar.length >= 10) {
        //alert('certo')
        // cria um novo elemento div
        // e dá à ele conteúdo
        let newDiv = document.createElement("div")
        let newMsg = document.createTextNode(`${postar}`)
        newDiv.appendChild(newMsg) //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1") 
        document.body.insertBefore(newDiv, divAtual)
        document.getElementById('resp').innerHTML = 'tchau'
        
        
    } else {
        alert('Campo vazio ou com menos de 10 caracteres')
    }
    
    
}

/*  -declaração de um objeto:
    var automovel = {
        cor: azul,
        marca: fiat,
        ano: 2022
        modelo: argo
    } 
    -propriedade de um obejeto é tudo o que está dentro de {}
    -caso eu queira adicionar uma nova propriedade:
    carro.categoria = carro;

    -declaração de array:
    var matriz = [4 , 2]
    -adicionando um numero novo:
    matriz[2] = 5;
    
*/
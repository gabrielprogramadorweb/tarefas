// while = enquanto
/*

var x =0;
while(x<10){
    document.write('</br>O valor de x é: ' + x);
    x++;
}
*/

// for = para
/*
var valor = 30;
for(a = 0; a <= valor; a++){
    document.write("<br> Valor do a é: " + a)
}*/
// Para operações com varios retornos
/*
function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = Suco");
            break;
        case 2:  
            alert("Você escolheu 2 = Agua gelada"); 
            break;
        case 3:  
            alert("Você escolheu 3 = Sorvete"); 
            break;
        case 4:  
            alert("Você chamou o garçom"); 
            break;
            default:
                alert("Escolha uma opção entre 1 e 4");
                break;
    }
}*/
/*
let usuarios = [
    {nome: "Mateus", cargo:"Programador", status:"Ativo"},
    {nome: "Maria", cargo: "Backend", status: "ATIVO"},
    {nome: "Jose", cargo: "RH", status:"ATIVO"}
];
console.log(usuarios);*/

/*let nome = ("Gabriel");
let sobrenome = ("Castro");
let idade = ("25");

let info = (`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`);

console.log(info);*/

let listElement = document.querySelector
("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];


function renderTarefas(){
    listElement.innerHTML = "";

    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("❌");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}
renderTarefas();

function addTarefas(){
    if(inputElement.value === ''){
        alert("Escreva algo");
        return false;

    }else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}
buttonElement.onclick = addTarefas;

function deletarTarefa(posicao){
   tarefas.splice(posicao, 1);
   renderTarefas();
   salvarDados();
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}
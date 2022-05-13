//Variavel 
var x=200,y=841, //parametros da Taryn
b=0, o=60, //parametros do boneco 
canvas = document.querySelector('canvas'), //declara que o elemento "canvas" deve ser selecionado
c = canvas.getContext('2d'), ctx = canvas.getContext('2d')//Desenha o canvas na tela
canvas.height = window.innerHeight -35 
canvas.width = window.innerWidth - 35  //determina a altura e largura

//Iniciando o Jogo 
alert("Isto é uma representação do Tutorial do jogo 'A lenda de Taryn'")
alert("Seu objetivo é atingir o boneco 3 vezes") //introdução da apresentação
alert("Controles : 'w/a/s/d e o botão esquerdo do mouse'")
alert("Inicie com 'clique na tela e pressione 'D'") //Instruções de como se iniciar 


//Boneco 
function boneco(){
    requestAnimationFrame(boneco)//a animação do boneco começa
    c.arc (1600,820,o,0, Math.PI*2,false)//parametros do boneco
    c.strokeStyle = 'Blue'//Cor do elemento
    c.stroke()} //Desenho do boneco 
//Taryn 
function Taryn(){
    c.clearRect(0,0,innerWidth,innerHeight) //Limpando o Canvas 
    requestAnimationFrame(Taryn) // Começando a animação do elemento
    c.fillStyle = '#FF0000' //Editando a cor do elemento
    c.fillRect (x,y,50,50) // Desenhando o elemnto 
    c.beginPath()

//Colisão do elemento principal
if(x  > 1491){ x= 1300
b=b+1} //Se o elemento for maior que 1491 é adicionado 1 a variavel b
if(b==3){
o=0//apos a variavel B ser igual a 3 o boneco desaparece. (como se o boneco se quebrasse)
alert("Retorne para o acampamento") //Instruções ao usuario
b=0 //Caso não retornasse ele entrava em loop 
if(x<1490){
alert("PARA O ACAMPAMENTO!")} //instruções 
} //Caso b for igual a 3 o jogo alerta que o elemento deve voltar para a posição inicial
if(x < 170){ x=191
alert("OBRIGADO POR JOGAR NOSSA PRIMEIRA VERSÃO!")}
if(y > 842){y= 841}
if(y < 752){ y=841}
}// colisão do elemento com o cenário canvas

//Reiniciar jogo
function Reiniciar(){
    x=200
    y=841
    alert("O jogo foi reiniciado!")//Informação para o úsuario 
}
//try/Catch
try{
if(y>=751){
Taryn()
}
}
catch{
console.log("Aperte alguma tecla para forçar o inicio")
}
//Movimentação das teclas
//Eixo X
document.addEventListener("keydown", function(e){
    if (e.key == "a") {
    Taryn()
    boneco()
    x= x -30
    }
})//Adicionando a movimentação do elemento ao apertar a tecla "a"
document.addEventListener("keydown", function(e){
    if (e.key == "d") {
    Taryn()
    boneco()
    x= x +30
    }
}) //Adicionando a movimentação do elemento ao apertar a tecla "d"

//Eixo Y
document.addEventListener("keydown", function(e){//Observa o movimento de cada tecla a todo momento
    if (e.key == "w") { //confere se a tecla correta foi selecionada
    Taryn()
    boneco()
    y= y -30
    }
}) //Adicionando a movimentação do elemento ao apertar a tecla "w"
document.addEventListener("keydown", function(e){
    if (e.key == "s") { 
    Taryn()
    boneco()
    y= y +30
    }
})//Adicionando a movimentação do elemento ao apertar a tecla "s"
//Reinicar o game
document.addEventListener("keydown", function(e){
if (e.key == "r") { //confere se a tecla correta foi selecionada
  Reiniciar()
    }
})

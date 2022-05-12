//Variavel 
var x=0 ,y=842, 
b=0, o=60,
canvas = document.querySelector('canvas'), //declara que o elemento "canvas" deve ser selecionado
c = canvas.getContext('2d'), ctx = canvas.getContext('2d')//Desenha o canvas na tela
canvas.height = window.innerHeight -35 
canvas.width = window.innerWidth - 35  //determina a altura e largura

//Iniciando o Jogo 
alert("Isto é uma representação do Tutorial do jogo 'A lenda de Taryn'")
alert("Seu objetivo é atingir o boneco 3 vezes") //introdução da apresentação
alert("Inicie com 'D'") //Instruções de como se iniciar 


//Boneco 
function boneco(){
    requestAnimationFrame(boneco)
    c.arc (1600,820,o,0, Math.PI*2,false)
    c.strokeStyle = 'Blue'
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
o=0
alert("Retorne para o acampamento")
b=0
if(x<1490){
alert("PARA O ACAMPAMENTO!")}
} //Caso b for igual a 3 o jogo alerta que o elemento deve voltar para a posição inicial
if(x < 0){ x=1
alert("OBRIGADO POR JOGAR NOSSA PRIMEIRA VERSÃO!")}
if(y > 842){y= 841}
if(y < 752){ y=841}
}// colisão do elemento com o cenário canvas

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




















































































// var dx=200, dy=200, Oy=400,// Eixo X e Y
// vx=10, vy=10, Vo=5,// Velocidade da Figura
// lado = 100
// var canvas = document.querySelector('canvas')
// var c = canvas.getContext('2d'),
//     t = canvas.getContext ('2d')
// canvas.height = window.innerHeight -35  // Altura do Campo
// canvas.width = window.innerWidth   -35 // Largura do Campo

// //Jogo começa instantâneo
// alert("Pressione (A ou D) para iniciar!")
//     c.clearRect(0,0,innerWidth,innerHeight)
//     c.fillStyle = '#FF0000'
//     c.fillRect (dx,dy,50,50)
//     c.beginPath()
// //Oponente I
//     c.arc (800,Oy,60,0, Math.PI*2,false)
//     c.strokeStyle = '#0000FF'
//     c.stroke()
//      vx=0
//      vy=0
// //Dyname I
//      t.beginPath();
//      t.strokeStyle = 'yellow'
//      t.moveTo(innerWidth - 50, 800); //Ponto inicial
//      t.lineTo(1400+lado, 800);
//      t.lineTo(1400+lado, 800-lado);
//      t.lineTo(innerWidth - 50, 800);
//      t.stroke(); //draw path

// // Oponente
// function oponente(){
//     requestAnimationFrame(oponente)
//     c.beginPath()
//     c.arc (800,Oy,60,0, Math.PI*2,false)
//     c.strokeStyle = '#0000FF'
//     c.stroke()
//     console.log(Oy)
//     console.log(dy)
//     if ((Oy+200)>innerHeight + 150){
//         Vo=-Vo
//        }
//        else if (Oy<0) Vo=-Vo
//        Oy = Oy+Vo}

// //Dyname
// function dyname(){
//     requestAnimationFrame(dyname)
//     t.beginPath();
//     t.strokeStyle = 'yellow'
//      t.moveTo(innerWidth - 50, 800); //Ponto inicial
//      t.lineTo(1400+lado, 800);
//      t.lineTo(1400+lado, 750-lado);
//      t.lineTo(innerWidth- 50, 800);
//      t.stroke(); //draw path
//     }


// //Animação Eixo Y
// function TarynS(){
//     requestAnimationFrame(TarynS)
//     c.clearRect(0,0,innerWidth,innerHeight)
//     c.fillStyle = '#FF0000'
//     c.fillRect (dx,dy,50,50)  // Dimenções da Figura (x,y,Tx,Ty)
//     if ((dy+200)>innerHeight + 150){
//         vy=-vy
//        }
//        else if (dy<0) vy=-vy
//        dy = dy+vy
//        if(dx>745 && dx<809){
//         if(dy==Oy){
//             dx=0
//         }
//       }}
// function TarynW(){
//     c.clearRect(0,0,innerWidth,innerHeight)
//     c.fillStyle = '#FF0000'
//     c.fillRect (dx,dy,50,50)  // Dimenções da Figura (x,y,Tx,Ty)
// }

// // Eixo X
// function TarynD(){
//     requestAnimationFrame(TarynD)
//     c.clearRect(0,0,innerWidth,innerHeight)
//     c.fillStyle = '#FF0000'
//     c.fillRect (dx,dy,50,50)  // Dimenções da Figura (x,y,Tx,Ty)
//  if ((dx+200) > innerWidth + 150){
//      vx=-vx
//  }
//  else if (dx<0) vx=-vx
//  dx = dx+vx
//  if(dx>745 && dx<809){
//     if(dy==Oy+Vo){
//         dx=0
//     }
//   }}  

//  function TarynE(){
//     c.clearRect(0,0,innerWidth,innerHeight)
//     c.fillStyle = '#FF0000'
//     c.fillRect (dx,dy,50,50)
// } 

// // Para pfavor
//     function TarynP(){  
//         c.clearRect(0,0,innerWidth,innerHeight)
//         c.fillStyle = '#FF0000'
//         c.fillRect (dx,dy,50,50)}
 



// //Movimentção 
// // function keyPress (e,flag){
// //     let tecla = e.keyCode
// //     switch(tecla){
// //         case 65: {
// //             if(flag){
// //            TarynD()
// //             }
// //         }
// //     }
// // }


    
// // Teclas S e W
// document.addEventListener("keydown", function(e){
//     if (e.key == "s"){
//     vy=0
//     vy=2
//     TarynS(1)
//     oponente()
//     dyname()
//     }
// })
// document.addEventListener("keyup", function(e){
//     if (e.key == "s"){
//         vy=0
//         vx=0
//         TarynS(0)
//         Vo=-0.2
//         oponente()
//         dyname()
//      }
//     })
// document.addEventListener("keydown", function(e){
//     if (e.key == "w"){
//     vy=0
//     vy=-2
//     TarynW(-1)
//     oponente()
//     dyname()
//     }
// })
// document.addEventListener("keyup", function(e){
//     if (e.key == "w"){
//         vy=0
//         vx=0
//         TarynW(0)
//         Vo=0.2
//         oponente()
//         dyname()
//      }
//     })

// // Teclas A e D 
// document.addEventListener("keydown", function(e){
//     if (e.key == "a"){
//     vx=0
//     vx=-2
//     TarynE(-1)
//     oponente()
//     dyname()
//     }
// })
// document.addEventListener("keyup", function(e){
//     if (e.key == "a"){
//         vy=0
//         vx=0
//         TarynD(0)
//         Vo=-0.2
//         oponente()
//         dyname()
//      }
//     })
// document.addEventListener("keydown", function(e){
//     if (e.key == "d"){
//     vx=0
//     vx=2
//     TarynD(1)
//     oponente()
//     dyname()
//     }
// }) 
// document.addEventListener("keyup", function(e){
//     if (e.key == "d"){
//         vy=0
//         vx=0
//         TarynD(0)
//         Vo=0.2
//         oponente()
//         dyname()
//      }
//     })
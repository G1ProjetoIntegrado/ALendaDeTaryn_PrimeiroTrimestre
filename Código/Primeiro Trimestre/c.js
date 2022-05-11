var dx=200, dy=200, Oy=400// Eixo X e Y
vx=10, vy=10, Vo=5,// Velocidade da Figura
lado = 100
var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d'),
    t = canvas.getContext ('2d')
canvas.height = window.innerHeight -35  // Altura do Campo
canvas.width = window.innerWidth   -35 // Largura do Campo

//Jogo começa instantâneo
alert("Pressione (A,S ou D) para iniciar!")
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = 'red'
    c.fillRect (dx,dy,50,50)
    c.beginPath()
//Oponente I
    c.arc (800,Oy,60,0, Math.PI*2,false)
    c.strokeStyle = 'blue'
    c.stroke()
     vx=0
     vy=0
//Dyname I
     t.beginPath();
     t.strokeStyle = 'yellow'
     t.moveTo(innerWidth - 50, 800); //Ponto inicial
     t.lineTo(1400+lado, 800);
     t.lineTo(1400+lado, 800-lado);
     t.lineTo(innerWidth - 50, 800);
     t.stroke(); //draw path

// Oponente
function oponente(){
    requestAnimationFrame(oponente)
    c.beginPath()
    c.arc (800,Oy,60,0, Math.PI*2,false)
    c.strokeStyle = 'blue'
    c.stroke()
    if ((Oy+200)>innerHeight + 150){
        Vo=-Vo
       }
       else if (Oy<0) Vo=-Vo
       Oy = Oy+Vo}

//Dyname
function dyname(){
    requestAnimationFrame(dyname)
    t.beginPath();
    t.strokeStyle = 'yellow'
     t.moveTo(innerWidth - 50, 800); //Ponto inicial
     t.lineTo(1400+lado, 800);
     t.lineTo(1400+lado, 750-lado);
     t.lineTo(innerWidth- 50, 800);
     t.stroke(); //draw path
    }


//Animação Eixo Y
function TarynS(){
    requestAnimationFrame(TarynS)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = 'red'
    c.fillRect (dx,dy,50,50)  // Dimenções da Figura (x,y,Tx,Ty)
    if ((dy+200)>innerHeight + 150){
        vy=-vy
       }
       else if (dy<0) vy=-vy
       dy = dy+vy}
function TarynW(){
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = 'red'
    c.fillRect (dx,dy,50,50)  // Dimenções da Figura (x,y,Tx,Ty)
}

// Eixo X
function TarynD(){
    requestAnimationFrame(TarynD)
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = 'red'
    c.fillRect (dx,dy,50,50)  // Dimenções da Figura (x,y,Tx,Ty)
 if ((dx+200) > innerWidth + 150){
     vx=-vx
 }
 else if (dx<0) vx=-vx
 dx = dx+vx}  

 function TarynE(){
    c.clearRect(0,0,innerWidth,innerHeight)
    c.fillStyle = 'red'
    c.fillRect (dx,dy,50,50)
} 

// Para pfavor
    function TarynP(){  
        c.clearRect(0,0,innerWidth,innerHeight)
        c.fillStyle = 'red'
        c.fillRect (dx,dy,50,50)}
 
// Teclas S e W
document.addEventListener("keydown", function(e){
    if (e.key == "s"){
    console.log (e.key)
    vy=0
    vy=2
    TarynS()
    oponente()
    dyname()
    }
})
document.addEventListener("keyup", function(e){
    if (e.key == "s"){
        vy=0
        vx=0
        TarynP()
        Vo=-0.2
        oponente()
        dyname()
     }
    })
document.addEventListener("keydown", function(e){
    if (e.key == "w"){
    console.log (e.key)
    vy=0
    vy=-2
    TarynW()
    oponente()
    dyname()
    }
})
document.addEventListener("keyup", function(e){
    if (e.key == "w"){
        vy=0
        vx=0
        TarynP()
        Vo=0.2
        oponente()
        dyname()
     }
    })

// Teclas A e D 
document.addEventListener("keydown", function(e){
    if (e.key == "a"){
    console.log (e.key)
    vx=0
    vx=-2
    TarynE()
    oponente()
    dyname()
    }
})
document.addEventListener("keyup", function(e){
    if (e.key == "a"){
        vy=0
        vx=0
        TarynP()
        Vo=-0.2
        oponente()
        dyname()
     }
    })
document.addEventListener("keydown", function(e){
    if (e.key == "d"){
    console.log (e.key)
    vx=0
    vx=2
    TarynD()
    oponente()
    dyname()
    }
}) 
document.addEventListener("keyup", function(e){
    if (e.key == "d"){
        vy=0
        vx=0
        TarynP()
        Vo=0.2
        oponente()
        dyname()
     }
    })
//colisão
if (dy<innerHeight + 50) {
    dx=200
    dy=200
}
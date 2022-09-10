let sec = 00 //variável para os segundos
let min = 00 //variável para os minutos
let int //variável usada para gravar o intervalo de pausa e parar

//Configura o botão iniciar
function iniciar(){
    int=setInterval(counter,1000)
}
//Configura o botão pausar
function pausar(){
    clearInterval(int)
    document.getElementById('counter')
}
//Configura o botão parar, zerando o cronômetro
function parar(){
    clearInterval(int)
    sec=0
    min=0
    document.getElementById('counter').innerText='00:00'
}
//Adiciona o dígito 0 quando os segundos são menos que 10
function digitozero(digito){
    if(digito<10){
        return('0'+digito)
    }
    else{
        return(digito)
    }
}
//Adiciona 1 segundo e após completar 60 adiciona 1 minuto
function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('counter').innerText=digitozero(min)+':'+digitozero(sec)
}





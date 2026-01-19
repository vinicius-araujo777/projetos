let hora = document.getElementById('hora')
let minuto = document.getElementById('minuto')
let segundo = document.getElementById('segundo')
rodando = false
let h = 0
let m = 0
let s = 0


function comecar(){
    if(rodando == true){
        alert('O cronometro ja esta rodando!')
    }else{
        rodando = true
        tempo = setInterval(() =>{
            s += 1
            if(s == 60){
                s = 0
                m += 1
            }
            if(m == 60){
                m = 0
                h += 1
            }

            
            if(s < 10){
                segundo.innerHTML = `:0${s}`
            }else{
                segundo.innerHTML = `:${s}`
            }

            if(m < 10){
                minuto.innerHTML = `:0${m}`
            }else{
                minuto.innerHTML = `:${m}`
            }

            if(h < 10){
                hora.innerHTML = `0${h}`
            }else{
                hora.innerHTML = `${h}`
            }

        },1000)
    }
}


function parar(){
    if(rodando == false){
        alert('O cronometro ja esta parado!')
    }else{
        rodando = false
        clearInterval(tempo)
    }
}


function reiniciar(){
    clearInterval(tempo)
    h = 0
    m = 0
    s = 0
    hora.innerHTML = `00`
    minuto.innerHTML = `:00`
    segundo.innerHTML = `:00`
    rodando = false
}

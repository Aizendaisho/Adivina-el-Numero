'use strict';
const check = document.querySelector('.check')
const again = document.querySelector('.again')
const inputGuess = document.querySelector('.guess')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')

let juego = true
let conteo = 20
let scoreTotal = 0
score.textContent = conteo
highscore.textContent = scoreTotal

const numeroRamdon = () =>{
    const numRam = Math.floor(Math.random()*20)+1
    return numRam
}
let numeroRamdom = numeroRamdon()
check.addEventListener('click',()=>{

    if(juego === false){
        message.textContent = "Empieza otro juego"
    }else if(conteo ===0){   
        juego = false   
        message.textContent = "Has perdido, empieza otro juego"
    }else if(inputGuess.value > 20 || !inputGuess.value){      
        message.textContent = "Escoge entre 1 a 20"
    }else if(inputGuess.value>numeroRamdom){
        conteo--
        score.textContent = conteo
        message.textContent = 'Muy Alto'

    }else if(inputGuess.value<numeroRamdom){
        conteo--
        score.textContent = conteo
        message.textContent = 'Muy bajo'

    }else if(inputGuess.value == numeroRamdom){
        message.textContent = 'felicidades ganaste'
        number.textContent = `${numeroRamdom}`
        scoreTotal += conteo
        highscore.textContent = scoreTotal
        document.body.classList.add("win")
        juego = false       
    }
})
again.addEventListener('click',()=>{
    number.textContent = '?'
    inputGuess.value = ''
    numeroRamdom = numeroRamdon()
    conteo = 0
    score.textContent = conteo = 20
    message.textContent =`Start guessing...`
    document.body.classList.remove("win")
    juego = true
})



import './chart.js';
import { setImage, setPokemon } from "./pokedex.js";

const $form = document.querySelector('#form')
const $inputId = document.querySelector('#input-id')
const $next = document.querySelector('#next-pokemon')
const $prev = document.querySelector('#prev-pokemon')
const $nextImage = document.querySelector('#next-image')
const $prevImage = document.querySelector('#prev-image')
const $randomButton = document.querySelector('#random-button')
const $pokedex = document.querySelector('#pokedex')

$form.addEventListener('submit', handleSubmit)
$next.addEventListener('click', handleNextPokemon)
$prev.addEventListener('click', handlePrevPokemon)
$nextImage.addEventListener('click', handleNextImage)
$prevImage.addEventListener('click', handlePrevImage)
$randomButton.addEventListener('click', handleRandomButton)

let activePokemon = null

async function handleSubmit(event) {
    event.preventDefault()
    $pokedex.classList.add('is-open')
    const form = new FormData($form)
    const id = form.get('id')
    activePokemon = await setPokemon(id)
}

async function handleNextPokemon() {
    const id = (activePokemon === null || activePokemon.id === 898) ? 1 : activePokemon.id + 1
    $inputId.value = `${id}`
    activePokemon = await setPokemon(id)    
}

async function handlePrevPokemon() {
    const id = (activePokemon === null || activePokemon.id === 1) ? 898 : activePokemon.id - 1
    $inputId.value = `${id}`
    activePokemon = await setPokemon(id)  
}

let activeSprite = 0

function handleNextImage() {
    if(activePokemon === null) return false
    if(activeSprite >= activePokemon.sprites.length - 1) {
        activeSprite = 0
        return setImage(activePokemon.sprites[activeSprite])
    }
    activeSprite++
    return setImage(activePokemon.sprites[activeSprite])
}

function handlePrevImage() {
    if(activePokemon === null) return false
    if(activeSprite <= 0) {
        activeSprite = activePokemon.sprites.length - 1
        console.log(activeSprite)
        return setImage(activePokemon.sprites[activeSprite])
    }
        activeSprite--
        return setImage(activePokemon.sprites[activeSprite])
}

let randomNumber = 0
const randomNumberMax = 898
async function handleRandomButton() {
    randomNumber = Math.floor(Math.random() * randomNumberMax)
    $inputId.value = `${randomNumber}`
    activePokemon = await setPokemon(randomNumber)
}
let cardBody = document.querySelector('.card-text')
const pokeLoad = $('#pokeLoad')
pokeLoad.on('click', function () {
    $('.card-title').empty()
    $('.card-text').empty()
    $.get(`https://pokeapi.co/api/v2/pokemon?limit=151%27`, (data) => {
        // console.log(data)
        let randomNumber = Math.floor(Math.random() * (151 - 1) + 1)
        let $cardTitle = document.querySelector('.card-title')
        $cardTitle.innerText =
            `${data.results[randomNumber].name}`.toUpperCase()
        let photo = (document.querySelector(
            '#photo'
        ).src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${randomNumber}.svg`)
        $.get(`${data.results[randomNumber].url}`, (data1) => {
            // console.log(data1)
            for (let ability of data1.abilities) {
                let abilities = ability.ability.name
                // let result = abilities.join(' ')
                const pokeInfo = ` ${abilities} | `
                cardBody.append(`${pokeInfo}`)
                // console.log(ability)
            }
        })
    })
})

let cardBody1 = document.querySelector('.card-text1')
pokeLoad.on('click', function () {
    $('.card-title1').empty()
    $('.card-text1').empty()
    $.get(`https://pokeapi.co/api/v2/pokemon?limit=151%27`, (data) => {
        // console.log(data)
        let randomNumber = Math.floor(Math.random() * (151 - 1) + 1)
        let $cardTitle = document.querySelector('.card-title1')
        $cardTitle.innerText =
            `${data.results[randomNumber].name}`.toUpperCase()
        let photo = (document.querySelector(
            '#photo1'
        ).src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${randomNumber}.svg`)
        $.get(`${data.results[randomNumber].url}`, (data1) => {
            // console.log(data1)
            for (let ability of data1.abilities) {
                let abilities = ability.ability.name
                // let result = abilities.join(' ')
                const pokeInfo = ` ${abilities} | `
                cardBody1.append(`${pokeInfo}`)
                // console.log(ability)
            }
        })
    })
})
// console.log()
// $.get(`https://pokeapi.co/api/v2/pokemon/2/`, (data) => {
//     // for (let pokemon of data) {
//     //     console.log(pokemon.name)
//     // }
//     let $cardTitle = document.querySelector('.card-title1')
//     console.log(data.stats[1].stat.name)
//     console.log($cardTitle)
// })

function winner() {
    let randomNumber = Math.floor(Math.random() * (151 - 1) + 1)

    if (randomNumber % 2 == 0) {
        document.querySelector('#photoW').src = 'images.jpg'
        document.querySelector('.card-title0').innerText =
            document.querySelector('#card-title').innerText
        // console.log(document.querySelector('#card-title').innerText)
    } else {
        document.querySelector('.card-title0').innerText =
            document.querySelector('.card-title1').innerText
    }
}

pokeLoad.on('click', function () {
    setTimeout(function () {
        winner()
    }, 1000)
})

const $bjbtn = $('#returnHome')
$(document).ready(function (event) {
    // Prevent form submission on button click
    $bjbtn.click(function (event) {
        event.preventDefault()
        // console.log('hello')
        // Your code logic here
        // Redirect to a new HTML page
        window.location.href = 'index.html'
    })
})

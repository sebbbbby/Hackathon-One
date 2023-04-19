const $submit = $('#submit')
const results = $('#results')
$submit.click(function (event) {
    results.empty()
    event.preventDefault()
    const $text = $('#textBox').val()
    const $carContainer = $('#carContainer')
    const $spaceMe = $('#spaceMe')
    $carContainer.remove()
    $spaceMe.remove()
    $.get(
        `https://api.openbrewerydb.org/v1/breweries?by_city=${$text}`,
        (data) => {
            let latSum = 0
            let longSum = 0
            for (let beer of data) {
                console.log(beer)
                const lat = data[1].latitude
                const long = data[1].longitude
                latSum = lat
                longSum = long
                const name = beer.name
                const genre = beer.genres
                const summary = beer.city
                const url = beer.website_url
                const state = beer.state
                const type = beer.brewery_type
                const card = `<div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text"><b>City:</b> ${summary} <b>State:</b> ${state} <b>Brewery Type:</b> ${type} </p>
                      <a href="${url}" class="btn btn-primary">More</a>
                    </div>
                  </div>
                </div>`

                $('#results').append($(`${card}`))
            }
            var greenIcon = L.icon({
                iconUrl:
                    'png-clipart-beer-pub-drink-alcohol-mug-8-bit-pixel.png',
                shadowUrl: '',

                iconSize: [15, 30], // size of the icon

                iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
                className: 'hello',
            })
            const latAvg = latSum /// data.length
            const longAvg = longSum /// data.length
            var map = L.map('map').setView([latAvg, longAvg], 12)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">seb</a>',
            }).addTo(map)
            var mapElement = document.getElementById('map')
            mapElement.style.height = '60vh'
            mapElement.style.width = '60vh'
            mapElement.style.float = 'right'
            mapElement.style.border = '5px #7C96AB solid'
            mapElement.style.borderRadius = '10%'
            // mapElement.setAttribute('id', 'oldMap')
            for (let beer of data) {
                let lat = parseFloat(beer.latitude)
                let long = parseFloat(beer.longitude)

                var marker = L.marker(
                    [lat, long],
                    { icon: greenIcon },
                    { title: 'hello' }
                ).addTo(map)
            }
        }
    )
})

//actual get request for the catfact api. adding innter text to the existing p tags
$.get(`https://catfact.ninja/fact`, (data) => {
    const cardText = document.querySelector('#cardOne')
    // const catFact = cardText.getElementsByTagName('p')
    cardText.innerText = `${data.fact}`
    console.log(catFact)
    console.log(`${data.fact}`)
})
$.get(`https://catfact.ninja/fact`, (data) => {
    const cardText = document.querySelector('#cardTwo')
    // const catFact = cardText.getElementsByTagName('p')
    cardText.innerText = `${data.fact}`
    console.log(catFact)
    console.log(`${data.fact}`)
})
$.get(`https://catfact.ninja/fact`, (data) => {
    const cardText = document.querySelector('#cardThree')
    // const catFact = cardText.getElementsByTagName('p')
    cardText.innerText = `${data.fact}`
    console.log(catFact)
    console.log(`${data.fact}`)
})
//functions to refresh new cat facts
const r1 = $('#refresh1b')

r1.click(function () {
    $.get(`https://catfact.ninja/fact`, (data) => {
        const cardText = document.querySelector('#cardOne')
        // const catFact = cardText.getElementsByTagName('p')
        cardText.innerText = `${data.fact}`
    })
})
const r2 = $('#refresh2b')
r2.click(function () {
    $.get(`https://catfact.ninja/fact`, (data) => {
        const cardText = document.querySelector('#cardTwo')
        // const catFact = cardText.getElementsByTagName('p')
        cardText.innerText = `${data.fact}`
    })
})
const r3 = $('#refresh3b')
r3.click(function () {
    $.get(`https://catfact.ninja/fact`, (data) => {
        const cardText = document.querySelector('#cardThree')

        // const catFact = cardText.getElementsByTagName('p')
        cardText.innerText = `${data.fact}`
    })
})
const $bjbtn = $('#bjbtn')
$(document).ready(function (event) {
    // Prevent form submission on button click
    $bjbtn.click(function (event) {
        event.preventDefault()
        // console.log('hello')
        // Your code logic here
        // Redirect to a new HTML page
        window.location.href = 'index2.html'
    })
})

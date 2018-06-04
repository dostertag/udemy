const punkURL = 'https://api.punkapi.com/v2/beers/random';
const beerInfo = document.querySelector('.beer-info');
const beerImage = document.querySelector('.beer-img');




var HttpClient = function() {
    this.get = function(punkURL, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", punkURL, true );   
        anHttpRequest.responseType = 'text';         
        anHttpRequest.send( null );

        anHttpRequest.onload = function() {
            var beerText = anHttpRequest.response;
            var beer = JSON.parse(beerText);
            buildSingleBeer(beer);
        }
    }
}

function buildSingleBeer(jsonObj) {
    let currentBeer = jsonObj[0];
    let cBeerInfo = '';
    let cBeerPair = '';

    console.log(currentBeer);

    let img = new Image();
    img.src = currentBeer.image_url;
    beerImage.appendChild(img);

    cBeerInfo += `<h2>${currentBeer.name}</h2>` +
                    `<p class="bright">${currentBeer.tagline}</p>` +
                    `<p><span class="bright">Description: </span> ${currentBeer.description}</p>` +
                    `<p><span class="bright">Tips: </span> ${currentBeer.brewers_tips}</p>` +
                    `<h3 class="bright">Food Paring:</h3>`;


    // console.log(currentBeer.food_pairing.length);
    for (let i = 0; i < currentBeer.food_pairing.length; i++) {
        // const element = array[i];
        cBeerPair = cBeerPair + `<li>${currentBeer.food_pairing[i]}</li>`
    }
    cBeerInfo += `<ul>${cBeerPair}</ul>`;
    
    beerInfo.innerHTML = `${cBeerInfo}`;
}

var client = new HttpClient();
client.get(punkURL, function(response) {
    // do something with response
    // console.log('calling buildSingleBeer');
    // buildSingleBeer(response);
});
var restaurantList = document.querySelector(".rest-ul");
function getApi() {
    var access_token = "Bearer _l5f7C7BDfq3ksCHSP4VGgHaTrUQoYkCxJRAKg1Um2gqJyxYHChBz_dB-vR4Gvlrzk00YQcsfqHemlq0aJ0EWtMJ5dEDoh436BSFUkpn-bZlV1ABayxGf1K3n-b9YXYx";
    var url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=37.6849084&longitude=-120.9611351?Authorization=' + access_token;
  
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': "https://gasomer75.github.io/gotta-testit-here/",
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache'
        },
        mode: 'no-cors'
    })
    .then(function(response) {
    console.log(response.json);
    return response.json();
    })
    .then(function(data) {
    for (var i = 0; i < 5; i++) {
        var listItem = document.createElement('li');
        console.log(data[i]);
    
        listItem.textContent = data[i];

        restaurantList.appendChild(listItem);
    }
    })
}
getApi();
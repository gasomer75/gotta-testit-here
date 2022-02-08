
function getApi() {
    var url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=37.6849084&longitude=-120.9611351';
  
    var myInit = { method: 'GET',
                  headers: {
                      'Access-Control-Allow-Origin': 'https://gasomer75.github.io/gotta-testit-here/',
                      'Authorization': 'Bearer _l5f7C7BDfq3ksCHSP4VGgHaTrUQoYkCxJRAKg1Um2gqJyxYHChBz_dB-vR4Gvlrzk00YQcsfqHemlq0aJ0EWtMJ5dEDoh436BSFUkpn-bZlV1ABayxGf1K3n-b9YXYx',
                      'Accept': 'application/json',
                      'Accept-Encoding': 'gzip, deflate, br',
                      'Connection': 'keep-alive',
                      'Cache-Control': 'no-cache'
                    },
                  mode: 'no-cors',
                  };
  
    var myRequest = new Request(url);
  
    fetch(myRequest, myInit)
          .then(function(response) {
          console.log(response);
        });
  }
  getApi();

(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

var userForm = document.querySelector("#user-form");

 function userChoices() {   
    event.preventDefault();
    var zipEntry = document.getElementById("loc-input");
    var zipInput = zipEntry.value.trim();
    // var chosenLoc = "&location=" + locInput;
    const zipVal = "&location=" + zipInput;
    const access_token = "_l5f7C7BDfq3ksCHSP4VGgHaTrUQoYkCxJRAKg1Um2gqJyxYHChBz_dB-vR4Gvlrzk00YQcsfqHemlq0aJ0EWtMJ5dEDoh436BSFUkpn-bZlV1ABayxGf1K3n-b9YXYx";
    const url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&limit=10";
    
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + access_token);

    fetch(url+zipVal, {
    headers: myHeaders,
    mode: "no-cors"
    }).then((res) => {
    return res.json();
    }).then((json) => {
    console.log(json);
    });
};


userForm.addEventListener("submit", userChoices);





// FINALLY - Working fetch for Yelp's API - do not change (except url for variable addition) *********************
// const access_token = "_l5f7C7BDfq3ksCHSP4VGgHaTrUQoYkCxJRAKg1Um2gqJyxYHChBz_dB-vR4Gvlrzk00YQcsfqHemlq0aJ0EWtMJ5dEDoh436BSFUkpn-bZlV1ABayxGf1K3n-b9YXYx";

// let myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer " + access_token);

// fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&limit=10&location=Sacramento", {
//   headers: myHeaders 
// }).then((res) => {
//   return res.json();
// }).then((json) => {
//   console.log(json);
// });
// End of working fetch statement - do not change ********************************************************************
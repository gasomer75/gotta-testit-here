

const access_token = "_l5f7C7BDfq3ksCHSP4VGgHaTrUQoYkCxJRAKg1Um2gqJyxYHChBz_dB-vR4Gvlrzk00YQcsfqHemlq0aJ0EWtMJ5dEDoh436BSFUkpn-bZlV1ABayxGf1K3n-b9YXYx";

let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + access_token);

fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=bars&limit=50&location=New York", {
  headers: myHeaders 
}).then((res) => {
  return res.json();
}).then((json) => {
  console.log(json);
});

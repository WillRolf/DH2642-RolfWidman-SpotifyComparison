import { createSimpleExpression } from "@vue/compiler-core";
import {BASE_URL, API_KEY} from "../src/apiConfig.js";

const options = {
	method: 'GET',
	headers: {
		'X-Mashape-Key': API_KEY,
		'X-rapidapi-Host': 'spotify23.p.rapidapi.com'
	}
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function treatHTTPResponseACB(response){ 
    if (!response.ok) throw new Error("API problem "+response.status); {
        return response.json()};
}

function transformSearchResultACB(data){
  if (data.artists){ return data.artists.items }
  if (data.tracks){ return data.tracks.items }
}

function getArtistDetails(id){
  sleep(350);
  return fetch(BASE_URL+'artists/?ids='+id, options)
    .then(treatHTTPResponseACB);
}

function getTrackDetails(id){
  sleep(350);
  return fetch(BASE_URL+'tracks/?ids='+id, options)
    .then(treatHTTPResponseACB);
}

function searchSpotify(params){
  sleep(350);
  return fetch(BASE_URL+'search/?q=' + params.query + '&type=' + params.type, options)
    .then(treatHTTPResponseACB).then(transformSearchResultACB);
}

export {getTrackDetails, getArtistDetails, searchSpotify};
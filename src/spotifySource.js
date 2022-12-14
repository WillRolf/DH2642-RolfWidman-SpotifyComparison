import {BASE_URL, API_KEY} from "../src/apiConfig.js";

const options = {
	method: 'GET',
	headers: {
		'X-Mashape-Key': API_KEY,
		'X-rapidapi-Host': 'spotify23.p.rapidapi.com'
	}
};

function treatHTTPResponseACB(response){ 
    if (!response.ok) throw new Error("API problem "+response.status); {
      console.log(response)
        return response.json()};
}

function transformSearchResultACB(data){
  if (data.artists){ return data.artists.items }
  if (data.tracks){ return data.tracks.items }
}

function getArtistDetails(id){
  return fetch(BASE_URL+'artists/?ids='+id, options)
    .then(treatHTTPResponseACB);
}

function getTrackDetails(id){
  return fetch(BASE_URL+'tracks/?ids='+id, options)
    .then(treatHTTPResponseACB).then(t => t.tracks);
}

function searchSpotify(params){
  return fetch(BASE_URL+'search/?q=' + params.query + '&type=' + params.type, options)
    .then(treatHTTPResponseACB).then(transformSearchResultACB);
}

export {getTrackDetails, getArtistDetails, searchSpotify};
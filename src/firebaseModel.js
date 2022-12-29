import spotifyModel from "./SpotifyModel.js";
import { getTrackDetails } from "./SpotifySource.js";
import firebaseConfig from "./firebaseConfig.js";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth"

// Initialise firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
spotifyModel.addObserver(observePayloadACB)
console.log("firebase initialized")


function observerRecap(model) {
    function checkPayload(payload) {
        console.log("payload:");
        console.log(payload);
    }
    model.addObserver(checkPayload)
}

function register(user){
    function validateEmailCB(){ return (/^[^@]+@\w+(\.\w+)+\w$/.test(user.email)) } //found on https://masteringjs.io/tutorials/fundamentals/email-validation
    function validatePasswordCB(){ return user.password > 6 }
    function createUserCB(){ 
        var u = auth.currentUser;
        var user_data = {
            email: user.email,
            playlist: user.playlist
        }
        database.ref().child('users/' + u.uid).set(user_data);
    }
    if (!validateEmailCB){ return "Invalid Email" }
    if (!validatePasswordCB){ return "Password too short! Need at least 6 characters!" }
    auth.createUserWithEmailAndPassword(user.email, user.password).then(createUserCB).catch(function(error){console.log(error)});
    window.location.hash="#home"
}

function login(user){
    function loginUserCB(){
        /*
        var u = auth.currentUser;
        var user_data = {
            playlist: user.playlist
        }
        database.ref().child('users/' + u.uid).update(user_data);*/
    }
    auth.signInWithEmailAndPassword(user.email, user.password).then(loginUserCB).catch(function(error){console.log(error)})
    window.location.hash="#home"
}



function firebaseModelPromise() {
    function makeBigPromiseACB(firebaseData) {
        if (!firebaseData.val() || Object.keys(firebaseData.val()).length === 0) { return spotifyModel; }
        const songPromiseArray = Object.keys(firebaseData.val().songs || []).map(makeSongPromiseCB);
        function createModelACB(songArray){
            return spotifyModel;
        }
        return Promise.all(songPromiseArray).then(createModelACB);
    }
    function makeSongPromiseCB(songId){
        return getTrackDetails(songId);
    }
    return firebase.database().ref().once("value").then(makeBigPromiseACB);
}


function observePayloadACB(payload) {
    console.log(payload)
    var u = auth.currentUser;
    if (!payload || payload<0 ) { return; }

    else if (payload.addSong) {
        console.log("going to add song to firebase")
        console.log("payload:")
        console.log(payload)
        database.ref().child('users/' + u.uid + '/playlist/' + payload.addSong.id).set(payload.addSong.name);
    }
    else if (payload.removeFromPlaylist) {
        database.ref().child('users/' + u.uid + '/playlist/' + payload.removeFromPlaylist.id).set(null)
    }
}

function updateFirebaseFromModel(model) {
    model.addObserver(observePayloadACB)
    return;
}

function updateModelFromFirebase(model) {
    var u = auth.currentUser;
    function songAddedInFirebaseACB(firebaseData){
        function responseSongDataACB(songId) {
            //console.log("songId:")
            //console.log(songId)
            model.addToPlaylist(songId);
            /*
            const delay = ms => Promise(resolve => setTimeout(resolve, ms))
            (async function looper(){
              await delay(350);
            })();*/
        }
        /*
        function fetchSongDataBasedOnID(songId) {
            console.log("songId: ")
            console.log(songId)
            return model.songs.find(songId);
        }*/
        console.log(Object.keys(firebaseData.val()))
        Object.keys(firebaseData.val()).map(responseSongDataACB);
    }
    database.ref().child('users/' + u.uid + '/playlist').on("value", songAddedInFirebaseACB);

    function songRemovedInFirebaseACB(firebaseData){ model.removeFromPlaylist({ id: firebaseData.key });}
    database.ref().child('users/' + u.uid + '/playlist').on("value", songRemovedInFirebaseACB);
    return;
}
export {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, register, login};
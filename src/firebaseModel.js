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
    var err = false
    if (!validateEmailCB){ alert("Invalid Email") }
    if (!validatePasswordCB){ alert("Password too short! Need at least 6 characters!") }
    function resolveErrorCB(){ if (!err){ window.location.hash="#home" } }
    auth.createUserWithEmailAndPassword(user.email, user.password).then(createUserCB).catch(function(error){alert(error.message); err = true}).then(resolveErrorCB);
}

function login(user){
    var err = false;
    function loginUserCB(){
        /*
        var u = auth.currentUser;
        var user_data = {
            playlist: user.playlist
        }
        database.ref().child('users/' + u.uid).update(user_data);*/
    }
    function resolveErrorCB(){ if (!err){ window.location.hash="#home" } }
    auth.signInWithEmailAndPassword(user.email, user.password).then(loginUserCB).catch(function(error){alert(error.message); err = true}).then(resolveErrorCB)
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
    function songAddedInFirebaseACB(firebaseData){
        function responseSongDataACB(songIds) {
            model.addToPlaylist(songIds);
        }
        console.log(Object.keys(firebaseData))
        responseSongDataACB(Object.keys(firebaseData).join(","));
    }
    function getUserDataCB(uid){ 
        database.ref('users/' + uid).once("value", function(snapshot){const userData = snapshot.val();songAddedInFirebaseACB(userData.playlist)});
    }
    auth.onAuthStateChanged(user => {if(user){ getUserDataCB(user.uid) }})

    if (auth.currentUser){
        var u = auth.currentUser;
        function songRemovedInFirebaseACB(firebaseData){ model.removeFromPlaylist({ id: firebaseData.key });}
        database.ref().child('users/' + u.uid + '/playlist').on("value", songRemovedInFirebaseACB);
    }

    return;
}
export {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, register, login};
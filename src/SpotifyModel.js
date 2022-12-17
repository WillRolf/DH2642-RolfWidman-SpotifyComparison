import {searchSpotify, getSongDetails} from "../src/spotifySource.js";
import resolvePromise from "../src/resolvePromise.js";

class SpotifyModel{
    constructor(songArray=[]){
        this.observers = [];
        this.songs= songArray;
        this.leftSong = null;
        this.rightSong = null;
        this.searchResultsPromiseState= {};
        this.searchParams= {};
        this.leftSongPromiseState= {};
        this.rightSongPromiseState= {};
    }

    addToPlaylist(songToAdd){
        if (!this.songs.some(song => song.data.id === songToAdd.data.id)){
            this.songs= [...this.songs, songToAdd];
            this.notifyObservers({addSong: songToAdd});
        }
    }
    
    removeFromPlaylist(songToRemove){
        function hasSameIdCB(song){
            return song.data.id !== songToRemove.data.id;
        }
        function findSongCB(song){
            return song.data.id === songToRemove.data.id;
        }
        if (this.songs.find(findSongCB)){
            this.songs= this.songs.filter(hasSameIdCB);
            this.notifyObservers({removeSongs: songToRemove});
        }
    }

    setLeftSong(id){
        function notifyACB(){ this.notifyObservers(); }
        if (id === undefined){ return; }
        if (this.leftSong === id){ return; }
        this.leftSong = id
        this.notifyObservers({songID: id});
        resolvePromise(getSongDetails(id), this.leftSongPromiseState, notifyACB.bind(this));
    }

    setRightSong(id){
        function notifyACB(){ this.notifyObservers(); }
        if (id === undefined){ return; }
        if (this.rightSong === id){ return; }
        this.rightSong = id
        this.notifyObservers({songID: id});
        resolvePromise(getSongDetails(id), this.rightSongPromiseState, notifyACB.bind(this));
    }

    setSearchQuery(q){
        this.searchParams.query= q;
    }

    setSearchType(t){
        this.searchParams.type= t;
    }

    doSearch(queryAndType){
        function notifyACB(){ this.notifyObservers(); }
        resolvePromise(searchSpotify(queryAndType), this.searchResultsPromiseState, notifyACB.bind(this));
    }

    addObserver(callback){
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback){
        function isSameCallbackCB(cb){ return cb !== callback; }
        this.observers = this.observers.filter(isSameCallbackCB);
    }

    notifyObservers(payload){
        function invokeObserverCB(obs){ obs(payload); }
        try{ this.observers.forEach(invokeObserverCB); }
        catch(err){ console.error(err); }
    }
}

export default SpotifyModel;
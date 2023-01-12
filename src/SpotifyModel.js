import {searchSpotify, getTrackDetails, getArtistDetails} from "../src/spotifySource.js";
import resolvePromise from "../src/resolvePromise.js";

class SpotifyModel{
    constructor(songArray=[]){
        this.observers = [];
        this.songs = songArray;
        this.leftCompare = null;
        this.rightCompare = null;
        this.searchResultsPromiseState = {};
        this.searchParams = {};
        this.leftPromiseState = {};
        this.rightPromiseState = {};
    }

    addToPlaylist(songsToAdd){
        getTrackDetails(songsToAdd).then((response) =>
            response.map((song) => {
                if (!this.songs.some(s => s.id === song.id)){
                    this.songs=[...this.songs, song];
                    this.notifyObservers({addSong: song});
                }
            })
        )
    }
    
    removeFromPlaylist(songToRemove){
        function hasSameIdCB(song){
            return song.id !== songToRemove.id;
        }
        function findSongCB(song){
            return song.id === songToRemove.id;
        }
        if (this.songs.find(findSongCB)){
            this.songs= this.songs.filter(hasSameIdCB);
            this.notifyObservers({removeSongs: songToRemove});
        }
    }

    setLeftSong(result){
        function notifyACB(){ this.notifyObservers(); }
        if (!result){ return; }

        if (!result.name){
            var id = String(result.uri).replace("spotify:artist:","");
            if (this.leftCompare === id){ return; }
            this.leftCompare = id
            this.notifyObservers({songID: id});
            resolvePromise(getArtistDetails(id), this.leftPromiseState, notifyACB.bind(this));
        }
        else{ 
            var id = result.id;
            if (this.leftCompare === id){ return; }
            this.leftCompare = id
            this.notifyObservers({songID: id});
            resolvePromise(getTrackDetails(id), this.leftPromiseState, notifyACB.bind(this));
        }
    }

    setRightSong(result){
        function notifyACB(){ this.notifyObservers(); }
        if (!result){ return; }
        
        if (!result.name){
            var id = String(result.uri).replace("spotify:artist:","");
            if (this.rightCompare === id){ return; }
            this.rightCompare = id
            this.notifyObservers({songID: id});
            resolvePromise(getArtistDetails(id), this.rightPromiseState, notifyACB.bind(this));
        }
        else{ 
            var id = result.id;
            if (this.rightCompare === id){ return; }
            this.rightCompare = id
            this.notifyObservers({songID: id});
            resolvePromise(getTrackDetails(id), this.rightPromiseState, notifyACB.bind(this));
        }
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
        console.log("observers notified")
    }
}

const spotifyModel = new SpotifyModel();
export default spotifyModel;
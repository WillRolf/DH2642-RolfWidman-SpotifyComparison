import DetailsView from "../views/detailsView";
import promiseNoData from "../views/promiseNoData";

export default
function Details(props){


    function firstSongInPlaylistCB(firstSong) { return firstSong.id === props.model.firstSong }
    function secondSongInPlaylistCB(secondSong) { return secondSong.id === props.model.secondSong }

    function onAddToPlaylistACB() { 
        firstSong?props.model.addToPlaylist(props.model.firstSongPromiseState.data):secondSong?props.model.addToPlaylist(props.model.secondSongPromiseState.data):""; }

    return promiseNoData(props.model.firstSongPromiseState) && promiseNoData(props.model.secondSongPromiseState) ||
                <DetailsView firstSongData={props.model.firstSongPromiseState.data}
                            secondSongData={props.model.secondSongPromiseState.data}
                            isFirstSongInPlaylist={props.model.songs?props.model.songs.filter(firstSongInPlaylistCB).length > 0?true:false:false}
                            isSecondSongInPlaylist={props.model.songs?props.model.songs.filter(secondSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
}

/*
    function firstSongDetails(props){
        function firstSongInPlaylistCB(firstSong){ return firstSong.id === props.model.firstSong }
        function onAddToPlaylistACB(){ 
            props.model.addToPlaylist(props.model.firstSongPromiseState.data); }
        return promiseNoData(props.model.firstSongPromiseState) || 
                <DetailsView firstSongData={props.model.firstSongPromiseState.data}
                            isfirstSongInPlaylist={props.model.songs?props.model.songs.filter(firstSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
        }
    function secondSongDetails(props){
        function secondSongInPlaylistCB(secondSong){ return secondSong.id === props.model.secondSong }
        function onAddToPlaylistACB(){ 
            props.model.addToPlaylist(props.model.secondSongPromiseState.data); }
        return promiseNoData(props.model.secondSongPromiseState) || 
                <DetailsView secondSongData={props.model.secondSongPromiseState.data}
                            isSecondSongInPlaylist={props.model.songs?props.model.songs.filter(secondSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
        }
};
*/
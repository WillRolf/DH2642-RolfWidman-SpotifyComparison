import DetailsView from "../views/detailsView";
import promiseNoData from "../views/promiseNoData";

export default
function Details(props){


    function leftSongInPlaylistCB(leftSong) { return leftSong.id === props.model.leftSong }
    function rightSongInPlaylistCB(rightSong) { return rightSong.id === props.model.rightSong }

    function onAddToPlaylistACB() { 
        leftSong?props.model.addToPlaylist(props.model.leftSongPromiseState.data):rightSong?props.model.addToPlaylist(props.model.rightSongPromiseState.data):""; }

    return promiseNoData(props.model.leftSongPromiseState) && promiseNoData(props.model.rightSongPromiseState) ||
                <DetailsView leftSongData={props.model.leftSongPromiseState.data}
                            rightSongData={props.model.rightSongPromiseState.data}
                            isLeftSongInPlaylist={props.model.songs?props.model.songs.filter(leftSongInPlaylistCB).length > 0?true:false:false}
                            isRightSongInPlaylist={props.model.songs?props.model.songs.filter(rightSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
}

/*
    function leftSongDetails(props){
        function leftSongInPlaylistCB(leftSong){ return leftSong.id === props.model.leftSong }
        function onAddToPlaylistACB(){ 
            props.model.addToPlaylist(props.model.leftSongPromiseState.data); }
        return promiseNoData(props.model.leftSongPromiseState) || 
                <DetailsView leftSongData={props.model.leftSongPromiseState.data}
                            isleftSongInPlaylist={props.model.songs?props.model.songs.filter(leftSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
        }
    function rightSongDetails(props){
        function rightSongInPlaylistCB(rightSong){ return rightSong.id === props.model.rightSong }
        function onAddToPlaylistACB(){ 
            props.model.addToPlaylist(props.model.rightSongPromiseState.data); }
        return promiseNoData(props.model.rightSongPromiseState) || 
                <DetailsView rightSongData={props.model.rightSongPromiseState.data}
                            isRightSongInPlaylist={props.model.songs?props.model.songs.filter(rightSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
        }
};
*/
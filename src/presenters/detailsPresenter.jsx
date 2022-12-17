import DetailsView from "../views/detailsView";
import promiseNoData from "../views/promiseNoData";

export default
function Details(props){
    function leftSongInPlaylistCB(song) { return song.data.id === props.model.leftCompare }
    function rightSongInPlaylistCB(song) { return song.data.id === props.model.rightCompare }
    function onAddToPlaylistACB() { 
        leftCompare?props.model.addToPlaylist(props.model.leftPromiseState.data):rightCompare?props.model.addToPlaylist(props.model.rightPromiseState.data):""; }
    return promiseNoData(props.model.leftPromiseState) && promiseNoData(props.model.rightPromiseState) ||
                <DetailsView leftData={props.model.leftPromiseState.data?
                                        props.model.leftPromiseState.data.artists?
                                        props.model.leftPromiseState.data.artists[0]:
                                        props.model.leftPromiseState.data.tracks[0]:null}
                            rightData={props.model.rightPromiseState.data?
                                        props.model.rightPromiseState.data.artists?
                                        props.model.rightPromiseState.data.artists[0]:
                                        props.model.rightPromiseState.data.tracks[0]:null}
                            isLeftSongInPlaylist={props.model.songs?props.model.songs.filter(leftSongInPlaylistCB).length > 0?true:false:false}
                            isRightSongInPlaylist={props.model.songs?props.model.songs.filter(rightSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
}

/*
    function leftSongDetails(props){
        function leftSongInPlaylistCB(leftCompare){ return leftCompare.id === props.model.leftCompare }
        function onAddToPlaylistACB(){ 
            props.model.addToPlaylist(props.model.leftPromiseState.data); }
        return promiseNoData(props.model.leftPromiseState) || 
                <DetailsView leftSongData={props.model.leftPromiseState.data}
                            isleftSongInPlaylist={props.model.songs?props.model.songs.filter(leftSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
        }
    function rightSongDetails(props){
        function rightSongInPlaylistCB(rightCompare){ return rightCompare.id === props.model.rightCompare }
        function onAddToPlaylistACB(){ 
            props.model.addToPlaylist(props.model.rightPromiseState.data); }
        return promiseNoData(props.model.rightPromiseState) || 
                <DetailsView rightSongData={props.model.rightPromiseState.data}
                            isRightSongInPlaylist={props.model.songs?props.model.songs.filter(rightSongInPlaylistCB).length > 0?true:false:false}
                            onAddToPlaylist={onAddToPlaylistACB}/>
        }
};
*/
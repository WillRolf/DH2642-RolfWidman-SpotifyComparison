import DetailsView from "../views/detailsView";
import promiseNoData from "../views/promiseNoData";

export default
function Details(props){
    function leftSongInPlaylistCB(song) { return song.data.id === props.model.leftCompare }
    function rightSongInPlaylistCB(song) { return song.data.id === props.model.rightCompare }
    function onAddToPlaylistACB(song) { props.model.addToPlaylist(song) }
    /*function onAddToPlaylistACB() { 
        props.model.leftCompare?props.model.addToPlaylist(props.model.leftPromiseState.data):props.model.rightCompare?props.model.addToPlaylist(props.model.rightPromiseState.data):""; }*/
    return promiseNoData(props.model.leftPromiseState) && promiseNoData(props.model.rightPromiseState) ||
                <DetailsView leftData={props.model.leftPromiseState.data?
                                        props.model.leftPromiseState.data.artists?
                                        props.model.leftPromiseState.data.artists[0]:
                                        props.model.leftPromiseState.data.tracks[0]:undefined}
                            rightData={props.model.rightPromiseState.data?
                                        props.model.rightPromiseState.data.artists?
                                        props.model.rightPromiseState.data.artists[0]:
                                        props.model.rightPromiseState.data.tracks[0]:undefined}
                            isLeftSongInPlaylist={props.model.songs?props.model.songs.filter(leftSongInPlaylistCB).length > 0?true:false:false}
                            isRightSongInPlaylist={props.model.songs?props.model.songs.filter(rightSongInPlaylistCB).length > 0?true:false:false}
                            onPlaylistButtonPress={onAddToPlaylistACB}/>
}
import PlaylistView from "../views/playlistView.jsx";

export default
function Playlist(props){
    function removeFromPlaylistACB(song){ props.model.removeFromPlaylist(song)}
    return <PlaylistView songs = {props.model.songs}
                        onRemoveButton={removeFromPlaylistACB}/>;
}
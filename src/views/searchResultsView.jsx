function SearchResultsView(props){
    function showSearchResultsCB(result){
        console.log("result:")
        console.log(result)
        function onPlaylistButtonPressACB(){ props.onPlaylistButtonPress(result) }
        function onLeftButtonPressACB(){ props.onLeftButtonPress(result) }
        function onRightButtonPressACB(){ props.onRightButtonPress(result) }
        let image = result.data.name?
                    result.data.albumOfTrack.coverArt.sources[0].url:
                    result.data.visuals.avatarImage?.sources[0].url;
        function getNameCB(){
            return <div style="font-size:25px">
            {result.data.name?String(result.data.name).length>34?
            String(result.data.name).slice(0,35)+"...":String(result.data.name):
            String(result.data.profile.name).length>34?
            String(result.data.profile.name).slice(0,35)+"...":String(result.data.profile.name)}
            </div>}
        function getTypeCB(){
            return <div>
            {result.data.name?"Type: Song":"Type: Artist"}
            </div>}
        function getAddToPlaylistButtonCB(){
            return result.data.name?
            (<button class="addToPlaylistButton"
            onClick={onPlaylistButtonPressACB}
            disabled={props.isSongInPlaylist(result)}>
                Add To Playlist
            </button>):
            (<div></div>)
        }
        return (image==null?"":(<div class="searchResult">
            <span class="searchInfo">
                <img src={image}
                    class="searchPic">
                </img>
                {getNameCB()}<br></br>
                {getTypeCB()}</span>
                <button
                class="button"
                onClick={onLeftButtonPressACB}>
                    Add Left
                </button>
                <button
                class="button"
                onClick={onRightButtonPressACB}>
                    Add Right
                </button>
                {getAddToPlaylistButtonCB()}
            </div>
        ));
    }
    return (
    <div>
        {
            props.searchResults.map(showSearchResultsCB)
        }
    </div>
    );
}

export default SearchResultsView;
function DetailsView(props){
    console.log(props.leftData)
    function addToPlaylistClickACB(){ props.onAddToPlaylist(props.songData); }
    function cancelClickACB(){  }

    function displayIconCB(side){
        if (side === "left"){ 
            return props.leftData?
            <td><img src={props.leftData.album?props.leftData.album.images[1].url:props.leftData.images[1].url}></img></td>:
            <td></td>
        }
    }
    function displayRightIconCB(){
        return <td><img src={props.rightData.album?props.rightData.album.images[1].url:props.rightData.images[1].url}></img></td>
    }

    return (<div class="grid"><table style="width:100%">
        <tr>
            {displayIconCB("left")}
            {props.rightData?displayRightIconCB():<td></td>}
        </tr>
        <tr>
            <td>NAME</td>
            <td>NAME</td>
        </tr>
        </table></div>
    );
}

export default DetailsView;

{/* <div>
            <div class="details">
                <p style="font-weight:bolder;">{props.songData.name}</p>
                <span class="clearfix">
                    <img src={props.songData.albumOfTrack.coverArt.sources[0].url}height="150"style="float:left">
                    </img>
                    <p class="detailsText" id="text">
                        <span>
                            popularity: {props.songData.tracks.popularity}
                        </span>
                    </p>
                </span>
                <p class="detailsText" id="text">
                    {props.songData.map(renderSongsCB)}
                </p>
                <p><a href={props.songData.external_Urls}>
                        More Information</a>
                </p>
            </div>
            <div>
                <button
                disabled={props.isSongInPlaylist}
                onClick={addToPlaylistClickACB}
                style="margin:10px">
                    Add to playlist!
                </button>
                <button
                onClick={cancelClickACB}
                style="margin:10px">
                    Cancel
                </button>
            </div>
        </div> */}
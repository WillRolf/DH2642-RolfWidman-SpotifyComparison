function DetailsView(props){
    console.log(props.leftData)
    function addToPlaylistClickACB(){ props.onAddToPlaylist(props.songData); }
    function cancelClickACB(){  }
    return (<div class="grid"><table style="width:100%">
        <tr>
            <th></th>

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
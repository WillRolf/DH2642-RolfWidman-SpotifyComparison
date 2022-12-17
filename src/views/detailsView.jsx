function DetailsView(props){
    console.log(props.leftData)
    function addToPlaylistClickACB(){ props.onAddToPlaylist(props.songData); }
    function cancelClickACB(){  }
    function displayIconCB(side){
        if (side === "left"){ 
            return props.leftData?
                <td><img class="detailsPic" src={props.leftData.album?
                    props.leftData.album.images[1].url:
                    props.leftData.images[1].url}></img></td>:<td></td>
        }
        if (side === "right"){ 
            return props.rightData?
                <td><img class="detailsPic" src={props.rightData.album?
                    props.rightData.album.images[1].url:
                    props.rightData.images[1].url}></img></td>:<td></td>
        }
    }
    function displayAlbumOrGenreCB(side){
        function displayGenreCB(genre){ return <div>{genre}</div> }
        if (side === "left"){ 
            return props.leftData?
            <td>{props.leftData.album?
                (<div>Album:<br></br>{props.leftData.album.name}</div>):
                props.leftData.genres.length>0?
                (<div>Genres:<br></br>{props.leftData.genres.map(displayGenreCB)}</div>):"No Genre"}</td>:<td></td>
        }
        if (side === "right"){ 
            return props.rightData?
            <td>{props.rightData.album?
                (<div>Album:<br></br>{props.rightData.album.name}</div>):
                props.rightData.genres.length>0?
                (<div>Genres:<br></br>{props.rightData.genres.map(displayGenreCB)}</div>):"No Genre"}</td>:<td></td>
        }
    }

    return (<div class="grid"><table style="width:100%">
        <tr>
            {displayIconCB("left")}
            {displayIconCB("right")}
        </tr>
        <tr height="100">
            <td style="font-size:25px">{props.leftData?props.leftData.name:""}</td>
            <td style="font-size:25px">{props.rightData?props.rightData.name:""}</td>
        </tr>
        <tr height="100">
            <td>Type:<br></br>{props.leftData?props.leftData.type:""}</td>
            <td>Type:<br></br>{props.rightData?props.rightData.type:""}</td>
        </tr>
        <tr height="100">
            <td>Popularity (Out of 100):<br></br>{props.leftData?props.leftData.popularity:""}</td>
            <td>Popularity (Out of 100):<br></br>{props.rightData?props.rightData.popularity:""}</td>
        </tr>
        <tr height="100">
            {displayAlbumOrGenreCB("left")}
            {displayAlbumOrGenreCB("right")}
        </tr>
        </table></div>
    );
}

export default DetailsView;
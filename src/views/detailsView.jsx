function DetailsView(props){
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
    function displayFollowersOrDurationCB(side){
        function getDurationCB(data){ 
            var minutes = Math.floor(parseInt(data.duration_ms) / 60000);
            var seconds = ((parseInt(data.duration_ms) % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        function splitNumbers(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); //found on https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
        }
        if (side === "left"){ 
            return props.leftData?
            <td>{props.leftData.album?
                (<div>Duration:<br></br>{getDurationCB(props.leftData)}</div>):
                (<div>Followers:<br></br>{splitNumbers(props.leftData.followers.total)}</div>)}</td>:<td></td>
        }
        if (side === "right"){ 
            return props.rightData?
            <td>{props.rightData.album?
                (<div>Duration:<br></br>{getDurationCB(props.rightData)}</div>):
                (<div>Followers:<br></br>{splitNumbers(props.rightData.followers.total)}</div>)}</td>:<td></td>
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
            <td>{props.leftData?<div>Type:<br></br>{props.leftData.type}</div>:""}</td>
            <td>{props.rightData?<div>Type:<br></br>{props.rightData.type}</div>:""}</td>
        </tr>
        <tr height="100">
            {displayFollowersOrDurationCB("left")}
            {displayFollowersOrDurationCB("right")}
        </tr>
        <tr height="100">
            <td>{props.leftData?<div>Popularity (Out of 100):<br></br>{props.leftData.popularity}</div>:""}</td>
            <td>{props.rightData?<div>Popularity (Out of 100):<br></br>{props.rightData.popularity}</div>:""}</td>
        </tr>
        <tr height="100">
            {displayAlbumOrGenreCB("left")}
            {displayAlbumOrGenreCB("right")}
        </tr>
        <tr height="100">
            <td>{props.leftData?<a href={props.leftData.external_urls.spotify} class="clickURL">Spotify URL</a>:""}</td>
            <td>{props.rightData?<a href={props.rightData.external_urls.spotify} class="clickURL">Spotify URL</a>:""}</td>
        </tr>
        </table></div>
    );
}

export default DetailsView;
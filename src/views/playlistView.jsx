function PlaylistView(props){
    function songTableRowCB(song){
        console.log("playlist:")
        console.log(song)
        function xButtonClickACB(){ props.onRemoveButton(song)}
        function displayArtistsCB(artist){
            return <div>{artist.name}</div>
        }
        function getDurationCB(){ 
            var minutes = Math.floor(parseInt(song.duration_ms) / 60000);
            var seconds = ((parseInt(song.duration_ms) % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        return <tr key={song.id} class="searchText">
            <td><img src={song.album.images[0].url}class="searchPic"></img></td>
            <td><a>{song.name}</a></td>
            <td>{song.artists.map(displayArtistsCB)}</td>
            <td>{song.album.name}</td>
            <td style="text-align:center">{getDurationCB()}</td>
            <td><button
            onClick={xButtonClickACB}
            class="xButton">
            x</button></td></tr>;
    }


    return <div class="grid"><table style="width:100%">
        <tbody>
            <tr class="searchText" style="font-size:25px"><th></th>
            <th>Title</th>
            <th>Artists</th>
            <th>Album</th>
            <th>Duration</th>
            <th></th></tr>
            {console.log(props.songs)}
            {
                props.songs.map(songTableRowCB)
            }
        </tbody>
        </table></div>;
}

export default PlaylistView;
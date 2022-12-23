function PlaylistView(props){
    function songTableRowCB(song){
        function xButtonClickACB(){ props.onRemoveButton(song)}
                //function songNameClickACB(){ showDetails(dish)}
        function displayArtistsCB(artist){
            return <div>{artist.profile.name}</div>
        }
        function getDurationCB(){ 
            var minutes = Math.floor(parseInt(song.duration.totalMilliseconds) / 60000);
            var seconds = ((parseInt(song.duration.totalMilliseconds) % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        return <tr key={song.id} class="searchText">
            <td><img src={song.albumOfTrack.coverArt.sources[0].url}class="searchPic"></img></td>
            <td><a /*href="#details"
                onClick={songNameClickACB}*/>
                {song.name}</a></td>
            <td>{song.artists.items.map(displayArtistsCB)}</td>
            <td>{song.albumOfTrack.name}</td>
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
            {
                props.songs.map(songTableRowCB)
            }
        </tbody>
        </table></div>;
}

export default PlaylistView;
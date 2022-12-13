function SearchResultsView(props){
    function showSearchResultsCB(result){
        //const trackImage = result.data.visuals.avatarImage.sources[0].url;
        //console.log(trackImage)
        // result.data.name?result.data.albumOfTrack.coverArt.sources[0].url:trackImage
        console.log(result);
        function onSearchResultACB(){ 
            props.onSearchResult(result);
            /* TODO window.location.hash = "#details"; */
        }
        /*
        function returnCoverCB(){
            if (result.data.profile.name){
                return result.data.albumOfTrack.coverArt.sources[0].url
            }
            return result.data.visuals.avatarImage.sources[0].url
        }
        function returnNameCB(){
            if (result.data.profile.name){
                return result.data.profile.name
            }
            return result.data.profile.name
        }*/
        return (
            <span class="searchResult"
            onClick={onSearchResultACB}>
                <img src={result.data.name?result.data.albumOfTrack.coverArt.sources[0].url:result.data.visuals.avatarImage.sources[0].url}height="100">
                </img>
                <div>
                    {result.data.name?result.data.name:result.data.profile.name}
                </div>
            </span>
        );
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
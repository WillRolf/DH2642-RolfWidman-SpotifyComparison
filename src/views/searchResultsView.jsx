function SearchResultsView(props){
    function showSearchResultsCB(result){
        let image = result.data.name?
                    result.data.albumOfTrack.coverArt.sources[0].url:
                    result.data.visuals.avatarImage?.sources[0].url;
        function getNameCB(){
            if (image == null){ return }
            else { 
                return <div>
                {result.data.name?result.data.name:result.data.profile.name}
                </div>}}
        function onSearchResultACB(){ 
            props.onSearchResult(result);
            /* TODO window.location.hash = "#details"; */
        }
        return (
            <span class="searchResult"
            onClick={onSearchResultACB}>
                <img src={image}
                    height="100">
                </img>
                {getNameCB()}
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
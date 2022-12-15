function SearchResultsView(props){
    function showSearchResultsCB(result){
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
        function onSearchResultACB(){ 
            props.onSearchResult(result);
            /* TODO window.location.hash = "#details"; */
        }
        return (image==null?"":(
            <span class="searchResult"
            onClick={onSearchResultACB}>
                <img src={image}
                    height="100"
                    class="searchPic">
                </img>
                {getNameCB()}
                {getTypeCB()}
                <div>-----</div>
                <button
                class="button">
                    Add Left
                </button>
                <button
                class="button">
                    Add Right
                </button>
            </span>
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
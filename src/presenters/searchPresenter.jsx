import promiseNoData from "../views/promiseNoData.jsx";
import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import { searchSpotify } from "../spotifySource.js"
import resolvePromise from "../resolvePromise.js"
import "../firebaseModel.js"

const Search={
    props: ["model"],
    data(){ return { searchQuery: "" ,
                    searchType: "",
                searchResultsPromiseState: {promise: "", data: "", error: ""} } },
    created(){ if (!this.searchResultsPromiseState.promise) {resolvePromise(searchSpotify({}), this.searchResultsPromiseState)}; },
    render(){
        function onSearchQueryACB(text){ this.searchQuery = text; }
        function onSearchTypeACB(choice){ this.searchType = choice; }
        function onSearchACB(){ resolvePromise(searchSpotify({query: this.searchQuery, type: this.searchType}), this.searchResultsPromiseState) }
        function onAddToPlaylistACB(song){ this.model.addToPlaylist(song) }
        //function onSearchResultACB(result){ this.model.setFirstSong(result.id); }
        //function onSearchResultACB(result){ this.model.setSecondSong(result.id); }
        return (
            <div>
                <SearchFormView spotifyTypeOptions={["artists", "tracks"]}
                                onInputChange={onSearchQueryACB.bind(this)}
                                onOptionChoice={onSearchTypeACB.bind(this)}
                                onButtonPress={onSearchACB.bind(this)}/>
                {promiseNoData(this.searchResultsPromiseState)||
                <SearchResultsView searchResults={this.searchResultsPromiseState.data}
                                onPlaylistButtonPress={onAddToPlaylistACB.bind(this)}/>}
            </div>
        )
    }
};
export default Search;
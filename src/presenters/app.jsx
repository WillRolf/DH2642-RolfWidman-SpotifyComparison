import Search from "../presenters/searchPresenter.jsx"
import Playlist from "../presenters/playlistPresenter.jsx"
import Show from "../presenters/show.jsx"

export default
function App(props){
    function changeToHomeACB(){window.location.hash="#search"}
    function changeToPlaylistACB(){window.location.hash="#playlist"}
    return (<div>
                <div class="topnav">
                <a onClick={changeToHomeACB}>Home</a>
                <a onClick={changeToPlaylistACB}>Playlist</a>
                </div>
            <div class="flexParent">
                <div class="mainContent">
                    <Show hash="#playlist"><Playlist model={props.model}/></Show>
                </div>
                <div class="sidebar"><Search model={props.model}/></div>
            </div>
        </div>
        );
}
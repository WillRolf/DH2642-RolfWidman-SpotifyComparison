import Details from "../presenters/detailsPresenter.jsx"
import Search from "../presenters/searchPresenter.jsx"
import Playlist from "../presenters/playlistPresenter.jsx"
import Login from "../presenters/loginPresenter.jsx"
import Show from "../presenters/show.jsx"
import firebase from "firebase/app";
import "firebase/auth"
const auth = firebase.auth();

export default
function App(props){
    function logout(){
        function removeSongsFromPlaylistCB(song){ props.model.removeFromPlaylist(song) }
        auth.signOut();
        props.model.songs.map(removeSongsFromPlaylistCB)
    }
    function changeToHomeACB(){window.location.hash="#home"}
    function changeToPlaylistACB(){window.location.hash="#playlist"}
    function changeToLoginACB(){ logout();
        window.location.hash="#login"}
    function renderNavBarACB(){ 
        return(
            <div class="topnav">
                    <a onClick={changeToHomeACB}>Home</a>
                    <a onClick={changeToPlaylistACB}>Playlist</a>
                    <a onClick={changeToLoginACB}>Logout</a>
            </div>
        );
    }
    return (<div>
                <Show hash="#playlist">{renderNavBarACB()}</Show>
                <Show hash="#home">{renderNavBarACB()}</Show>
                <Show hash="#login"><Login model={props.model}/></Show>
            <div class="flexParent">
                <div class="mainContent">
                    <Show hash="#playlist"><Playlist model={props.model}/></Show>
                    <Show hash="#home"><div class="details"><Details model={props.model}/></div></Show>
                </div>
                <Show hash="#playlist"><div class="sidebar"><Search model={props.model}/></div></Show>
                <Show hash="#home"><div class="sidebar"><Search model={props.model}/></div></Show>
            </div>
        </div>
    );
}
import Details from "../presenters/detailsPresenter.jsx"
import Search from "../presenters/searchPresenter.jsx"
import Playlist from "../presenters/playlistPresenter.jsx"
import Login from "../presenters/loginPresenter.jsx"
import Show from "../presenters/show.jsx"

export default
function App(props){
    function changeToHomeACB(){window.location.hash="#home"}
    function changeToPlaylistACB(){window.location.hash="#playlist"}
    function changeToLoginACB(){window.location.hash="#login"}
    function renderNavBarACB(){ 
        if (window.location.hash !== "#login"){
            return(
                <div class="topnav">
                        <a onClick={changeToHomeACB}>Home</a>
                        <a onClick={changeToPlaylistACB}>Playlist</a>
                </div>
            );
        }
    }
    function renderSidebarACB(){
        if (window.location.hash !== "#login"){
            return(
                <div class="sidebar"><Search model={props.model}/></div>
            );
        }
    }
    return (<div>
                <Show hash="#login"><Login model={props.model}/></Show>
                {renderNavBarACB()}
            <div class="flexParent">
                <div class="mainContent">
                    <Show hash="#playlist"><Playlist model={props.model}/></Show>
                    <Show hash="#home"><div class="details"><Details model={props.model}/></div></Show>
                </div>
                {renderSidebarACB()}
            </div>
        </div>
    );
}
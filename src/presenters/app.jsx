import Details from "../presenters/detailsPresenter.jsx"
import Search from "../presenters/searchPresenter.jsx"
import Show from "../presenters/show.jsx"

export default
function App(props){
    return (<div><div class="topnav">
                <a onClick={window.location.hash="#search"}>Home</a>
                <a onClick={window.location.hash="#search"}>Playlist</a>
                <a onClick={window.location.hash="#search"}>About</a>
            </div>
            <div class="flexParent">
                <div class="mainContent"><Show hash="#details"><Details model={props.model} /></Show></div>
                <div class="sidebar"><Show hash="#search"><Search model={props.model} /></Show></div>
            </div>
        </div>
           );
}
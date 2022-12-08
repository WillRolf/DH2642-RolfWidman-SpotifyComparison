import Search from "../presenters/searchPresenter.jsx"
import Show from "../presenters/show.js"

export default
function App(props){
    return (<div class="flexParent">
                <div class="mainContent">
                </div>
                <Show hash="#search"><Search model={props.model} /></Show>
            </div>
           );
}
/*
export default
function App(props){
    return (<div class="flexParent">
                <div class="mainContent">
                </div>
                Hello World
            </div>
           );
}
*/
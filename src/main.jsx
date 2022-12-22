import { render, h } from "vue";
import VueRoot from "./presenters/VueRoot.jsx";
//import searchPresenter from "./presenters/searchPresenter.jsx";

import "./views/navigation.js";

render(<VueRoot/>, document.getElementById("app"));

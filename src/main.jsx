import { render, h } from "vue";
import VueRoot from "./presenters/VueRoot.jsx";
import searchPresenter from "./presenters/searchPresenter.jsx";

render(<searchPresenter/>, document.getElementById("app"));

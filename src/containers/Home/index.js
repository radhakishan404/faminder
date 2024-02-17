import withNavigate from "../../routes/withNavigate.jsx";
import HomeContainer from "./HomeContainer.js";
import HomeStore from "./HomeStore.js";

export default HomeStore(withNavigate(HomeContainer));
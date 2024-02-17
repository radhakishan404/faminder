import withNavigate from "../../routes/withNavigate.jsx";
import RegisterContainer from "./RegisterContainer.js";
import RegisterStore from "./RegisterStore.js";

export default RegisterStore(withNavigate(RegisterContainer));
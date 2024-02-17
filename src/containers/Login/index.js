import withNavigate from "../../routes/withNavigate.jsx";
import LoginContainer from "./LoginContainer.js";
import LoginStore from "./LoginStore.js";

export default LoginStore(withNavigate(LoginContainer));
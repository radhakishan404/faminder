import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthData, setGlobalLoading } from "../../redux/common/commonSlice";
import { login } from "../../redux/sessionReducer";

const mapStateToProps = (state) => {
    return {
        globalLoading: state.common.globalLoading,
        userData: state.session.userData,
    };
};

const mapDispatch = {
    setGlobalLoading,
    login
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
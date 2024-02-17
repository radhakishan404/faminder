import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthData, setGlobalLoading } from "../../redux/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        globalLoading: state.common.globalLoading,
        isAuth: state.common.isAuth,
    };
};

const mapDispatch = {
    setAuthData,
    setGlobalLoading,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
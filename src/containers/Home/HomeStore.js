import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setGlobalLoading } from "../../redux/common/commonSlice";
import { changeInitialState, handlePaginationState } from "../../redux/events/eventsSlice";
import { logout } from "../../redux/sessionReducer";

const mapStateToProps = (state) => {
    return {
        globalLoading: state.common.globalLoading,
        userData: state.session.userData,
        authToken: state.session.authToken,
        pagination: state.events.pagination,
        initialValues: state.events.initialValues,
        formType: state.events.formType,
    };
};

const mapDispatch = {
    setGlobalLoading,
    changeInitialState,
    handlePaginationState,
    logout,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
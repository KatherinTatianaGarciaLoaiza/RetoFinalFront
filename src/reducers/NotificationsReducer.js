import * as actions from "../actions/NotificationsActions";

export const initialState = {
    Configurations: {
        oKRFinishScreen: true,
        kRFinishScreen: true,
        kRLateScreen: true,
        oKREditScreen: true,
    }
}

export default function notificationsReducer(state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        case actions.CONFIGURATION_OF_NOTIFICATIONS:
            return{
                ...state,
                Configurations:{
                    payload
                }
            }
        default:
            return state;
    }
}
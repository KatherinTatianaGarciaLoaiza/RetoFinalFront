import * as actions from '../actions/okrActions';

export const initialState = {
  disabledButtonOKRForm: true,
  redirect: null,
  OKR: {
    userId: '',
    title: '',
    objective: '',
    responName: '',
    responEmail: '',
    vertical: '',
    description: '',
    krs: [],
  },
  OKRUser: [],
  ProgressOKR: {},
  DataProgressChart: {
    actualPercentage: [0],
  },
  EditOkr: {},
};

export default function okrReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case actions.UPDATE_STATE_OKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          ...payload,
        },
      };
    case actions.CREATEKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          krs: [...state.OKR.krs, payload],
        },
      };
    case actions.LOGIN:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          userId: payload,
        },
      };
    case actions.UPDATEOKR:
      return {
        ...state,
        OKRUser: payload,
      };
    case actions.POSTOKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          title: "",
          objective: "",
          responName: "",
          responEmail: "",
          vertical: "",
          description: "",
          krs: [],
        },
        disabledButtonOKRForm: true,
      };
    case actions.OKRMAXPROGRESS:
      return {
        ...state,
        ProgressOKR: payload,
      };
    case actions.DATACHARTOKR:
      return {
        ...state,
        DataProgressChart: payload,
      };
    case actions.EDITOKR:
      return {
        ...state,
        ...payload,
      }
    case actions.UPDATE_STATUS_BUTTON_OKR:
      return {
        ...state,
        ...payload,
      };
    case actions.CLEAN_REDIRECT:
      return {
        ...state,
        redirect: null
      }
    default:
      return state;
  }
}

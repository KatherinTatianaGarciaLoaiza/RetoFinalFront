import * as actions from "../actions/okrActions";

export const initialState = {
  disabledButtonOKRForm: true,
  redirect: null,
  OKR: {
    userId: "",
    title: "",
    objective: "",
    responName: "",
    responEmail: "",
    vertical: "",
    description: "",
    krs: [],
  },
  OKRUser: [],
  ProgressOKR: {},
  DataProgressChart: {
    actualPercentage: [0],
  },
  EditOkr: {},
  EditKr: {},
  AllOkrs: [],
};

export default function okrReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case actions.UPDATE_STATE_OKR:
      return {
        ...state,
        redirect: '/CreateKR',
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
        redirect: '/MyOKRS',
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
        redirect: "/UserOKRS",
      };
    case actions.DATACHARTOKR:
      return {
        ...state,
        DataProgressChart: payload,
        redirect: "/UserOKRS",
      };
    case actions.ALLOKRS:
      return {
        ...state,
        AllOkrs: payload,
      };
    case actions.EDITOKR:
      return {
        ...state,
        ...payload,
      };
    case actions.EDITKR:
      return {
        ...state,
        ...payload,
      };
    case actions.CLEAN_REDIRECT:
      return {
        ...state,
        redirect: null,
      }
    default:
      return state;
  }
}

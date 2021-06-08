import * as actions from '../actions/okrActions';

export const initialState = {
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
};

export default function okrReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case actions.CREATEOKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          title: payload.title,
          objective: payload.objective,
          responName: payload.respName,
          responEmail: payload.respEmail,
          vertical: payload.vertical,
          description: payload.description,
        },
      };
    case actions.CREATEKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          krs: [
            ...state.OKR.krs,
            {
              keyResult: payload.keyResult,
              responName: payload.responName,
              responEmail: payload.responEmail,
              description: payload.description,
              startDate: payload.startDate,
              endDate: payload.endDate,
              percentageWeight: payload.percentageWeight,
            },
          ],
        },
      };
    case actions.LOGIN:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          userId: payload
        },
      };
    default:
      return state;
  }
}

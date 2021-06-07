import * as actions from '../actions/okrActions';

export const initialState = {
  OKR: {
    title: '',
    objective: '',
    respName: '',
    respEmail: '',
    vertical: '',
    description: '',
    KR: [],
  },
};

export default function okrReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATEOKR:
      const payload = action.payload;
      return {
        ...state,
        OKR: {
          ...state.OKR,
          title: payload.title,
          objective: payload.objective,
          respName: payload.respName,
          respEmail: payload.respEmail,
          vertical: payload.vertical,
          description: payload.description,
        },
      };
    case actions.CREATEKR:
      const payload1 = action.payload;
      return {
        ...state,
        OKR: {
          ...state.OKR,
          KR: [
            ...state.OKR.KR,
            {
              keyResult: payload1.keyResult,
              name: payload1.name,
              email: payload1.email,
              description: payload1.description,
              initDate: payload1.initDay,
              finalDate: payload1.endDay,
              percentageWeight: payload1.slider,
            },
          ],
        },
      };
    default:
      return state;
  }
}

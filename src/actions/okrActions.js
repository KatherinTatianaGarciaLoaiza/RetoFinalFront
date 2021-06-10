import axios from 'axios';
import swal from 'sweetalert';
const URI = 'http://localhost:8080';

export const CREATEKR = 'CREATE_KR';
export const LOGIN = 'LOGIN';
export const UPDATE_STATE_OKR = 'UPDATE_STATE_OKR';
export const UPDATEOKR = 'UPDATE_OKR';
export const POSTOKR = 'POSTOKR';
export const OKRMAXPROGRESS = "OKRMAXPROGRESS";

export const updateStateOKR = (data) => ({
  type: UPDATE_STATE_OKR,
  payload: data,
});

export const createKR = (data) => ({
  type: CREATEKR,
  payload: data,
});

export const login = (userId) => ({
  type: LOGIN,
  payload: userId,
});

export const update = (data) => ({
  type: UPDATEOKR,
  payload: data,
});

export const postokr = () => ({
  type: POSTOKR,
})

export const progressOkr = (data) => ({
  type: OKRMAXPROGRESS,
  payload: data,
});

export const postOKR = (data) => {
  return async (dispatch) => {
    await axios.post(`${URI}/okr`, data);
    dispatch(postokr());
    swal("OKR CREADO EXITOSAMENTE !!!.")
      .then((value) => {
        dispatch(getOwnOKR(data.userId))
      });
  };
};

export function getOwnOKR(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/all-okr/${userId}`);
    dispatch(update(data));
  };
}

export function getOkrById(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/okr/${id}`);
    console.log(data)
    dispatch(progressOkr(data));
  };
}

export function getMaxProgressOkr(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/okr-max/${userId}`);
    dispatch(progressOkr(data));
  };
}

//TODO -> Hacer el deslogueo

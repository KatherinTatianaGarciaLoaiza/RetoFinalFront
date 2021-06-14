import axios from 'axios';
import swal from 'sweetalert';
const URI = 'http://localhost:8080'

//'https://api-okr.herokuapp.com';

export const CREATEKR = 'CREATE_KR';
export const LOGIN = 'LOGIN';
export const UPDATE_STATE_OKR = 'UPDATE_STATE_OKR';
export const UPDATEOKR = 'UPDATE_OKR';
export const POSTOKR = 'POSTOKR';
export const OKRMAXPROGRESS = "OKRMAXPROGRESS";
export const EDITOKR = "EDITOKR";
export const UPDATE_STATUS_BUTTON_OKR = "UPDATE_STATUS_BUTTON_OKR";
export const DATACHARTOKR = "DATACHARTOKR";
export const ALLOKRS = "ALLOKRS";

export const CLEAN_REDIRECT = "CLEAN_REDIRECT"

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

export const cleanRedirect = () => ({
  type: CLEAN_REDIRECT,
});

export const postokr = () => ({
  type: POSTOKR,
});

export const editokr = (data) => ({
  type: EDITOKR,
  payload: { EditOkr: data, redirect: '/OkrEditForm' },
});

export const progressOkr = (data) => ({
  type: OKRMAXPROGRESS,
  payload: data,
});

export const updateStatusButton = (data) => ({
  type: UPDATE_STATUS_BUTTON_OKR,
  payload: data,
});

export const DataProgressChart = (data) => ({
  type: DATACHARTOKR,
  payload: data,
});

export const getAllOkrs = (data) => ({
  type: ALLOKRS,
  payload: data,
});


export const postOKR = (data) => {
  return async (dispatch) => {
    await axios.post(`${URI}/okr`, data);
    dispatch(postokr());
    swal('Perfecto !', 'OKR Creado exitosamente', 'success').then((value) => {
      dispatch(getOwnOKR(data.userId));
    });
  };
};

export function getOwnOKR(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/all-okr/${userId}`);
    dispatch(update(data));
  };
}

export function editOkr(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/okr/${id}`);
    dispatch(editokr(data));
  };
}

export function getOkrById(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/okr/${id}`);
    dispatch(progressOkr(data));
  };
}

export function getMaxProgressOkr(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/okr-max/${userId}`);
    dispatch(progressOkr(data));
  };
}

export const updateKR = (kr, userId) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro de actualizar?',
      text: 'Una vez actualice, se guardaran los cambios',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.put(`${URI}/kr`, kr);
        swal(
          'Perfecto !',
          'Se ha actualizado el progreso del KR',
          'success'
        ).then(() => {
          dispatch(getOwnOKR(userId));
        });
      } else {
        swal('No se ha actualizado nada');
      }
    });
  };
};
export function getDataChart(okrId) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/data-chart/${okrId}`);
    dispatch(DataProgressChart(data));
  };
}

export function getAllOkr() {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/all-okrs`);
    console.log(data)
    dispatch(getAllOkrs(data));
  };
}

//TODO -> Hacer el deslogueo

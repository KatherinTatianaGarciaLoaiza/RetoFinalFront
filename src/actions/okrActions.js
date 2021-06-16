import axios from 'axios';
import swal from 'sweetalert';
const URI = 'http://localhost:8080';

//'https://api-okr.herokuapp.com';

export const CREATEKR = 'CREATE_KR';
export const LOGIN = 'LOGIN';
export const UPDATE_STATE_OKR = 'UPDATE_STATE_OKR';
export const UPDATEOKR = 'UPDATE_OKR';
export const POSTOKR = 'POSTOKR';
export const OKRMAXPROGRESS = 'OKRMAXPROGRESS';
export const EDITOKR = 'EDITOKR';
export const EDITKR = 'EDITKR';
export const DATACHARTOKR = 'DATACHARTOKR';
export const ALLOKRS = 'ALLOKRS';

export const CLEAN_REDIRECT = 'CLEAN_REDIRECT';

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

export const editkr = (data) => ({
  type: EDITKR,
  payload: { EditKr: data, redirect: '/KrEditForm' },
});

export const progressOkr = (data) => ({
  type: OKRMAXPROGRESS,
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

export const deleteKr = (krId, userId) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro de eliminar?',
      text: 'Se borrará el KR seleccionado',
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        // await axios.delete(`${URI}/`);
        console.log('eliminando wiii')
        swal(
          'Perfecto !',
          'KR Eliminado exitosamente, por favor redirigir los porcentajes del kr eliminado',
          'success'
        ).then((value) => {
          dispatch(getOwnOKR(userId));
        });
      } else {
        swal({
          title: 'No se eliminó',
          icon: 'info',
          button: 'Aceptar',
        });
      }
    });
  };
};

export const deleteOkr = (okrId, userId) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro de eliminar?',
      text: 'Una vez eliminado, se borrarán los OKR con sus KR',
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(`${URI}/delete/${okrId}`);
        swal('Perfecto !', 'OKR Eliminado exitosamente', 'success').then(
          (value) => {
            dispatch(getOwnOKR(userId));
          }
        );
      } else {
        swal({
          title: 'No se eliminó',
          icon: 'info',
          button: 'Aceptar',
        });
      }
    });
  };
};

export const postOKR = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(`${URI}/okr`, data);
      dispatch(postokr());
      swal('Perfecto !', 'OKR Creado exitosamente', 'success').then((value) => {
        dispatch(getOwnOKR(data.userId));
      });
    } catch (err) {
      swal({
        title: 'El peso de los KR debe ser igual a 100%',
        icon: 'error',
        button: 'Aceptar',
      });
    }
  };
};

export const putKR = (data, userId) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro que desea actualizar?',
      text: 'Una vez actualice, se guardaran los cambios',
      icon: 'warning',
      buttons: ['Cancelar', 'Actualizar'],
      dangerMode: true,
    }).then(async (willUpdate) => {
      if (willUpdate) {
        await axios.put(`${URI}/kr`, data);
        swal('Perfecto !', 'Se ha actualizado el KR', 'success').then(() => {
          dispatch(getOwnOKR(userId));
        });
      } else {
        swal('No se ha actualizado nada');
      }
    });
  };
};

export const putOKR = (data) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro que desea actualizar?',
      text: 'Una vez actualice, se guardaran los cambios',
      icon: 'warning',
      buttons: ['Cancelar', 'Actualizar'],
      dangerMode: true,
    }).then(async (willUpdate) => {
      if (willUpdate) {
        await axios.put(`${URI}/okr`, data);
        swal('Perfecto !', 'Se ha actualizado el OKR', 'success').then(() => {
          dispatch(getOwnOKR(data.userId));
        });
      } else {
        swal('No se ha actualizado nada');
      }
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

export function editKr(krId) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/kr/${krId}`);
    dispatch(editkr(data));
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
    console.log(data);
    dispatch(getAllOkrs(data));
  };
}

//TODO -> Hacer el deslogueo

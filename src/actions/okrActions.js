import axios from 'axios';
import swal from 'sweetalert';

import { auth } from '../components/logging/Logging';

const saveNotification = (messagge, type) => {
  axios.post(`${URI}/createNotifications`,
    {
      "userId": auth.currentUser.email,
      "message": messagge,
      "type": type
    })
}

const verificacion = (messagge, type) => {
  axios.get(`http://localhost:8080/GetConfigNotifications/${auth.currentUser.email}`).then(res => {
    switch (type) {
      case 'OKRFINISHSCREEN':
        if (res.data.oKRFinishScreen) {
          saveNotification(messagge, type);
        }
        break;
      case 'KRFINISHSCREEN':
        if (res.data.kRFinishScreen) {
          saveNotification(messagge, type);
        }
        break;
      case 'KRLATESCREEN':
        if (res.data.kRLateScreen) {
          saveNotification(messagge, type);
        }
        break;
      case 'OKREDITSCREEN':
        if (res.data.oKREditScreen) {
          saveNotification(messagge, type);
        }
        break;
      case 'OKRDELETESCREEN':
        if (res.data.oKRDeleteScreen) {
          saveNotification(messagge, type);
        }
        break;  
      default:
        console.log("pao pao");
        break;
    }
  })
}
/* export const URI = 'https://api-okr.herokuapp.com'  */
export const URI = 'http://localhost:8080'

export const CREATEKR = 'CREATE_KR';
export const LOGIN = 'LOGIN';
export const UPDATE_STATE_OKR = 'UPDATE_STATE_OKR';
export const UPDATEOKR = 'UPDATE_OKR';
export const POSTOKR = 'POSTOKR';
export const OKRMAXPROGRESS = "OKRMAXPROGRESS";
export const EDITOKR = "EDITOKR";
export const EDITKR = 'EDITKR';
export const DATACHARTOKR = "DATACHARTOKR";
export const ALLOKRS = "ALLOKRS";

export const CLEAN_REDIRECT = "CLEAN_REDIRECT";

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



export const deleteOkr = (okrId, userId) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro de eliminar?',
      text: 'Una vez eliminado, se borrarán los OKR con sus KR',
      icon: 'warning',
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
<<<<<<< HEAD
=======

>>>>>>> 09181fac0d0fec76bc9b25dd1d257d0a1417f79a
    }).then(async (willDelete) => {
      if (willDelete) {
        axios.get(`${URI}/okr/${okrId}`)
          .then(res => verificacion(`Se elimino el OKR ${res.data.title}`, "OKRDELETESCREEN"));
        await axios.delete(`${URI}/delete/${okrId}`);
        swal('Perfecto !', 'OKR Eliminado exitosamente', 'success').then((value) => {
          dispatch(getOwnOKR(userId));
        });
      } else {
        swal({
          title: 'No se eliminó',
          icon: 'info',
          button: "Aceptar"
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
        button: "Aceptar"
      })
    }

  };
};

export const putKR = (data, userId) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro que desea actualizar?',
      text: 'Una vez actualice, se guardaran los cambios',
      icon: 'warning',
      buttons: ["Cancelar", "Actualizar"],
      dangerMode: true,
    }).then(async (willUpdate) => {
      if (willUpdate) {
        axios.get(`${URI}/okr/${data.okrId}`)
          .then(res => verificacion(`Se edito el KR ${data.keyResult} del OKR ${res.data.title}`, "OKREDITSCREEN"));
        await axios.put(`${URI}/kr`, data);
        swal(
          'Perfecto !',
          'Se ha actualizado el KR',
          'success'
        ).then(() => {
          dispatch(getOwnOKR(userId));
        });
      } else {
        swal('No se ha actualizado nada');
      }
    });
  }
}

export const putOKR = (data) => {
  return async (dispatch) => {
    swal({
      title: '¿Esta seguro que desea actualizar?',
      text: 'Una vez actualice, se guardaran los cambios',
      icon: 'warning',
      buttons: ["Cancelar", "Actualizar"],
      dangerMode: true,
    }).then(async (willUpdate) => {
      if (willUpdate) {
        verificacion(`Se edito el OKR ${data.title}`, "OKREDITSCREEN");
        await axios.put(`${URI}/okr`, data);
        swal(
          'Perfecto !',
          'Se ha actualizado el OKR',
          'success'
        ).then(() => {
          dispatch(getOwnOKR(data.userId));
        });
      } else {
        swal('No se ha actualizado nada');
      }
    });
  }
}


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
  }
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
    console.log("entroperro")
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
        if (kr.progressKr == 100) {
          axios.get(`${URI}/okr/${kr.okrId}`)
            .then(res => {
              verificacion(`Se completo el KR ${kr.keyResult} del OKR ${res.data.title}`, "KRFINISHSCREEN")
              if (res.data.progressOkr == 100){
                verificacion(`Se completo el OKR ${res.data.title}`, "OKRFINISHSCREEN")
              }
            });
        }
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

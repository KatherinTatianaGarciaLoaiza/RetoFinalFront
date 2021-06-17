import React, { useEffect } from 'react';
import {
  Button,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import DateFnsUtils from '@date-io/date-fns';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../../styles/KRPage.css';
import { cleanRedirect, putKR } from '../../actions/okrActions';
import swal from 'sweetalert';


const KREditForm = ({ dispatch, krEdit, userId, redirect }) => {
  const { handleSubmit, control } = useForm();
  const history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.push(redirect)
      dispatch(cleanRedirect())
    }
  }, [redirect])

  const onSubmit = (data) => {
    console.log(data)
    data.krId = krEdit.krId;
    data.okrId = krEdit.okrId;
    data.percentageWeight = krEdit.percentageWeight;
    data.progressKr = krEdit.progressKr;
    if (data.startDate > data.endDate) {
      swal({
        title: 'La fecha de fin no puede ser inferior a la fecha de inicio',
        icon: 'error',
        button: "Aceptar"
      })
    } else {
      dispatch(putKR(data, userId))
    }
  };


  const redirectOKRForm = () => {
    history.push('/MyOKRS');
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Actualizar KR</h2>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={5}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant='outlined'
                fullWidth
                id='input_keyresult_kr'
                label='Resultado clave'
              />
            )}
            name='keyResult'
            control={control}
            defaultValue={krEdit.keyResult}
          />
        </Grid>
        <Grid item xs={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              render={({ field }) => {

                return (
                  <KeyboardDatePicker
                    required
                    disableToolbar
                    autoOk
                    variant='inline'
                    inputVariant='outlined'
                    value={field.value}
                    onChange={field.onChange}
                    disabled={true}
                    InputAdornmentProps={{ position: 'start' }}
                    label='Fecha Inicio'
                    format='yyyy-MM-dd'
                  />
                )
              }}
              control={control}
              name='startDate'
              defaultValue={new Date(krEdit.startDate.replaceAll("-", ","))}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              render={({ field }) => (
                <KeyboardDatePicker
                  required
                  disableToolbar
                  disablePast={true}
                  autoOk
                  variant='inline'
                  inputVariant='outlined'
                  value={field.value}
                  onChange={field.onChange}
                  InputAdornmentProps={{ position: 'start' }}
                  label='Fecha Fin'
                  format='yyyy/MM/dd'
                />
              )}
              control={control}
              name='endDate'
              defaultValue={new Date(krEdit.endDate.replaceAll("-", ","))}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <h3>Responsable</h3>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant='outlined'
                fullWidth
                id='input_responname_kr'
                label='Nombre'
              />
            )}
            name='responName'
            control={control}
            defaultValue={krEdit.responName}
          />
        </Grid>
        <Grid item xs={5}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant='outlined'
                fullWidth
                id='input_responemail_kr'
                label='Email'
              />
            )}
            name='responEmail'
            control={control}
            defaultValue={krEdit.responEmail}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={6}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant='outlined'
                rows='3'
                fullWidth
                id='input_description_okr'
                label='Descripcion'
              />
            )}
            name='description'
            control={control}
            defaultValue={krEdit.description}
          />
        </Grid>

      </Grid>

      <Grid container spacing={2} style={{ margin: 20 }}>
        <Grid item xs={4}>
          <Button
            onClick={redirectOKRForm}
            variant='contained'
            color='primary'
            startIcon={<ArrowBackIcon />}
            style={{ fontFamily: 'Lato', margin: 10 }}>
            Cancelar
          </Button>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            endIcon={<SaveIcon />}
            style={{ fontFamily: 'Lato', margin: 10 }}>
            Actualizar
          </Button>
        </Grid>
      </Grid>
    </form>


  );
};

const mapStateToProps = (state) => ({
  krEdit: state.okr.EditKr,
  userId: state.okr.OKR.userId,
  redirect: state.okr.redirect
});

export default connect(mapStateToProps)(KREditForm);

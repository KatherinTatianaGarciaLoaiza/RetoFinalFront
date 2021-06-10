import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Divider,
  Grid,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core';
import '../styles/KRPage.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createKR, postOKR } from '../actions/okrActions';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const KRPage = ({ dispatch, okr }) => {
  const { handleSubmit, control, reset } = useForm();
  const history = useHistory();

  const redirect = () => {
    dispatch(postOKR(okr));
    history.push('/MyOKRS');
  };

  const onSubmit = (data) => {
    data.startDate = data.startDate.toISOString().slice(0, 10);
    data.endDate = data.endDate.toISOString().slice(0, 10);
    dispatch(createKR(data));
    reset({
      startDate: new Date(),
      endDate: new Date(),
      percentageWeight: 50,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Crear KR</h2>
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
            defaultValue=''
          />
        </Grid>
        <Grid item xs={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              render={({ field }) => (
                <KeyboardDatePicker
                  required
                  disableToolbar
                  autoOk
                  variant='inline'
                  inputVariant='outlined'
                  value={field.value}
                  onChange={field.onChange}
                  InputAdornmentProps={{ position: 'start' }}
                  label='Fecha Inicio'
                  format='yyyy/MM/dd'
                  disablePast={true}
                />
              )}
              control={control}
              name='startDate'
              defaultValue={new Date()}
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
                  autoOk
                  variant='inline'
                  inputVariant='outlined'
                  value={field.value}
                  onChange={field.onChange}
                  InputAdornmentProps={{ position: 'start' }}
                  label='Fecha Fin'
                  format='yyyy/MM/dd'
                  disablePast={true}
                />
              )}
              control={control}
              name='endDate'
              defaultValue={new Date()}
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
            defaultValue=''
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
            defaultValue=''
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
            defaultValue=''
          />
        </Grid>
        <Grid item xs={4}>
          <Typography id='input_percentage'>Peso porcentual</Typography>
          <Controller
            required
            name='percentageWeight'
            control={control}
            defaultValue={50}
            render={({ field }) => (
              <Slider
                {...field}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                valueLabelDisplay='auto'
                min={0}
                max={100}
                step={5}
                defaultValue={50}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={4}>
          <Button
            onClick={() => history.push('/CreateOKR')}
            variant='contained'
            style={{ fontFamily: 'Lato', marginRight: 10 }}>
            Volver
          </Button>

          <Button
            type='submit'
            variant='contained'
            style={{ fontFamily: 'Lato' }}>
            Añadir KR
          </Button>
          <Button
            onClick={redirect}
            disabled={!okr.krs.length > 0}
            variant='contained'
            style={{ fontFamily: 'Lato', marginLeft: 10 }}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state) => ({
  okr: state.okr.OKR,
});

export default connect(mapStateToProps)(KRPage);

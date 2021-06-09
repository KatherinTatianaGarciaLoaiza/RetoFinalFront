import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Divider, Grid, Slider, TextField, Typography } from '@material-ui/core';
import '../styles/KRPage.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createKR, postOKR } from '../actions/okrActions';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const KRPage = ({ dispatch, okr }) => {
  const { register, handleSubmit, control } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [selectedDate, handleDateChange] = useState(new Date());
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data)

    data.startDate = startDate.toISOString().slice(0, 10);
    data.endDate = finalDate.toISOString().slice(0, 10);
    // dispatch(createKR(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Crear KR</h2>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={5} >
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                id="input_keyresult_kr"
                label="Resultado clave"
              />
            )}
            name="keyResult"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              render={({ field }) => (
                <KeyboardDatePicker
                  disableToolbar
                  autoOk
                  variant='inline'
                  inputVariant="outlined"
                  value={field.value}
                  onChange={field.onChange}
                  InputAdornmentProps={{ position: "start" }}
                  label="fecha Inicio"
                  format="yyyy/MM/dd"
                />
              )}
              control={control}
              name="startDate"
              defaultValue={new Date()}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              render={({ field }) => (
                <KeyboardDatePicker
                  disableToolbar
                  autoOk
                  variant='inline'
                  inputVariant="outlined"
                  value={field.value}
                  onChange={field.onChange}
                  InputAdornmentProps={{ position: "start" }}
                  label="fecha Inicio"
                  format="yyyy/MM/dd"
                />
              )}
              control={control}
              name="endDate"
              defaultValue={new Date()}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <h3>Responsable</h3>
      <Grid container spacing={2}  >
        <Grid item xs={6} >
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                id="input_responname_kr"
                label="Nombre"
              />
            )}
            name="responName"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={5} >
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                id="input_responemail_kr"
                label="Email"
              />
            )}
            name="responEmail"
            control={control}
            defaultValue=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={6}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                rows="3"
                fullWidth
                id="input_description_okr"
                label="Descripcion"
              />
            )}
            name="description"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={4}>
          <Typography id="input_percentage">
            Peso porcentual
          </Typography>
          <Controller
            name="percentageWeight"
            control={control}
            defaultValue={50}
            render={({ field }) => (
              <Slider
                {...field}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                step={5}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={4}>
          <Button onClick={() => history.push('/CreateOKR')} variant="contained" style={{ fontFamily: 'Lato', marginRight: 10 }}>
            Volver
          </Button>
          <Button variant="contained" style={{ fontFamily: 'Lato', marginRight: 10 }}>
            Añadir KR
          </Button>
          <Button type="submit" variant="contained" style={{ fontFamily: 'Lato' }}>
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

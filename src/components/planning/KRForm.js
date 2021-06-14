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
import '../../styles/KRPage.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createKR, postOKR, updateStatusButton } from '../../actions/okrActions';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  h6: {
    margin: '20px 0',
  },
});

const KRForm = ({ dispatch, okr }) => {
  const { handleSubmit, control, reset } = useForm();
  const history = useHistory();
  const classes = useStyles();

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

  const redirectOKRForm = () => {
    dispatch(updateStatusButton({ disabledButtonOKRForm: false }));
    history.push('/CreateOKR');
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
      <h6 className={classes.h6}> KR AÑADIDOS</h6>
      <Grid container spacing={3}>
        {okr.krs.length !== 0 ? (
          okr.krs.map((kr) => (
            <Grid item xs={2}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} gutterBottom>
                    KR: {kr.keyResult}
                  </Typography>
                  <Typography className={classes.title} gutterBottom>
                    Responsable: {kr.responName}
                  </Typography>
                  <Typography className={classes.title}>
                    Peso asignado: {kr.percentageWeight}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={2}>
            <Card className={classes.root}>
              <CardContent>
                <Typography component='h5' color='textSecondary'>
                  Aún no tiene
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2} style={{ margin: 20 }}>
        <Grid item xs={4}>
          <Button
            onClick={redirectOKRForm}
            variant='contained'
            color='primary'
            startIcon={<ArrowBackIcon />}
            style={{ fontFamily: 'Lato', margin: 10 }}>
            Volver
          </Button>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            endIcon={<AddIcon />}
            style={{ fontFamily: 'Lato' }}>
            Añadir KR
          </Button>
          <Button
            onClick={redirect}
            disabled={!okr.krs.length > 0}
            variant='contained'
            color='primary'
            endIcon={<SaveIcon />}
            style={{ fontFamily: 'Lato', margin: 10 }}>
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

export default connect(mapStateToProps)(KRForm);

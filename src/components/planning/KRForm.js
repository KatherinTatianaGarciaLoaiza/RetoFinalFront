import React, { useEffect, useState } from 'react';
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
import { createKR, postOKR, cleanRedirect } from '../../actions/okrActions';
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
import swal from 'sweetalert';

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

const KRForm = ({ dispatch, okr, redirect }) => {
  const { handleSubmit, control, reset } = useForm();
  const history = useHistory();
  const classes = useStyles();
  const [sumWeightKrs, setSumWeightKrs] = useState(0);
  const [disabledFields, setDisabledFields] = useState(false)
  const [dataEndMin, setDataEndMin] = useState(new Date());

  const save = () => {
    dispatch(postOKR(okr));

  };
  useEffect(() => {
    const sumKrs = okr.krs.reduce((acc, curr) => acc + curr.percentageWeight, 0)
    setSumWeightKrs(100 - sumKrs)
    if (sumKrs >= 100) {
      setDisabledFields(true)
    }
  }, [okr.krs])

  useEffect(() => {
    if (redirect) {
      history.push(redirect);
      dispatch(cleanRedirect())
    }
  }, [redirect])

  const onSubmit = (data) => {

    if (data.percentageWeight === 0) {
      swal({
        title: 'El peso del KR debe ser superior a 0%',
        icon: 'error',
        button: "Aceptar"
      })
    } else if (data.startDate > data.endDate) {
      swal({
        title: 'La fecha de fin no puede ser inferior a la fecha de inicio',
        icon: 'error',
        button: "Aceptar"
      })
    } else {
      dispatch(createKR(data));
      reset({
        startDate: new Date(),
        endDate: new Date(),
        percentageWeight: 0,
      });
    }
  };

  const redirectOKRForm = () => {
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
                onPaste={(e)=> e.preventDefault()}
                autoFocus={true}
                autoComplete='off'
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
                    InputAdornmentProps
                    label='Fecha Inicio'
                    format='yyyy/MM/dd'
                    disablePast={true}
                  />
                )

              }

              }
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
                  InputAdornmentProps
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
                onPaste={(e)=> e.preventDefault()}
                variant='outlined'
                fullWidth
                autoComplete='off'
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
                onPaste={(e)=> e.preventDefault()}
                required
                type='email'
                variant='outlined'
                fullWidth
                autoComplete='off'
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
                autoComplete='off'
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
            defaultValue={0}
            render={({ field }) => (
              <Slider
                required
                {...field}
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                valueLabelDisplay='auto'

                min={0}
                max={sumWeightKrs}
                step={5}
                defaultValue={0}
                disabled={disabledFields}
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
            disabled={disabledFields}
            type='submit'
            variant='contained'
            color='primary'
            endIcon={<AddIcon />}
            style={{ fontFamily: 'Lato' }}>
            Añadir KR
          </Button>
          <Button
            onClick={save}
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
  redirect: state.okr.redirect
});

export default connect(mapStateToProps)(KRForm);

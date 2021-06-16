import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../../styles/OkrFormCss.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanRedirect, updateStateOKR } from '../../actions/okrActions';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 250,
  },
}));



const OkrFormPage = ({ dispatch, okr, redirect }) => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const history = useHistory();

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (redirect) {
      history.push(redirect)
    }
    dispatch(cleanRedirect())
  }, [redirect])

  const onSubmit = (data) => {
    dispatch(updateStateOKR(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Crear objetivo</h2>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={4}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus={true}
                autoComplete='off'
                required
                variant='outlined'
                fullWidth
                id='input_title_okr'
                label='Titulo OKR'
              />
            )}
            name='title'
            control={control}
            defaultValue={okr.title}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                autoComplete='off'
                variant='outlined'
                fullWidth
                id='input_objective_okr'
                label='Objetivo'
              />
            )}
            name='objective'
            control={control}
            defaultValue={okr.objective}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            render={({ field }) => (
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor='input_vertical'>Seleccionar vertical</InputLabel>
                <Select
                  {...field}
                  required
                  input={<OutlinedInput labelWidth={labelWidth}
                    id='input_vertical' />} >
                  <MenuItem value='Sofka testing'>Sofka testing</MenuItem>
                  <MenuItem value='Agile Services'>Agile Services</MenuItem>
                  <MenuItem value='Arquitectura y Desarrollo'>Arquitectura y Desarrollo</MenuItem>
                  <MenuItem value='IA (inteligencia artificial)'>IA (inteligencia artificial)</MenuItem>
                </Select>
              </FormControl>
            )}
            name='vertical'
            control={control}
            defaultValue={okr.vertical}
          />
        </Grid>
      </Grid>
      <h3>Responsable</h3>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                required
                autoComplete='off'
                variant='outlined'
                fullWidth
                id='input_respon_okr'
                label='Nombre'
              />
            )}
            name='responName'
            control={control}
            defaultValue={okr.responName}
          />
        </Grid>
        <Grid item xs={5}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete='off'
                required
                variant='outlined'
                fullWidth
                id='input_responemail_okr'
                label='Email'
              />
            )}
            name='responEmail'
            control={control}
            defaultValue={okr.responEmail}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={7}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete='off'
                id='input_description_okr'
                label='Descripcion'
                multiline
                rows='3'
                fullWidth
                variant='outlined'
              />
            )}
            name='description'
            control={control}
            defaultValue={okr.description}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={4}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            endIcon={<NavigateNextIcon />}
            style={{ fontFamily: 'Lato' }}>
            Siguiente
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

export default connect(mapStateToProps)(OkrFormPage);
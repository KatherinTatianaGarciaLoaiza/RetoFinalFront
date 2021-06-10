import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../styles/OkrFormCss.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStateOKR } from '../actions/okrActions';
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

const OkrFormPage = ({ dispatch, okr }) => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const history = useHistory();

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const onChange = (data) => {
    const objectWithFields = control.fieldsRef.current;
    const listFieldBlank = Object.keys(objectWithFields).filter(
      (field) => objectWithFields[field]._f.value === ''
    );
    setDisabledButton(listFieldBlank.length > 0);
    if (!disabledButton) {
      dispatch(updateStateOKR(data));
    }
  };

  return (
    <form onChange={handleSubmit(onChange)}>
      <h2>Crear objetivo</h2>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={4}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
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
                <InputLabel ref={inputLabel} htmlFor='input_vertical'>
                  Seleccionar vertical
                </InputLabel>
                <Select
                  input={
                    <OutlinedInput
                      labelWidth={labelWidth}
                      id='input_vertical'
                    />
                  }
                  {...field}>
                  <MenuItem value='DESARROLLO'>Sofka testing</MenuItem>
                  <MenuItem value='Agile Services'>Agile Services</MenuItem>
                  <MenuItem value='Arquitectura y Desarrollo'>
                    Arquitectura y Desarrollo
                  </MenuItem>
                  <MenuItem value='IA (inteligencia artificial)'>
                    IA (inteligencia artificial)
                  </MenuItem>
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
            disabled={disabledButton}
            onClick={() => history.push('/CreateKR')}
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
});

export default connect(mapStateToProps)(OkrFormPage);

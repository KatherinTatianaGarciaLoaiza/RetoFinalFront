import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Slider,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { cleanRedirect, krWeightsRequest } from '../../actions/okrActions';
import { makeStyles } from '@material-ui/core/styles';
import '../../styles/Card.css';

const useStyles = makeStyles({
  root: {
    border: '1px solid #E5DFDA',
    background: '#F9F9F5',
    maxWidth: 300,
    minWidth: 300,
    margin: '25px',
  },
  media: {
    height: 140,
  },
});

const FormUpdateWeigthKRS = ({ dispatch, OKR, userId, redirect }) => {
  const { handleSubmit, control, reset } = useForm();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.push(redirect);
      dispatch(cleanRedirect());
    }
  }, [redirect]);

  const onSubmit = (data) => {
    let list = [];
    for (let property in data) {
      list.push({ id: property, percentage: data[property] });
    }
    const totalPercentage = list.reduce((acc, curr) => acc + curr.percentage, 0);

    if (!validarPorcentage(list)) {
      swal({
        title: 'Algun porcentage es 0',
        icon: 'error',
        button: 'Aceptar',
      });
    } else if (totalPercentage !== 100) {
      swal({
        title: 'El porcentaje debe de ser igual a 100%',
        icon: 'error',
        button: 'Aceptar',
      });
    } else {
      dispatch(krWeightsRequest(list, userId));
    }
  };

  const validarPorcentage = (list) => {
    let newList = list.filter(el => el.percentage === 0);
    return newList.length <= 0;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Reasigne los pesos porcentuales de cada KR </h2>
      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={1} style={{ marginBottom: 20 }}>
        {OKR.krs.map((kr) => (
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography component='h6'>{kr.keyResult}</Typography>
                  <Typography component='h2'>
                    Peso porcentual: {kr.percentageWeight}%
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    Responsable: {kr.responName}
                  </Typography>
                  <CardActions>
                    <Controller
                      required
                      name={kr.krId}
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
                          max={100}
                          step={5}
                          defaultValue={0}
                        />
                      )}
                    />
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        type='submit'
        variant='contained'
        style={{ backgroundColor: '#f0950e', color: 'white' }}>
        Confirmar ajuste
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  OKR: state.okr.OkrWeigth,
  userId: state.okr.OKR.userId,
  redirect: state.okr.redirect,
});

export default connect(mapStateToProps)(FormUpdateWeigthKRS);

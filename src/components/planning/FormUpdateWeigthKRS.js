import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
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

const FormUpdateWeigthKRS = ({ dispatch, OKR, userId, redirect }) => {
  const { handleSubmit, control, reset } = useForm();
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
    const number = list.reduce((acc, curr) => acc + curr.percentage, 0);
    if (number !== 100) {
      swal({
        title: 'El porcentaje debe de ser igual a 100%',
        icon: 'error',
        button: 'Aceptar',
      });
    } else {
      dispatch(krWeightsRequest(list, userId));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        {OKR.krs.map((kr) => (
          <Grid item xs={5}>
            <Card>
              <CardActionArea>
                <CardMedia>{kr.keyResult}</CardMedia>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {kr.percentageWeight}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {kr.responName}
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
      <Button type='submit' variant='contained'>
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


import React from 'react'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Slider, CardActions } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';




const CardUpdateWeigthKR = ({ kr }) => {
  const { handleSubmit, control, reset } = useForm();
  return (
    <Card >
      <CardActionArea>
        <CardMedia >
          {kr.keyResult}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {kr.percentageWeight}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {kr.responName}
          </Typography>
          <CardActions>
            <Controller
              required
              name={`kr-${kr.krId}`}
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
  )
}


export default CardUpdateWeigthKR;

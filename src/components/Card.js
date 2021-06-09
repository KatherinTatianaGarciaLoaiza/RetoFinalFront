import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import '../styles/Card.css';
import { Slider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: '25px',
  },
  media: {
    height: 140,
  },
});

const KrCard = ({ keyResult, description, value }) => {
  const [slider, setSlider] = useState(value);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className='progressbar'>
          <Box position='relative' display='inline-flex'>
            <CircularProgress
              variant='determinate'
              color='primary'
              value={value}
              size={60}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position='absolute'
              display='flex'
              alignItems='center'
              justifyContent='center'>
              <Typography
                variant='caption'
                component='div'
                color='textSecondary'>{`${value}%`}</Typography>
            </Box>
          </Box>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {keyResult}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <EditIcon />
        </Button>
        <Button size='small' color='primary'>
          <DeleteIcon />
        </Button>
        <Slider
          className='slider-input'
          id='slider_weight'
          value={slider}
          aria-labelledby='discrete-slider'
          valueLabelDisplay='auto'
          step={5}
          marks
          min={value}
          max={100}
          onChange={(event, newValue) => {
            setSlider(newValue);
          }}
        />
      </CardActions>
    </Card>
  );
};

export default KrCard;

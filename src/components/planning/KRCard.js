import React, { useEffect, useState } from 'react';

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
import '../../styles/Card.css';
import { Slider } from '@material-ui/core';
import { cleanRedirect, editKr, updateKR } from '../../actions/okrActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

const KRCard = ({ dispatch, kr, userId, redirect }) => {
  const [slider, setSlider] = useState(kr.progressKr);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.push(redirect);
    }
    return () => {
      dispatch(cleanRedirect());
    };
  }, [redirect]);

  const handleEdit = (krId) => {
    dispatch(editKr(krId));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className='progressbar'>
          <Box position='relative' display='inline-flex'>
            <CircularProgress
              variant='determinate'
              color='primary'
              value={kr.progressKr}
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
                color='textSecondary'>{`${kr.progressKr}%`}</Typography>
            </Box>
          </Box>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {kr.keyResult}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {kr.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => {
          handleEdit(kr.krId);
        }} size='small' color='primary'>
          <EditIcon
            className='btn_color'
          />
        </Button>
        <Button size='small' color='primary'>
          <DeleteIcon className='btn_color' />
        </Button>
        <Slider
          className='slider-input'
          id='slider_weight'
          value={slider}
          aria-labelledby='discrete-slider'
          valueLabelDisplay='auto'
          step={5}
          marks
          min={kr.progressKr}
          max={100}
          disabled={kr.progressKr < 100 ? false : true}
          onChange={(event, newValue) => {
            setSlider(newValue);
          }}
          onMouseUp={() => {
            dispatch(updateKR({ ...kr, progressKr: slider }, userId));
          }}
        />
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  userId: state.okr.OKR.userId,
});

export default connect(mapStateToProps)(KRCard);


import React from 'react'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const OKRUpdateWeigth = ({ OkrWeigth }) => {

return (<div>
        {
            OkrWeigth.krs.map(kr => (
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
                            <Slider
                                id='slider_update_weight'
                                value={slider}
                                aria-labelledby='discrete-slider'
                                valueLabelDisplay='auto'
                                step={5}
                                min={kr.percentageWeight}
                                max={100}
                                /* onChange={(event, newValue) => {
                                    setSlider(newValue);
                                }} 
                                onMouseUp={() => {
                                    dispatch(updateKR({ ...kr, progressKr: slider }, userId));
                                }}*/
                            />                                
                            </CardActions>

                        </CardContent>
                    </CardActionArea>

                </Card>
            ))
        }

    </div>
    )
}

const mapStateToProps = (state) => ({
    OkrWeigth: state.okr.OkrWeigth,

});

export default connect(mapStateToProps)(OKRUpdateWeigth);

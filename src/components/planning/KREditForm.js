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
import { createKR, postOKR, updateKR, updateStatusButton } from '../../actions/okrActions';
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

const KRPage = ({ dispatch, krEdit }) => {
    const { handleSubmit, control, reset } = useForm();
    const history = useHistory();
    const classes = useStyles();

    // const redirect = () => {
    //     dispatch(updateKR(okr));
    //     history.push('/MyOKRS');
    // };

    const onSubmit = (data) => {
        data.startDate = data.startDate.toISOString().slice(0, 10);
        data.endDate = data.endDate.toISOString().slice(0, 10);
        dispatch(createKR(data));
        reset({
            endDate: new Date(),
        });
    };
    console.log(krEdit);
    const redirectOKRForm = () => {
        dispatch(updateStatusButton({ disabledButtonOKRForm: false }));
        history.push('/MyOKRS');
    };

    return (

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Actualizar KR</h2>
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
                                defaultValue={krEdit.keyResult}
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
                                        />
                                    )}
                                    control={control}
                                    name='startDate'
                                    defaultValue={krEdit.startDate}
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
                                defaultValue={krEdit.responName}
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
                                defaultValue={krEdit.responEmail}
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
                                defaultValue={krEdit.description}
                            />
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} style={{ margin: 20 }}>
                        <Grid item xs={4}>
                            <Button
                                onClick={redirectOKRForm}
                                variant='contained'
                                color='primary'
                                startIcon={<ArrowBackIcon />}
                                style={{ fontFamily: 'Lato', margin: 10 }}>
                                Cancelar
                            </Button>

                            <Button
                                // onClick={redirect}
                                // disabled={!okr.krs.length > 0}
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
    krEdit: state.okr.EditKr,
});

export default connect(mapStateToProps)(KRPage);
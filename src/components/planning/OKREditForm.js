import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../../styles/OkrFormCss.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';

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

const OkrFormPage = ({ dispatch, okrEdit }) => {
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
        // if (!disabledButton) {
        //     dispatch(updateStateOKR(data));
        // }
    };

    return (
        <form onChange={handleSubmit(onChange)}>
            <h2>Modificar objetivo</h2>
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

                        defaultValue={okrEdit.title}
                    // defaultValue=''

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
                        defaultValue={okrEdit.objective}
                    // defaultValue=''

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
                        defaultValue={okrEdit.vertical}
                    // defaultValue=''

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
                        defaultValue={okrEdit.responName}
                    // defaultValue=''

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
                        defaultValue={okrEdit.responEmail}
                    // defaultValue=''

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
                        defaultValue={okrEdit.description}
                    // defaultValue=''
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{ marginTop: 20 }}>
                <Grid item xs={4}>
                    <Button
                        onClick={() => { history.push('/MyOKRS') }}
                        variant='contained'
                        color='primary'
                        // endIcon={<NavigateNextIcon />}
                        style={{ fontFamily: 'Lato' }}>
                        Cancelar
                    </Button>
                    <Button
                        disabled={disabledButton}
                        // onClick={redirect}
                        variant='contained'
                        color='primary'
                        endIcon={<SaveIcon />}
                        style={{ fontFamily: 'Lato', margin: 10 }}>
                        Actualizar
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const mapStateToProps = (state) => ({
    okrEdit: state.okr.EditOkr,

});

export default connect(mapStateToProps)(OkrFormPage);

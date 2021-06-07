import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
//import libreria calendar
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//slider
import { Slider } from '@material-ui/core';
//CSS
import '../styles/KRPage.css';
//Material Icons
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
//History from react router
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const KRPage = ({ dispatch }) => {
  //form hook
  const { register, handleSubmit } = useForm();
  // estados fechas
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  let history = useHistory();
  //   Estado slider
  const [slider, setSlider] = useState(50);

  const onSubmit = (data) => {
    data.initDay = startDate.toLocaleDateString();
    data.endDay = finalDate.toLocaleDateString();
    data.slider = slider;
    console.log(data);
  };

  const onClick = () => {
    // let labelValue = prompt('Ingrese el tipo de campo: ');
    // let father = document.getElementById('left-side');
    // let label = document.createElement('LABEL');
    // let input = document.createElement('INPUT');
    // label.innerHTML = labelValue;
    // input.type = 'text';
    // input.className = 'input-style';
    // input.placeholder = 'holaperros';
    // input.id = 'input_' + labelValue;
    // father.appendChild(label);
    // father.appendChild(input);
  };

  return (
    <div>
      <h1 className='title-center'>Crear KR</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form'>
          <div className='left-side' id='left-side'>
            <div className='kr-input'>
              <label htmlFor='input_kr'>Resultado Clave</label>
              <input
                type='text'
                id='input_kr'
                className='input-style'
                placeholder='Resultado Clave'
                {...register('keyResult', { required: true })}
              />
            </div>
            <h3 className='title-center'>Responsable</h3>
            <div className='kr-input'>
              <label htmlFor='input_name'>Nombre</label>
              <input
                type='text'
                id='input_name'
                placeholder='Nombre del Responsable'
                className='input-style'
                {...register('name', { required: true })}
              />
            </div>

            <div className='kr-input'>
              <label htmlFor='input_email'>Correo</label>
              <input
                type='email'
                id='input_email'
                placeholder='Correo del Responsable'
                className='input-style'
                {...register('email', { required: true })}
              />
            </div>
            <div className='kr-input'>
              <label htmlFor='text_description'>Descripcion</label>
              <textarea
                name='description'
                id='text_description'
                className='input-style'
                cols='60'
                rows='8'
                {...register('description', { required: true })}></textarea>
            </div>
            <div className='kr-input'>
              <label htmlFor='text_description'>Agregar un campo</label>
              <button onClick={onClick} className='add-field' type='button'>
                <AddCircleOutlineIcon />
              </button>
            </div>
          </div>

          <div className='right-side'>
            <div className='kr-input'>
              <label htmlFor='input_date_init'>Fecha de inciación</label>
              <DatePicker
                className='input-style'
                id='input_date_init'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='yyyy/MM/dd'
              />
            </div>
            <div className='kr-input'>
              <label htmlFor='input_date_end'>Fecha de finalización</label>
              <DatePicker
                className='input-style'
                id='input_date_end'
                selected={finalDate}
                onChange={(date) => setFinalDate(date)}
                dateFormat='yyyy/MM/dd'
              />
            </div>
            <div className='kr-input'>
              <label htmlFor='slider_weight'>Peso Porcentual</label>
              <Slider
                className='slider-input'
                id='slider_weight'
                value={slider}
                aria-labelledby='discrete-slider'
                valueLabelDisplay='auto'
                step={5}
                marks
                min={0}
                max={100}
                onChange={(event, newValue) => {
                  setSlider(newValue);
                }}
              />
            </div>
          </div>
        </div>
        <div className='container-buttons'>
          <button
            className='back-button'
            type='button'
            onClick={() => {
              history.push('/CreateOKR');
            }}>
            Anterior
          </button>
          <button type='submit'>Guardar</button>
          <button className='añadir-otro' type='button'>
            Añadir otro KR
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(KRPage);
